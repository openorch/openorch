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
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { OnDockerInfo } from 'shared-lib/models/event-request-response';
import { LocaltronService } from './localtron.service';

@Injectable({
	providedIn: 'root',
})
export class DockerService {
	onDockerInfoSubject = new ReplaySubject<OnDockerInfo>(1);
	onDockerInfo$ = this.onDockerInfoSubject.asObservable();

	constructor(private localtron: LocaltronService) {
		// @todo nothing to trigger docker info yet
		// so we fall back to pollings
		setInterval(() => {
			this.init();
		}, 2000);
	}

	initInProgress = false;
	async init() {
		try {
			if (this.initInProgress) {
				return;
			}
			this.initInProgress = true;

			const rsp = await this.dockerInfo();

			this.onDockerInfoSubject.next({
				hasDocker: rsp?.info?.hasDocker,
			});
		} catch (error) {
			console.error('Error in docker.service init', {
				error: JSON.stringify(error),
			});
		} finally {
			this.initInProgress = true;
		}
	}

	async dockerInfo(): Promise<DockerInfoResponse> {
		return this.localtron.call('/docker/info', {});
	}
}

interface DockerInfo {
	hasDocker: boolean;
	dockerDaemonAddress?: string;
	error?: string;
}

// {
//   "info": {
//     "hasDocker": true
//   }
// }
interface DockerInfoResponse {
	info: DockerInfo;
}
