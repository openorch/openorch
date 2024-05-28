/**
 * @license
 * Copyright (c) The Authors (see the AUTHORS file)
 *
 * This source code is licensed under the GNU Affero General Public License v3.0 (AGPLv3) for personal, non-commercial use.
 * You may obtain a copy of the AGPL v3.0 at https://www.gnu.org/licenses/agpl-3.0.html.
 *
 * For commercial use, a separate license must be obtained by purchasing from The Authors.
 * For commercial licensing inquiries, please contact The Authors listed in the AUTHORS file.
 */
package dockerservice

import (
	"bytes"
	"context"
	"fmt"
	"log/slog"
	"os/exec"
	"regexp"
	"runtime"
	"strconv"
	"strings"

	"github.com/docker/docker/client"
	"github.com/pkg/errors"
	ts "github.com/singulatron/singulatron/localtron/services/docker/types"

	"github.com/singulatron/singulatron/localtron/lib"
)

func (d *DockerService) Info() (*ts.OnDockerInfo, error) {
	d.mutex.Lock()
	defer d.mutex.Unlock()

	_, err := d.client.Ping(context.Background())
	if err == nil {
		ret := &ts.OnDockerInfo{
			HasDocker: true,
		}
		if d.dockerHost != "" && d.dockerPort != 0 {
			addr := fmt.Sprintf("%v:%v", d.dockerHost, d.dockerPort)
			ret.DockerDaemonAddress = &addr
		} else if d.dockerHost != "" {
			ret.DockerDaemonAddress = &d.dockerHost
		}

		return ret, nil
	}

	ip, port, err := d.tryFixDockerAddress()
	if err != nil {
		lib.Logger.Warn("Cannot find Docker address", slog.String("error", err.Error()))
		return &ts.OnDockerInfo{
			HasDocker: false,
		}, nil
	}
	lib.Logger.Info("Found Docker address", slog.String("ip", ip), slog.Int("port", port))

	d.dockerHost = ip
	d.dockerPort = port

	daemonAddress := fmt.Sprintf("%v:%v", ip, port)
	return &ts.OnDockerInfo{
		HasDocker:           true,
		DockerDaemonAddress: &daemonAddress,
	}, nil
}

func (d *DockerService) tryFixDockerAddress() (ip string, port int, err error) {
	dockerTcpPort := 2375

	switch runtime.GOOS {
	case "darwin":
		host, err := getLimaAddress()
		if err != nil {
			return "", 0, errors.Wrap(err, "getting lima address")
		}

		if host != "" {
			newDockerClient, err := client.NewClientWithOpts(
				client.WithAPIVersionNegotiation(),
				client.WithHost(fmt.Sprintf("tcp://%s", host)),
				// ??, see dind below but is it needed here
				client.WithVersion("1.44"),
			)
			if err != nil {
				return "", 0, errors.Wrap(err, "error creating new Docker client")
			}

			_, err = newDockerClient.Ping(context.Background())
			if err != nil {
				return "", 0, errors.Wrap(err, "error pinging Docker with new address")
			}

			d.client = newDockerClient
			port := 0
			if strings.Contains(host, ":") {
				parts := strings.Split(host, ":")
				host = parts[0]
				port64, err := strconv.ParseInt(parts[1], 10, 64)
				if err != nil {
					return "", 0, errors.Wrap(err, "error converting port to int")
				}
				port = int(port64)
			}
			return host, port, nil
		}
	case "windows":
		ipAddress, err := getWslIpAddress()
		if err != nil {
			return "", 0, errors.Wrap(err, "error getting WSL IP address")
		}

		if ipAddress != "" {
			newDockerClient, err := client.NewClientWithOpts(
				client.WithAPIVersionNegotiation(),
				client.WithHost(fmt.Sprintf("tcp://%s:%v", ipAddress, dockerTcpPort)),
				// I think dind is not up to date to use the current version 1.45, win breaks if we do
				// not specify this
				client.WithVersion("1.44"),
			)
			if err != nil {
				return "", 0, errors.Wrap(err, "error creating new Docker client")
			}

			_, err = newDockerClient.Ping(context.Background())
			if err != nil {
				return "", 0, errors.Wrap(err, "error pinging Docker with new address")
			}

			d.client = newDockerClient

			return ipAddress, 2375, nil
		}
	}

	return "", 0, fmt.Errorf("runtime '%v' has no docker address fix", runtime.GOOS)
}

func getLimaAddress() (string, error) {
	cmd := exec.Command("limactl", "list", "docker", "--format", `unix://{{.Dir}}/sock/docker.sock`)

	output, err := cmd.Output()
	if err != nil {
		return "", errors.Wrap(err, "failed to execute lima docker command")
	}

	dockerHost := strings.TrimSpace(string(output))

	return dockerHost, nil
}

func getWslIpAddress() (string, error) {
	if runtime.GOOS != "windows" {
		return "", fmt.Errorf("not a Windows system")
	}

	cmd := exec.Command("wsl", "ip", "addr", "show", "eth0")
	var out bytes.Buffer
	cmd.Stdout = &out
	err := cmd.Run()
	if err != nil {
		return "", errors.Wrap(err, fmt.Sprintf("wsl output: '%v'", out.String()))
	}
	output := out.String()

	re := regexp.MustCompile(`inet\s+(\d+\.\d+\.\d+\.\d+)/`)
	ipAddressMatch := re.FindStringSubmatch(output)
	if len(ipAddressMatch) > 1 {
		return ipAddressMatch[1], nil
	}
	return "", fmt.Errorf("IP address not found in output")
}
