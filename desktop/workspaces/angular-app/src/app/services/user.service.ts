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
import { Router } from '@angular/router';

@Injectable({
	providedIn: 'root',
})
export class UserService {
	private token: string = '';

	private userSubject = new ReplaySubject<User>(1);
	public user$ = this.userSubject.asObservable();

	constructor(
		private localtron: LocaltronService,
		private cookieService: CookieService,
		private router: Router
	) {
		this.init();
	}

	async init() {
		this.getToken();
		if (!this.hasToken()) {
			let rsp = await this.login('singulatron', 'changeme');
			this.setToken(rsp.token.token as string);
			if (!this.hasToken()) {
				console.error('Something is wrong with the setting of cookies');
				this.router.navigateByUrl('/login');
				return;
			}
		}

		try {
			let rsp = await this.readUserByToken(this.token);
			this.userSubject.next(rsp.user);
		} catch {
			console.error('Cannot read user even with a token');
			this.router.navigateByUrl('/login');
		}
	}

	getToken(): string {
		if (this.token) {
			return this.token;
		}
		this.token = this.cookieService.get('the_token');
		return this.token;
	}

	setToken(token: string) {
		this.token = token;
		this.cookieService.set('the_token', this.token, 3650, '/', '', true);
	}

	hasToken(): boolean {
		let t = this.cookieService.get('the_token');
		return !!t;
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

	getUsers(): Promise<GetUsersResponse> {
		return this.localtron.call('/user/get-users', {});
	}

	/** Save profile on behalf of a user */
	saveProfile(email: string, name: string): Promise<SaveProfileResponse> {
		let req: SaveProfileRequest = {
			email: email,
			name: name,
		};
		return this.localtron.call('/user/save-profile', req);
	}

	changePassword(
		email: string,
		currentPassword: string,
		newPassword: string
	): Promise<ChangePasswordResponse> {
		let req: ChangePasswordRequest = {
			email: email,
			currentPassword: currentPassword,
			newPassword: newPassword,
		};
		return this.localtron.call('/user/change-password', req);
	}

	/** Create a user - alternative to registration
	 */
	createUser(
		user: User,
		password: string,
		roleIds: string[]
	): Promise<CreateUserResponse> {
		let req: CreateUserRequest = {
			user: user,
			password: password,
			roleIds: roleIds,
		};
		return this.localtron.call('/user/create-user', req);
	}

	getRoles(): Promise<GetRolesResposne> {
		return this.localtron.call('/user/get-roles', {});
	}

	getPermissions(): Promise<GetPermissionsResposne> {
		return this.localtron.call('/user/get-permissions', {});
	}

	setRolePermissions(
		roleId: string,
		permissionIds: string[]
	): Promise<SetRolePermissionsResponse> {
		let req: SetRolePermissionsRequest = {
			roleId: roleId,
			permissionIds: permissionIds,
		};
		return this.localtron.call('/user/set-role-permissions', req);
	}

	deleteRole(roleId: string): Promise<DeleteRoleResponse> {
		let req: DeleteRoleRequest = {
			roleId: roleId,
		};
		return this.localtron.call('/user/delete-role', req);
	}

	deleteUser(userId: string): Promise<DeleteUserResponse> {
		let req: DeleteUserRequest = {
			userId: userId,
		};
		return this.localtron.call('/user/delete-user', req);
	}
}

export interface User {
	id?: string;
	createdAt?: Date;
	updatedAt?: Date;
	deletedAt?: Date | null;
	name?: string;
	email?: string;
	passwordHash?: string;
	roleIds?: string[];
	authTokenIds?: string[];
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

export interface GetUsersRequest {}

export interface GetUsersResponse {
	users: User[];
}

export interface CreateUserRequest {
	user: User;
	password: string;
	roleIds: string[];
}

export interface CreateUserResponse {}

export interface GetRolesRequest {}

export interface GetRolesResposne {
	roles: Role[];
}

export interface GetPermissionsRequest {}

export interface GetPermissionsResposne {
	permissions: Permission[];
}

export interface SetRolePermissionsRequest {}
export interface SetRolePermissionsResponse {}

export interface DeleteUserRequest {
	userId: string;
}
export interface DeleteUserResponse {}