import {
	enableProdMode,
	provideExperimentalZonelessChangeDetection,
} from '@angular/core';

import { environment } from './environments/environment';
import { AppComponent } from './app/app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { bootstrapApplication } from '@angular/platform-browser';
import {
	provideHttpClient,
	withInterceptorsFromDi,
	withFetch,
} from '@angular/common/http';
import { OPENORCH_SERVICE_CONFIG } from './app/services/server.service';
import { API_SERVICE_CONFIG } from './app/api.service';
import { provideRouter } from '@angular/router';
import { routes } from './app/app-routing.module';

if (environment.production) {
	enableProdMode();
}

bootstrapApplication(AppComponent, {
	providers: [
		provideRouter(routes),
		provideExperimentalZonelessChangeDetection(),
		{
			provide: OPENORCH_SERVICE_CONFIG,
			useValue: { env: environment },
		},
		{
			provide: API_SERVICE_CONFIG,
			useValue: { env: environment },
		},
		provideHttpClient(withFetch(), withInterceptorsFromDi()),
		provideAnimationsAsync(),
	],
}).catch((err) => console.error(err));
