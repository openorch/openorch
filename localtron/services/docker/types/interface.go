/**
 * @license
 * Copyright (c) The Authors (see the AUTHORS file)
 *
 * This source code is licensed under the GNU Affero General Public License v3.0 (AGPLv3).
 * You may obtain a copy of the AGPL v3.0 at https://www.gnu.org/licenses/agpl-3.0.html.
 */
package dockertypes

type DockerServiceI interface {
	HashIsRunning(hash string) (bool, error)
	LaunchContainer(image string, internalPort, hostPort int, options *LaunchOptions) (*LaunchInfo, error)
	Info() (*OnDockerInfo, error)
	GetContainerLogsAndStatus(singulatronHash string, logCount int) (string, error)
}