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
package configtypes

type DownloadServiceConfig struct {
	DownloadFolder string `json:"downloadFolder" yaml:"downloadFolder"`
}

type ModelServiceConfig struct {
	CurrentModelId string `json:"currentModelId" yaml:"currentModelId"`
}

type AppServiceConfig struct {
	LoggingDisabled bool `json:"loggingDisabled" yaml:"loggingDisabled"`
}

type Config struct {
	Download DownloadServiceConfig `json:"download" yaml:"download"`
	Model    ModelServiceConfig    `json:"model" yaml:"model"`
	App      AppServiceConfig      `json:"app" yaml:"app"`

	/** This flag drives a minor UX feature:
	 * if the user has not installed the runtime we show an INSTALL
	 * button, but if the user has already installed the runtime we show
	 * we show a START runtime button.
	 * */
	IsRuntimeInstalled bool `json:"isRuntimeInstalled" yaml:"isRuntimeInstalled"`
}

type ConfigGetRequest struct {
}

type ConfigGetResponse struct {
	Config *Config `json:"config"`
}
