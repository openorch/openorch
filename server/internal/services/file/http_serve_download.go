package fileservice

import (
	"io"
	"mime"
	"net/http"
	"net/url"
	"os"
	"path/filepath"
	"strconv"

	"github.com/gorilla/mux"

	file "github.com/openorch/openorch/server/internal/services/file/types"
)

// @ID serveDownload
// @Summary Serve a Downloaded file.
// @Description Serves a previously downloaded file based on its URL.
// @Tags File Svc
// @Produce application/octet-stream
// @Param url path string true "URL of the file. Even after downloading, the file is still referenced by its original internet URL."
// @Success 200 {file} binary "File served successfully"
// @Failure 400 {object} file.ErrorResponse "Invalid download URL"
// @Failure 404 {object} file.ErrorResponse "File not found"
// @Failure 500 {object} file.ErrorResponse "Internal Server Error"
// @Router /file-svc/serve/download/{url} [get]
func (fs *FileService) ServeDownload(
	w http.ResponseWriter,
	r *http.Request,
) {
	vars := mux.Vars(r)
	ur, err := url.PathUnescape(vars["url"])
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		w.Write([]byte("Invalid download URL"))
		return
	}

	// This is just here so the file types lib doesn't get removed
	d := file.Download{}
	if d.Id != "" {
	}

	filePath := filepath.Join(fs.downloadFolder, EncodeURLtoFileName(ur))

	file, err := os.Open(filePath)
	if err != nil {
		if os.IsNotExist(err) {
			w.WriteHeader(http.StatusNotFound)
			w.Write([]byte("File not found"))
		} else {
			w.WriteHeader(http.StatusInternalServerError)
			w.Write([]byte("Failed to open file"))
		}
		return
	}
	defer file.Close()
	fileInfo, err := os.Stat(filePath)
	if err != nil || fileInfo.IsDir() {
		http.Error(w, "File not found", http.StatusNotFound)
		return
	}

	contentType := mime.TypeByExtension(filepath.Ext(ur))
	if contentType == "" {
		contentType = "application/octet-stream"
	}
	w.Header().Set("Content-Type", contentType)
	w.Header().Set("Content-Disposition", "inline; filename=\""+filepath.Base(filePath)+"\"")
	w.Header().Set("Content-Length", strconv.FormatInt(fileInfo.Size(), 10))

	if _, err := io.Copy(w, file); err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte("Failed to serve file"))
		return
	}
}
