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
import { LocaltronService } from './localtron.service';
import { CookieService } from 'ngx-cookie-service';
import { ReplaySubject } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class UserService {
	private token: string = '';

	public getToken(): string {
		return this.token;
	}

	private userSubject = new ReplaySubject<User>(1);
	public user$ = this.userSubject.asObservable();

	constructor(
		private localtron: LocaltronService,
		private cookieService: CookieService
	) {
		this.init();
	}

	async init() {
		this.token = this.cookieService.get('the_token');
		if (!this.token) {
			let rsp = await this.login('singulatron', 'changeme');
			this.token = rsp.token.token as string;
			this.cookieService.set('the_token', this.token, 3650, '/', '', true);
			if (!this.cookieService.get('the_token')) {
				throw 'Something is wrong with the setting of cookies';
			}
		}
		let rsp = await this.readUserByToken(this.token);
		this.userSubject.next(rsp.user);
	}

	login(email: string, password: string): Promise<LoginResponse> {
		return this.localtron.call('/user/login', {
			email: email,
			password: password,
		});
	}

	readUserByToken(token: string): Promise<ReadUserByTokenResponse> {
		return this.localtron.call('/user/read-user-by-token', {
			token: token,
		});
	}
}

export interface User {
	id?: string;
	createdAt?: Date;
	updatedAt?: Date;
	deletedAt?: Date | null;
	name?: string;
	email?: string;
	passwordHash?: string; // Note: This field is usually excluded in responses for security reasons
	roleIds?: string[];
	roles?: Role[];
	authTokenIds?: string[];
	authTokens?: AuthToken[];
}

export interface RegisterRequest {
	name?: string;
	email?: string;
}

export interface RegisterResponse {}

export interface LoginRequest {
	name?: string;
	email?: string;
}

export interface LoginResponse {
	token: AuthToken;
}

export interface SaveProfileRequest {
	name?: string;
	email?: string;
}

export interface SaveProfileResponse {}

export interface ChangePasswordRequest {
	email?: string;
	currentPassword?: string;
	newPassword?: string;
}

export interface ChangePasswordResponse {}

export const RoleAdmin: Role = {
	id: 'role.admin',
	name: 'Admin Role',
	permissionIds: [],
};

export const RoleUser: Role = {
	id: 'role.user',
	name: 'User Role',
	permissionIds: [],
};

export interface Role {
	id?: string;
	createdAt?: Date;
	updatedAt?: Date;
	name: string;
	description?: string;
	permissionIds: string[];
}

export interface CreateRoleRequest {
	name: string;
	description: string;
	permissionIds: string[];
}

export interface CreateRoleResponse {
	role?: Role;
}

export interface DeleteRoleRequest {
	roleId?: string;
}

export interface DeleteRoleResponse {}

export interface RemoveRoleRequest {
	userId?: string;
	roleId?: string;
}

export interface RemoveRoleResponse {}

export interface Permission {
	id?: string;
	createdAt?: Date;
	updatedAt?: Date;
	name: string;
	description: string;
}

export interface CreatePermissionRequest {
	name: string;
	description: string;
}

export interface CreatePermissionResponse {}

export interface AuthToken {
	id?: string;
	createdAt?: Date;
	updatedAt?: Date;
	deletedAt?: Date | null;
	userId?: string;
	token?: string;
}

export interface ReadUserByTokenResponse {
	user: User;
}
