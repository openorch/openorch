package fileservice

import (
	"io"
	"mime"
	"net/http"
	"os"
	"path/filepath"
	"strconv"

	"github.com/gorilla/mux"
	"github.com/openorch/openorch/sdk/go/datastore"
	file "github.com/openorch/openorch/server/internal/services/file/types"
)

// @ID serveUpload
// @Summary Serve an Uploaded File
// @Description Serves a previously uploaded file based on its ID.
// @Tags File Svc
// @Accept json
// @Produce application/octet-stream
// @Param id path string true "Upload ID"
// @Success 200 {file} binary "File served successfully"
// @Failure 400 {object} file.ErrorResponse "Missing upload ID"
// @Failure 404 {object} file.ErrorResponse "File not found"
// @Failure 500 {object} file.ErrorResponse "Internal Server Error"
// @Security BearerAuth
// @Router /file-svc/serve/upload/{id} [get]
func (fs *FileService) ServeUpload(
	w http.ResponseWriter,
	r *http.Request,
) {
	vars := mux.Vars(r)
	fileId := vars["id"]
	if fileId == "" {
		w.WriteHeader(http.StatusBadRequest)
		w.Write([]byte("Missing upload ID"))
		return
	}

	uploadI, found, err := fs.uploadStore.Query(datastore.Id(fileId)).FindOne()
	if !found {

		w.WriteHeader(http.StatusNotFound)
		w.Write([]byte("File not found"))
		return
	}
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte("Error querying upload"))
		return
	}
	upload := uploadI.(*file.Upload)

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
