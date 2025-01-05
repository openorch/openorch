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
// @Description Uploads a file to the server.
// @Description Currently only one file can be uploaded at a time due to this bug https://github.com/OpenAPITools/openapi-generator/issues/11341
// @Description Once that is fixed we should have an `PUT /file-svc/uploads`/uploadFiles (note the plural) endpoints.
// @Description
// @Description Requires the `file-svc:upload:create` permission.
// @Tags File Svc
// @Accept multipart/form-data
// @Produce json
// @Param file formData file true "File to upload"
// @Success 200 {object} file.UploadFileResponse "File uploaded successfully"
// @Failure 400 {object} file.ErrorResponse "Invalid request"
// @Failure 401 {object} file.ErrorResponse "Unauthorized"
// @Failure 500 {object} file.ErrorResponse "Internal Server Error"
// @Security BearerAuth
// @Router /file-svc/upload [put]
func (fs *FileService) UploadFile(
	w http.ResponseWriter,
	r *http.Request,
) {
	isAuthRsp, isAuthHttpRsp, err := fs.clientFactory.Client(sdk.WithTokenFromRequest(r)).
		UserSvcAPI.IsAuthorized(r.Context(), file.PermissionUploadCreate.Id).
		Body(openapi.UserSvcIsAuthorizedRequest{
			SlugsGranted: []string{},
		}).
		Execute()

	if err != nil {
		w.WriteHeader(isAuthHttpRsp.StatusCode)
		w.Write([]byte(err.Error()))
		return
	}
	if !isAuthRsp.GetAuthorized() {
		w.WriteHeader(http.StatusUnauthorized)
		w.Write([]byte(`Unauthorized`))
		return
	}

	handleError := func(err error, statusCode int, message string) {
		w.WriteHeader(statusCode)
		w.Write([]byte(message + ": " + err.Error()))
	}

	err = r.ParseMultipartForm(10 << 20)
	if err != nil {
		handleError(err, http.StatusBadRequest, "Invalid request")
		return
	}

	fileHeader, fileHeaderOk := r.MultipartForm.File["file"]

	if !fileHeaderOk || len(fileHeader) == 0 {
		w.WriteHeader(http.StatusBadRequest)
		w.Write([]byte(`File is required`))
		return
	}

	for _, header := range fileHeader {
		uploadedFile, err := header.Open()
		if err != nil {
			handleError(err, http.StatusInternalServerError, "Failed to open file")
			return
		}
		defer uploadedFile.Close()

		cleanFilename := sanitizeFilename(header.Filename)
		destinationFilePath := filepath.Join(fs.uploadFolder, cleanFilename)
		dstFile, err := os.Create(destinationFilePath)
		if err != nil {
			handleError(err, http.StatusInternalServerError, "Failed to create destination file")
			return
		}
		defer dstFile.Close()

		_, err = io.Copy(dstFile, uploadedFile)
		if err != nil {
			handleError(err, http.StatusInternalServerError, "Failed to save file")
			return
		}
	}

	jsonData, _ := json.Marshal(map[string]any{})
	w.Write(jsonData)
}
