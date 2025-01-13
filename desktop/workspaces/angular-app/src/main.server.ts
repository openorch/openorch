import {
	bootstrapApplication,
	provideClientHydration,
} from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import {
	provideHttpClient,
	withFetch,
	withInterceptorsFromDi,
} from '@angular/common/http';
import { routes } from './app/app-routing.module';
import { OPENORCH_SERVICE_CONFIG } from './app/services/server.service';

import { environment } from './environments/environment';
import { provideServerRendering } from '@angular/platform-server';
import { provideRouter } from '@angular/router';

const bootstrap = () =>
	bootstrapApplication(AppComponent, {
		providers: [
			provideHttpClient(withFetch(), withInterceptorsFromDi()),
			provideServerRendering(),
			{
				provide: OPENORCH_SERVICE_CONFIG,
				useValue: { env: environment },
			},
			provideClientHydration(),
			provideRouter(routes),
		],
	})
		.then((appRef) => {
			return appRef;
		})
		.catch((err) => {
			console.error(err);
			throw err; // Re-throw the error to maintain the return type
		});

export default bootstrap;
