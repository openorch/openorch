/**
 * @license
 * Copyright (c) The Authors (see the AUTHORS file)
 *
 * This source code is licensed under the GNU Affero General Public License v3.0 (AGPLv3) for personal, non-commercial use.
 * You may obtain a copy of the AGPL v3.0 at https://www.gnu.org/licenses/agpl-3.0.html.
 */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { LoginResponse } from '@singulatron/types';
import { ToastController, IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { CenteredComponent } from '../components/centered/centered.component';
import { PageComponent } from '../components/page/page.component';
import { IconMenuComponent } from '../components/icon-menu/icon-menu.component';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrl: './login.component.css',
	standalone: true,
	imports: [
		PageComponent,
		IconMenuComponent,
		CenteredComponent,
		IonicModule,
		NgIf,
		FormsModule,
	],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
	email: string = '';
	name: string = '';
	password: string = '';
	passwordConfirmation: string = '';
	loginButtonDisabled: boolean = false;
	registerButtonDisabled: boolean = false;
	selectedSegment: string = 'login';

	constructor(
		private userService: UserService,
		private toast: ToastController
	) {}

	async login() {
		this.loginButtonDisabled = true;
		let rsp: LoginResponse;
		try {
			rsp = await this.userService.login(this.email, this.password);
		} catch (error) {
			const toast = await this.toast.create({
				cssClass: 'white-text',
				color: 'danger',
				message: JSON.parse(error as string)?.error,
				duration: 5000,
				position: 'middle',
			});
			toast.present();
			return;
		} finally {
			this.loginButtonDisabled = false;
		}
		if (!rsp?.token.token) {
			const toast = await this.toast.create({
				message: 'Login failure: no token in response',
				duration: 5000,
				position: 'middle',
			});
			toast.present();
			return;
		}

		this.userService.setToken(rsp?.token.token);
		window.location.href = '/';
	}
}
