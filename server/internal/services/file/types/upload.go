/**
 * @license
 * Copyright (c) The Authors (see the AUTHORS file)
 *
 * This source code is licensed under the GNU Affero General Public License v3.0 (AGPLv3).
 * You may obtain a copy of the AGPL v3.0 at https://www.gnu.org/licenses/agpl-3.0.html.
 */
package file_svc

type Upload struct {
	Id               string `json:"id"`
	NodeId           string `json:"nodeId"`
	FilePath         string `json:"filePath"`
	OriginalFileName string `json:"fileName"`
	UserId           string `json:"userId,omitempty"`
	FullFileSize     *int64 `json:"fullFileSize"        format:"int64"`
}

type UploadFileResponse struct {
	Upload Upload `json:"upload,omitempty"`
}

type UploadsRequest struct{}

type UploadsResponse struct {
	Upload []Upload `json:"uploads,omitempty"`
}
