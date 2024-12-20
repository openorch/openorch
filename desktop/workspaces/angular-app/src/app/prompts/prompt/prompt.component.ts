/**
 * @license
 * Copyright (c) The Authors (see the AUTHORS file)
 *
 * This source code is licensed under the GNU Affero General Public License v3.0 (AGPLv3).
 * You may obtain a copy of the AGPL v3.0 at https://www.gnu.org/licenses/agpl-3.0.html.
 */
import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import {  NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PromptSvcPrompt as Prompt } from '@openorch/client';
import { DatePipe } from '@angular/common';
@Component({
	selector: 'app-prompt',
	standalone: true,
	imports: [
		IonicModule,
		NgIf,
		FormsModule,
		DatePipe,
	],
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: './prompt.component.html',
	styleUrl: './prompt.component.scss',
})
export class PromptComponent {
	@Input() prompt!: Prompt;
	@Input() expanded = false;

	constructor() {}
}
