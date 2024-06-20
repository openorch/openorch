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
import { FirehoseService } from './firehose.service';
import { first } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
	providedIn: 'root',
})
export class GenericService {
	constructor(
		private localtron: LocaltronService,
		private userService: UserService,
		private firehoseService: FirehoseService
	) {
		this.userService.user$.pipe(first()).subscribe(() => {
			this.init();
		});
	}

	async init() {
		this.firehoseService.firehoseEvent$.subscribe(async (event) => {
			switch (event.name) {
			}
			return null;
		});
	}

	async create(table: string, object: GenericObject): Promise<void> {
		let req: CreateRequest = {
			table: table,
			object: object,
		};

		return this.localtron.call('/generic/create', req);
	}

	async find(table: string, conditions: Condition[]): Promise<FindResponse> {
		let req: FindRequest = {
			table: table,
			conditions: conditions,
		};

		return this.localtron.call('/generic/find', req);
	}

	async update(
		table: string,
		conditions: Condition[],
		object: GenericObject
	): Promise<UpdateResponse> {
		let req: UpdateRequest = {
			table: table,
			conditions: conditions,
			object: object,
		};

		return this.localtron.call('/generic/update', req);
	}

	async delete(
		table: string,
		conditions: Condition[]
	): Promise<DeleteResponse> {
		let req: DeleteRequest = {
			table: table,
			conditions: conditions,
		};

		return this.localtron.call('/generic/delete', req);
	}
}

// this could be a sumtype, eg. EqualCondition | AllCondition
// but it's defined as a product type here to match the backend Go structure
// for easier understanding
interface Condition {
	equal?: EqualCondition;
	all?: AllCondition;
}

interface EqualCondition {
	fieldName: string;
	value: any;
}

interface AllCondition {}

export function equal(fieldName: string, value: any): Condition {
	return {
		equal: {
			fieldName,
			value,
		},
	};
}

export function all(): Condition {
	return {
		all: {},
	};
}

export function id(id: string): Condition {
	return {
		equal: {
			fieldName: 'id',
			value: id,
		},
	};
}

export interface GenericObject {
	id: string;
	createdAt: string;
	updatedAt: string;
	userId?: string;
	data: any;
	public?: boolean;
}

export interface CreateRequest {
	table: string;
	object: GenericObject;
}

export interface CreateResponse {}

export interface UpdateRequest {
	table: string;
	conditions: Condition[];
	object: GenericObject;
}

export interface UpdateResponse {}

export interface DeleteRequest {
	table: string;
	conditions: Condition[];
}

export interface DeleteResponse {}

export interface FindRequest {
	table: string;
	conditions: Condition[];
}

export interface FindResponse {
	objects: GenericObject[];
}
