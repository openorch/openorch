package dockerservice

import (
	"archive/tar"
	"context"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"os"
	"path/filepath"

	"github.com/davecgh/go-spew/spew"
	"github.com/docker/docker/api/types"
	"github.com/pkg/errors"

	docker "github.com/singulatron/superplatform/server/internal/services/docker/types"
	usertypes "github.com/singulatron/superplatform/server/internal/services/user/types"
)

// @ID buildImage
// @Summary Build an Image
// @Description Builds a Docker image with the specified parameters.
// @Description
// @Description Requires the `docker-svc:image:build` permission.
// @Tags Docker Svc
// @Accept json
// @Produce json
// @Param request body docker.BuildImageRequest true "Build Image Request"
// @Success 200 {object} docker.BuildImageResponse
// @Failure 400 {object} docker.ErrorResponse "Invalid JSON"
// @Failure 401 {object} docker.ErrorResponse "Unauthorized"
// @Failure 500 {object} docker.ErrorResponse "Internal Server Error"
// @Security BearerAuth
// @Router /docker-svc/image [put]
func (dm *DockerService) BuildImage(
	w http.ResponseWriter,
	r *http.Request,
) {
	rsp := &usertypes.IsAuthorizedResponse{}

	err := dm.router.AsRequestMaker(r).Post(r.Context(), "user-svc", fmt.Sprintf("/permission/%v/is-authorized", docker.PermissionImageBuild.Id), &usertypes.IsAuthorizedRequest{
		SlugsGranted: []string{"deploy-svc"},
	}, rsp)
	if err != nil || !rsp.Authorized {
		w.WriteHeader(http.StatusUnauthorized)
		json.NewEncoder(w).Encode(docker.ErrorResponse{Error: "Unauthorized"})
		return
	}

	req := &docker.BuildImageRequest{}
	err = json.NewDecoder(r.Body).Decode(req)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		json.NewEncoder(w).Encode(docker.ErrorResponse{Error: "Invalid JSON"})
		return
	}
	defer r.Body.Close()

	err = dm.buildImage(req)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		json.NewEncoder(w).Encode(docker.ErrorResponse{Error: err.Error()})
		return
	}

	json.NewEncoder(w).Encode(&docker.BuildImageResponse{})
}

func (dm *DockerService) buildImage(req *docker.BuildImageRequest) error {
	ctx := context.Background()

	spew.Dump(req.ContextPath)
	tarBuffer, err := createTarFromContext(req.ContextPath)
	if err != nil {
		return errors.Wrap(err, "failed to create build context tar")
	}

	dockerfilePath := req.DockerfilePath
	if dockerfilePath == "" {
		dockerfilePath = "Dockerfile"
	}

	spew.Dump(dockerfilePath)
	options := types.ImageBuildOptions{
		Tags:           []string{req.Name},
		Dockerfile:     dockerfilePath,
		Remove:         true, // Remove intermediate containers
		ForceRemove:    true,
		SuppressOutput: false,
	}

	imageBuildResponse, err := dm.client.ImageBuild(ctx, tarBuffer, options)
	if err != nil {
		return errors.Wrap(err, "image build failed")
	}
	defer imageBuildResponse.Body.Close()

	// Stream the build output to logs
	if err := streamBuildOutput(imageBuildResponse.Body); err != nil {
		return errors.Wrap(err, "failed to read build output")
	}

	return nil
}

func createTarFromContext(sourceDir string) (io.Reader, error) {
	pr, pw := io.Pipe()
	tw := tar.NewWriter(pw)

	go func() {
		defer pw.Close()
		defer tw.Close()

		err := filepath.Walk(sourceDir, func(file string, fi os.FileInfo, err error) error {
			if err != nil {
				return err
			}

			// Preserve the directory structure in the tar file
			if fi.IsDir() {
				// Add directory header (empty, no contents)
				header, err := tar.FileInfoHeader(fi, fi.Name())
				if err != nil {
					return err
				}
				header.Name = filepath.ToSlash(file[len(sourceDir):])
				if err := tw.WriteHeader(header); err != nil {
					return err
				}
				return nil // Skip adding files for directories, but still write header
			}

			header, err := tar.FileInfoHeader(fi, fi.Name())
			if err != nil {
				return err
			}

			header.Name = filepath.ToSlash(file[len(sourceDir):])
			if err := tw.WriteHeader(header); err != nil {
				return err
			}

			if fi.Mode().IsRegular() {
				f, err := os.Open(file)
				if err != nil {
					return err
				}
				defer f.Close()
				_, err = io.Copy(tw, f)
				return err
			}
			return nil
		})

		if err != nil {
			pw.CloseWithError(err)
		}
	}()

	return pr, nil
}

func streamBuildOutput(reader io.Reader) error {
	buf := make([]byte, 4096)
	for {
		n, err := reader.Read(buf)
		if n > 0 {
			fmt.Print(string(buf[:n]))
		}
		if err != nil {
			if err == io.EOF {
				break
			}
			return err
		}
	}
	return nil
}
