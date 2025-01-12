/*
*

  - @license

  - Copyright (c) The Authors (see the AUTHORS file)
    *

  - This source code is licensed under the GNU Affero General Public License v3.0 (AGPLv3).

  - You may obtain a copy of the AGPL v3.0 at https://www.gnu.org/licenses/agpl-3.0.html.
*/
package dockerservice

import (
	"bufio"
	"context"
	"crypto/sha256"
	"encoding/base64"
	"encoding/hex"
	"fmt"
	"io"
	"io/ioutil"
	"log/slog"
	"os"
	"path"
	"path/filepath"
	"regexp"
	"strings"

	"github.com/docker/docker/api/types"
	"github.com/docker/docker/api/types/container"
	"github.com/docker/go-connections/nat"
	"github.com/flusflas/dipper"
	"github.com/pkg/errors"

	sdk "github.com/openorch/openorch/sdk/go"
	"github.com/openorch/openorch/sdk/go/logger"

	dockertypes "github.com/openorch/openorch/server/internal/services/docker/types"
)

/*
A low level method for running containers.
*/
func (d *DockerService) runContainer(
	image string,
	internalPort, hostPort int,
	options *dockertypes.RunContainerOptions,
) (*dockertypes.RunInfo, error) {
	err := d.pullImage(image)
	if err != nil {
		return nil, errors.Wrap(err, "image pull failure")
	}

	d.runContainerMutex.Lock()
	defer d.runContainerMutex.Unlock()

	if options == nil {
		options = &dockertypes.RunContainerOptions{}
	}
	if options.Name == "" {
		options.Name = "the-openorch"
	}

	envs, hostBinds, err := d.additionalEnvsAndHostBinds(
		options.Assets,
		options.Keeps,
	)
	if err != nil {
		return nil, err
	}

	containerConfig := &container.Config{
		Image: image,
		Env:   append(options.Envs, envs...),
		ExposedPorts: nat.PortSet{
			nat.Port(fmt.Sprintf("%v/tcp", internalPort)): {},
		},
		Labels: map[string]string{},
	}
	hostConfig := &container.HostConfig{
		Binds: hostBinds,
		PortBindings: map[nat.Port][]nat.PortBinding{
			nat.Port(fmt.Sprintf("%v/tcp", internalPort)): {
				{
					HostPort: fmt.Sprintf("%v", hostPort),
				},
			},
		},
		Resources: container.Resources{
			DeviceRequests: []container.DeviceRequest{},
		},
	}

	if options.GPUEnabled {
		hostConfig.Resources.DeviceRequests = append(
			hostConfig.Resources.DeviceRequests,
			container.DeviceRequest{
				Capabilities: [][]string{
					{"gpu"},
				},
				Count: -1,
			},
		)
	}

	ctx := context.Background()

	containers, err := d.client.ContainerList(
		ctx,
		container.ListOptions{All: true},
	)
	if err != nil {
		return nil, errors.Wrap(
			err,
			"error listing docker containers when launching",
		)
	}

	var existingContainer *types.Container
	for _, container := range containers {
		for _, name := range container.Names {
			if name == "/"+options.Name || name == options.Name ||
				strings.Contains(name, options.Name) {
				existingContainer = &container
				break
			}
		}
		if existingContainer != nil {
			break
		}
	}

	if existingContainer != nil {
		if existingContainer.State != "running" ||
			existingContainer.Labels["openorch-hash"] != options.Hash {
			logs, err := d.getContainerLogsAndStatus(options.Hash, 10)
			if err != nil {
				logger.Warn(
					"Error getting container logs",
					slog.String("error", err.Error()),
				)
			} else {
				logger.Debug(
					"Container state is not running or hash is mismatched, removing...",
					slog.String("containerLogs", logs.Summary),
				)
			}

			if err := d.client.ContainerRemove(ctx, existingContainer.ID, container.RemoveOptions{Force: true}); err != nil {
				return nil, errors.Wrap(err, "error removing Docker container")
			}
		} else {
			return &dockertypes.RunInfo{
				NewContainerStarted: false,
				PortNumber:          hostPort,
			}, nil
		}
	}

	containerConfig.Labels["openorch-hash"] = options.Hash

	createdContainer, err := d.client.ContainerCreate(
		ctx,
		containerConfig,
		hostConfig,
		nil,
		nil,
		options.Name,
	)
	if err != nil {
		return nil, errors.Wrap(err, "error creating Docker container")
	}

	if err := d.client.ContainerStart(ctx, createdContainer.ID, container.StartOptions{}); err != nil {
		return nil, errors.Wrap(err, "error starting Docker container")
	}

	return &dockertypes.RunInfo{
		NewContainerStarted: true,
		PortNumber:          hostPort,
	}, nil
}

func (d *DockerService) additionalEnvsAndHostBinds(
	assets map[string]string,
	persistentPaths []string,
) ([]string, []string, error) {
	// We turn the asset map (which is an envar name to file URL map)
	// eg. {"MODEL": "https://huggingface.co/TheBloke/Mistral-7B-Instruct-v0.2-GGUF/resolve/main/mistral-7b-instruct-v0.2.Q2_K.gguf"}
	// to environment variables
	// eg. MODEL=/var/lib/some/local/path.gguf"
	environment := []string{}

	// We translate URLs in the assets map into local file paths
	// by streaming the URL from the File Svc into a file and then mounting that file.

	for envarName, assetURL := range assets {
		// We use the /root/.openorch/downloads as it's also the location that the File Svc uses.
		// So if everything is running on the same node we avoid unnecessary processing.
		// This is obviously just a hack for local setups when we run directly on the host and not inside containers.
		assetPath := filepath.Join("/root/.openorch/downloads", encodeURLtoFileName(assetURL))

		assetExists := false
		if fileExists(assetPath) {
			assetExists = true
		}

		if !assetExists {
			// @todo we could do checksum calculation to verify file integrity as well
			rspFile, _, err := d.clientFactory.Client(sdk.WithToken(d.token)).
				FileSvcAPI.ServeDownload(context.Background(), assetURL).
				Execute()
			if err != nil {
				return nil, nil, err
			}
			defer rspFile.Close()

			targetFile, err := os.Create(assetPath)
			if err != nil {
				return nil, nil, errors.Wrap(err, "failed to create asset file")
			}
			defer targetFile.Close()

			_, err = io.Copy(targetFile, rspFile)
			if err != nil {
				return nil, nil, errors.Wrap(err, "failed to write asset data to file")
			}
		}

		assetPath = transformWinPaths(assetPath)

		// eg. MODEL=/root/.openorch/downloads/sOm3H4ashedFileName
		environment = append(
			environment,
			fmt.Sprintf(
				"%v=%v",
				envarName,
				assetPath,
			),
		)
	}

	// If the OpenOrch daemon is running in Docker, we need to find the volume it mounted so we can share
	// the downloaded files with containers the OpenOrch daemon starts.
	// If the OpenOrch daemon is running directly on the host, we will just mount the ~/.openorch folder in
	// the containers the OpenOrch daemon starts.

	openorchVolumeName := d.volumeName
	if openorchVolumeName == "" {
		if isRunningInDocker() {
			currentContainerId, err := getContainerID()
			if err != nil {
				return nil, nil, err
			}

			mountedVolume, err := d.getMountedVolume(
				currentContainerId,
				"/root/.openorch",
			)
			if err != nil {
				return nil, nil, err
			}

			openorchVolumeName = mountedVolume
		} else {
			// If we are not running in Docker, we will ask the Config Svc about the config directory and we mount that.
			// If that's not set, we will just default to `~/.openorch`.
			getConfigResponse, _, err := d.clientFactory.Client(sdk.WithToken(d.token)).
				ConfigSvcAPI.GetConfig(context.Background()).
				Execute()
			if err != nil {
				return nil, nil, err
			}

			configFolderPathI := dipper.Get(getConfigResponse.Config.Data, "$.config-svc.configFolderPath")
			configFolderPath, ok := configFolderPathI.(string)
			if !ok {
				homeDir, _ := os.UserHomeDir()
				configFolderPath = path.Join(homeDir, ".openorch")
			}

			openorchVolumeName = configFolderPath
		}

	}

	hostBinds := []string{}

	hostBinds = append(
		hostBinds,
		fmt.Sprintf("%v:/root/.openorch", openorchVolumeName),
	)

	// Persistent paths are paths in the container we want to persist.
	// eg. /root/.cache/huggingface/diffusers
	// Then here we mount openorch-data:/root/.cache/huggingface/diffusers
	for _, persistentPath := range persistentPaths {
		hostBinds = append(
			hostBinds,
			fmt.Sprintf(
				"%v:%v",
				openorchVolumeName,
				path.Dir(persistentPath),
			),
		)
	}

	return environment, hostBinds, nil
}

func (d *DockerService) getMountedVolume(
	containerID, mountPoint string,
) (string, error) {
	container, err := d.client.ContainerInspect(
		context.Background(),
		containerID,
	)
	if err != nil {
		return "", err
	}

	for _, mount := range container.Mounts {
		if mount.Destination == mountPoint {
			return mount.Name, nil
		}
	}

	return "", fmt.Errorf("no volume mounted at %s", mountPoint)
}

func isRunningInDocker() bool {
	// Causes false positive outside Docker
	// if checkDockerSocket() {
	// 	return true
	// }

	if checkDockerenvFile() {
		return true
	}

	if checkContainerenvFile() {
		return true
	}

	if checkContainerEnvVars() {
		return true
	}

	// Causes false positive outside Docker
	//if checkMountInfoForDockerOrKubernetes() {
	//	return true
	//}

	if checkCgroupForDockerOrKubernetes() {
		return true
	}

	if checkPidNamespace() {
		return true
	}

	if checkHostname() {
		return true
	}

	return false
}

func checkDockerSocket() bool {
	if _, err := os.Stat("/var/run/docker.sock"); err == nil {
		return true
	}
	return false
}

func checkDockerenvFile() bool {
	if _, err := os.Stat("/.dockerenv"); err == nil {
		return true
	}
	return false
}

func checkContainerenvFile() bool {
	if _, err := os.Stat("/.containerenv"); err == nil {
		return true
	}
	return false
}

func checkContainerEnvVars() bool {
	if os.Getenv("DOCKER_CONTAINER") != "" ||
		os.Getenv("KUBERNETES_SERVICE_HOST") != "" {
		return true
	}
	return false
}

func checkMountInfoForDockerOrKubernetes() bool {
	file, err := os.Open("/proc/self/mountinfo")
	if err != nil {
		return false
	}
	defer file.Close()

	scanner := bufio.NewScanner(file)
	for scanner.Scan() {
		line := scanner.Text()
		if strings.Contains(line, "/docker/") ||
			strings.Contains(line, "/kubepods/") {
			return true
		}
	}
	return false
}

func checkCgroupForDockerOrKubernetes() bool {
	file, err := os.Open("/proc/1/cgroup")
	if err != nil {
		return false
	}
	defer file.Close()

	scanner := bufio.NewScanner(file)
	for scanner.Scan() {
		if strings.Contains(scanner.Text(), "docker") ||
			strings.Contains(scanner.Text(), "kubepods") {
			return true
		}
	}
	return false
}

func checkPidNamespace() bool {
	pid1, err := os.Readlink("/proc/1/ns/pid")
	if err != nil {
		return false
	}

	self, err := os.Readlink("/proc/self/ns/pid")
	if err != nil {
		return false
	}

	return pid1 != self
}

func checkHostname() bool {
	hostname, err := os.Hostname()
	if err != nil {
		return false
	}

	return strings.HasPrefix(hostname, "docker-") ||
		strings.HasPrefix(hostname, "container-")
}

func getContainerID() (string, error) {
	id, err := getContainerIDFromCgroup()
	if err == nil {
		return id, nil
	}

	id, err = getContainerIDFromHostname()
	if err == nil {
		return id, nil
	}

	id, err = getContainerIDFromEnv()
	if err == nil {
		return id, nil
	}

	return "", fmt.Errorf("could not find container ID")
}

func getContainerIDFromCgroup() (string, error) {
	file, err := os.Open("/proc/self/cgroup")
	if err != nil {
		return "", err
	}
	defer file.Close()

	scanner := bufio.NewScanner(file)
	for scanner.Scan() {
		line := scanner.Text()
		parts := strings.Split(line, "/")
		if len(parts) > 1 {
			containerID := parts[len(parts)-1]
			if len(containerID) == 64 && isHex(containerID) {
				return containerID, nil
			}
		}
	}

	return "", fmt.Errorf("could not find container ID in /proc/self/cgroup")
}

func getContainerIDFromHostname() (string, error) {
	hostname, err := ioutil.ReadFile("/etc/hostname")
	if err != nil {
		return "", err
	}

	id := strings.TrimSpace(string(hostname))
	if len(id) >= 12 && len(id) <= 64 && isHex(id) {
		return id, nil
	}

	return "", fmt.Errorf("hostname does not contain a valid container ID")
}

func getContainerIDFromEnv() (string, error) {
	id := os.Getenv("HOSTNAME")
	if len(id) >= 12 && len(id) <= 64 && isHex(id) {
		return id, nil
	}
	return "", fmt.Errorf(
		"environment variable HOSTNAME does not contain a valid container ID",
	)
}

func isHex(s string) bool {
	for _, c := range s {
		if !strings.Contains("0123456789abcdef", strings.ToLower(string(c))) {
			return false
		}
	}
	return true
}

// transformWinPaths maps win paths to unix paths so WSL can understand it
// eg. C:\users -> /mnt/c/users
func transformWinPaths(dirPath string) string {
	parts := strings.SplitN(dirPath, "\\", 2)
	if len(parts) == 1 {
		return dirPath
	}

	driveRegex := regexp.MustCompile(`^([A-Z]):`)
	newFirstPart := driveRegex.ReplaceAllStringFunc(
		parts[0],
		func(match string) string {
			driveLetter := strings.ToLower(match[:1])
			return "/mnt/" + driveLetter
		},
	)

	newDirPath := newFirstPart
	if len(parts) > 1 {
		newDirPath += "/" + strings.ReplaceAll(parts[1], "\\", "/")
	}

	return newDirPath
}

func encodeURLtoFileName(url string) string {
	hash := sha256.New()
	hash.Write([]byte(url))
	hashBytes := hash.Sum(nil)

	encoded := base64.URLEncoding.EncodeToString(hashBytes)

	return strings.TrimRight(encoded, "=")
}

func computeChecksum(data []byte) string {
	hash := sha256.Sum256(data)
	return hex.EncodeToString(hash[:])
}

func computeFileChecksum(file *os.File) (string, error) {
	hash := sha256.New()
	if _, err := io.Copy(hash, file); err != nil {
		return "", errors.Wrap(err, "failed to compute file checksum")
	}
	return hex.EncodeToString(hash.Sum(nil)), nil
}

func fileExists(filePath string) bool {
	_, err := os.Stat(filePath)
	// Check if the error is due to the file not existing
	return !os.IsNotExist(err)
}
