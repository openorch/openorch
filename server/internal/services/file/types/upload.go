/**
 * @license
 * Copyright (c) The Authors (see the AUTHORS file)
 *
 * This source code is licensed under the GNU Affero General Public License v3.0 (AGPLv3).
 * You may obtain a copy of the AGPL v3.0 at https://www.gnu.org/licenses/agpl-3.0.html.
 */
package file_svc

import "time"

// Upload record
type Upload struct {
	Id        string    `json:"id"`
	CreatedAt time.Time `json:"createdAt,omitempty"`
	UpdatedAt time.Time `json:"updatedAt,omitempty"`

	NodeId           string `json:"nodeId"`
	FilePath         string `json:"filePath"`
	OriginalFileName string `json:"fileName"`
	UserId           string `json:"userId,omitempty"`
	FileSize         int64  `json:"fileSize" format:"int64"`
}

func (u Upload) GetId() string {
	return u.Id
}

type UploadFileResponse struct {
	Upload Upload `json:"upload,omitempty"`
}

type ListUploadsRequest struct {
	UserId string `json:"userId,omitempty"`
	Limit  int    `json:"limit,omitempty"`

	// After time value
	After string `json:"after,omitempty"`
}

type ListUploadsResponse struct {
	Uploads []Upload `json:"uploads,omitempty"`
}
