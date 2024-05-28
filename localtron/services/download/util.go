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
package downloadservice

import (
	"crypto/sha256"
	"encoding/base64"
	"os"
	"strings"
)

func encodeURLtoFileName(url string) string {
	hash := sha256.New()
	hash.Write([]byte(url))
	hashBytes := hash.Sum(nil)

	encoded := base64.URLEncoding.EncodeToString(hashBytes)

	return strings.TrimRight(encoded, "=")
}

// checkFileExistsAndSize checks if a file exists and returns its size.
func checkFileExistsAndSize(filename string) (int64, bool, error) {
	info, err := os.Stat(filename)
	if err != nil {
		if os.IsNotExist(err) {
			return 0, false, nil
		}
		return 0, false, err
	}
	return info.Size(), true, nil
}
