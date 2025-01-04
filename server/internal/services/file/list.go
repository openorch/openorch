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
	"path/filepath"

	types "github.com/openorch/openorch/server/internal/services/file/types"
)

func (ds *FileService) list() ([]types.Download, error) {
	ds.lock.Lock()
	defer ds.lock.Unlock()

	var downloadDetailsList []types.Download
	for id, download := range ds.downloads {
		downloadDetail := downloadToDownloadDetails(id, download)
		downloadDetailsList = append(downloadDetailsList, *downloadDetail)
	}

	return downloadDetailsList, nil
}

func downloadToDownloadDetails(
	id string,
	download *types.InternalDownload,
) *types.Download {
	if download == nil {
		return nil
	}
	fileName := filepath.Base(download.FilePath)

	var progress *float64
	if download.TotalSize > 0 {
		computedProgress := float64(
			(download.DownloadedSize * 100),
		) / float64(
			download.TotalSize,
		)
		progress = &computedProgress
	}

	var fullFileSize *int64
	if download.TotalSize > 0 {
		fullFileSize = &download.TotalSize
	}

	var dir *string
	if download.FilePath != "" {
		directory := filepath.Dir(download.FilePath)
		dir = &directory
	}

	var paused, cancelled *bool
	var errorString *string

	downloadDetail := types.Download{
		Id:              id,
		URL:             download.URL,
		FileName:        fileName,
		Dir:             dir,
		Progress:        progress,
		DownloadedBytes: download.DownloadedSize,
		FullFileSize:    fullFileSize,
		Status:          string(download.Status),
		FilePath:        &download.FilePath,
		Paused:          paused,
		Cancelled:       cancelled,
		Error:           errorString,
	}

	return &downloadDetail
}
