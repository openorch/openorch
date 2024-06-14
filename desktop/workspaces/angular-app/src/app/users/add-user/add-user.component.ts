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
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User, UserService, Role } from '../../services/user.service';
import { first } from 'rxjs';
import { ToastController } from '@ionic/angular';

@Component({
	selector: 'app-add-user',
	templateUrl: './add-user.component.html',
	styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent implements OnInit {
	addUserForm!: FormGroup;
	roles: Role[] = [];

	constructor(
		private fb: FormBuilder,
		private userService: UserService,
		private toast: ToastController
	) {
		this.userService.user$.pipe(first()).subscribe(() => {
			this.loggedInInit();
		});
	}

	ngOnInit() {
		this.addUserForm = this.fb.group({
			email: ['', [Validators.required, Validators.email]],
			name: ['', Validators.required],
			password: ['', Validators.required],
			passwordConfirmation: ['', Validators.required],
			roles: [[], Validators.required],
		});
	}

	async loggedInInit() {
		let rsp = await this.userService.getRoles();
		this.roles = rsp.roles;
	}

	async createUser() {
		if (this.addUserForm.invalid) {
			return;
		}

		const { email, name, password, passwordConfirmation, roles } =
			this.addUserForm.value;

		if (password !== passwordConfirmation) {
			const toast = await this.toast.create({
				message: 'Passwords do not match',
				duration: 5000,
				color: 'danger',
				position: 'middle',
			});
			toast.present();
			return;
		}

		const user: User = { email, name, roleIds: roles };

		try {
			await this.userService.createUser(user, password, roles);
			const toast = await this.toast.create({
				message: `User ${email} saved`,
				duration: 5000,
				color: 'secondary',
				position: 'middle',
			});
			toast.present();

			this.addUserForm.reset();
		} catch (err) {
			let errorMessage = 'An unexpected error occurred';
			try {
				errorMessage = (JSON.parse(err as any) as any)?.error;
			} catch {}

			const toast = await this.toast.create({
				color: 'danger',
				message: errorMessage,
				duration: 5000,
				position: 'middle',
			});
			toast.present();
		}
	}
}
