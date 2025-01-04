/*
*

  - @license

  - Copyright (c) The Authors (see the AUTHORS file)
    *

  - This source code is licensed under the GNU Affero General Public License v3.0 (AGPLv3).

  - You may obtain a copy of the AGPL v3.0 at https://www.gnu.org/licenses/agpl-3.0.html.
*/
package fileservice

import (
	"encoding/json"
	"io"
	"net/http"
	"os"
	"path/filepath"

	openapi "github.com/openorch/openorch/clients/go"
	sdk "github.com/openorch/openorch/sdk/go"
	file "github.com/openorch/openorch/server/internal/services/file/types"
)

// @ID uploadFile
// @Summary Upload a File
// @Description Uploads a file to the server and stores it at the specified path.
// @Description
// @Description Requires the `file-svc:upload:create` permission.
// @Tags File Svc
// @Accept multipart/form-data
// @Produce json
// @Param file formData file true "File to upload"
// @Param folderPath formData string true "Target folder path"
// @Success 200 {object} map[string]any "File uploaded successfully"
// @Failure 400 {object} file.ErrorResponse "Invalid request"
// @Failure 401 {object} file.ErrorResponse "Unauthorized"
// @Failure 500 {object} file.ErrorResponse "Internal Server Error"
// @Security BearerAuth
// @Router /file-svc/upload [post]
func (fs *FileService) Upload(
	w http.ResponseWriter,
	r *http.Request,
) {
	// Authorization check
	isAuthRsp, _, err := fs.clientFactory.Client(sdk.WithTokenFromRequest(r)).
		UserSvcAPI.IsAuthorized(r.Context(), file.PermissionUploadCreate.Id).
		Body(openapi.UserSvcIsAuthorizedRequest{
			SlugsGranted: []string{"model-svc"},
		}).
		Execute()
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte(err.Error()))
		return
	}
	if !isAuthRsp.GetAuthorized() {
		w.WriteHeader(http.StatusUnauthorized)
		w.Write([]byte(`Unauthorized`))
		return
	}

	// Parse the multipart form
	err = r.ParseMultipartForm(10 << 20) // 10 MB limit
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		w.Write([]byte(`Invalid request`))
		return
	}

	fileHeader, fileHeaderOk := r.MultipartForm.File["file"]
	folderPath := r.FormValue("folderPath")

	if !fileHeaderOk || len(fileHeader) == 0 {
		w.WriteHeader(http.StatusBadRequest)
		w.Write([]byte(`File is required`))
		return
	}

	uploadedFile, err := fileHeader[0].Open()
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte(err.Error()))
		return
	}
	defer uploadedFile.Close()

	// Create target folder if it doesn't exist
	err = os.MkdirAll(folderPath, os.ModePerm)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte(err.Error()))
		return
	}

	// Create the destination file
	destinationFilePath := filepath.Join(folderPath, fileHeader[0].Filename)
	dstFile, err := os.Create(destinationFilePath)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte(err.Error()))
		return
	}
	defer dstFile.Close()

	// Copy uploaded file to destination
	_, err = io.Copy(dstFile, uploadedFile)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte(err.Error()))
		return
	}

	jsonData, _ := json.Marshal(map[string]any{})
	w.Write(jsonData)
}
