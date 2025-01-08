package fileservice

import (
	"context"
	"fmt"
	"io"
	"mime"
	"net/http"
	"os"
	"path/filepath"
	"strconv"

	"github.com/gorilla/mux"
	sdk "github.com/openorch/openorch/sdk/go"
	"github.com/openorch/openorch/sdk/go/datastore"
	file "github.com/openorch/openorch/server/internal/services/file/types"
	"github.com/pkg/errors"
)

// @ID serveUpload
// @Summary Serve an Uploaded File
// @Description Serves a previously uploaded file based on its File ID.
// @Description Please keep in mind that the ID and the FileID of an Upload is two different fields.
// @Tags File Svc
// @Accept json
// @Produce application/octet-stream
// @Param fileId path string true "Upload ID"
// @Success 200 {file} binary "File served successfully"
// @Failure 400 {object} file.ErrorResponse "Missing upload ID"
// @Failure 404 {object} file.ErrorResponse "File not found"
// @Failure 500 {object} file.ErrorResponse "Internal Server Error"
// @Router /file-svc/serve/upload/{fileId} [get]
func (fs *FileService) ServeUpload(
	w http.ResponseWriter,
	r *http.Request,
) {
	vars := mux.Vars(r)
	fileId := vars["fileId"]
	if fileId == "" {
		w.WriteHeader(http.StatusBadRequest)
		w.Write([]byte("Missing upload ID"))
		return
	}

	uploadReplicaIs, err := fs.uploadStore.Query(datastore.Equals(
		[]string{"fileId"},
		fileId,
	)).Find()
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte("Error querying upload"))
		return
	}
	if len(uploadReplicaIs) == 0 {
		w.WriteHeader(http.StatusNotFound)
		w.Write([]byte("File not found"))
		return
	}

	uploadReplicas := toUploads(uploadReplicaIs)
	isLocal, err := fs.isLocal(r.Context(), uploadReplicas)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte(err.Error()))
		return
	}

	if isLocal {
		fs.serveLocal(uploadReplicas, w, r)
	} else {
		fs.serveRemote(uploadReplicas, w, r)
	}
}

func (fs *FileService) serveLocal(
	uploadReplicas []*file.Upload,
	w http.ResponseWriter,
	r *http.Request,
) {
	upload, err := fs.pickLocal(r.Context(), uploadReplicas)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte(err.Error()))
		return
	}

	fileInfo, err := os.Stat(upload.FilePath)
	if err != nil || fileInfo.IsDir() {
		w.WriteHeader(http.StatusNotFound)
		w.Write([]byte("File not found"))
		return
	}

	contentType := mime.TypeByExtension(filepath.Ext(upload.OriginalFileName))
	if contentType == "" {
		contentType = "application/octet-stream"
	}
	w.Header().Set("Content-Type", contentType)
	w.Header().Set("Content-Disposition", "attachment; filename=\""+sanitizeFilename(upload.OriginalFileName)+"\"")
	w.Header().Set("Content-Length", strconv.FormatInt(fileInfo.Size(), 10))

	srcFile, err := os.Open(upload.FilePath)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte("Failed to open file"))
		return
	}
	defer srcFile.Close()

	_, err = io.Copy(w, srcFile)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte("Failed to write file to response"))
		return
	}
}

func (fs *FileService) serveRemote(
	uploadReplicas []*file.Upload,
	w http.ResponseWriter,
	r *http.Request,
) {
	w.WriteHeader(http.StatusNotImplemented)
	w.Write([]byte("not implemented"))
}

func toUploads(uploadIs []datastore.Row) []*file.Upload {
	ret := []*file.Upload{}
	for _, uploadI := range uploadIs {
		ret = append(ret, uploadI.(*file.Upload))
	}

	return ret
}

func (fs *FileService) isLocal(ctx context.Context, uploads []*file.Upload) (bool, error) {
	if fs.nodeId == "" {
		err := fs.getNodeId(ctx)
		if err != nil {
			return false, errors.Wrap(err, "cannot get node id")
		}
	}

	for _, upload := range uploads {
		if upload.NodeId == fs.nodeId {
			return true, nil
		}
	}

	return false, nil
}

func (fs *FileService) pickLocal(ctx context.Context, uploads []*file.Upload) (*file.Upload, error) {
	if fs.nodeId == "" {
		err := fs.getNodeId(ctx)
		if err != nil {
			return nil, errors.Wrap(err, "cannot get node id")
		}
	}

	for _, upload := range uploads {
		if upload.NodeId == fs.nodeId {
			return upload, nil
		}
	}

	return nil, fmt.Errorf("upload not found")
}

func (fs *FileService) getNodeId(ctx context.Context) error {
	nodeRsp, _, err := fs.clientFactory.Client(sdk.WithToken(fs.token)).RegistrySvcAPI.SelfNode(ctx).Execute()
	if err != nil {
		return err
	}

	fs.nodeId = nodeRsp.Node.Id
	return nil
}
