import {
  provideHttpClient,
  withInterceptors,
  withInterceptorsFromDi,
} from '@angular/common/http';
import {
  ApplicationConfig,
  provideExperimentalZonelessChangeDetection,
} from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideRouterStore, routerReducer } from '@ngrx/router-store';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';

import { environment } from '../environments/environment';

import { routes } from './app.routes';
import { provideAuthStore } from './auth';
import { fakeApiInterceptor } from './core/fake-api';

function provideAppDevTools() {
  return environment.production
    ? []
    : [provideStoreDevtools({ name: 'Angular Authentication' })];
}

export const appConfig: ApplicationConfig = {
  providers: [
    // Setup Angular
    provideExperimentalZonelessChangeDetection(),
    provideAnimationsAsync(),

    // Setup NgRx
    provideStore({ router: routerReducer }),
    provideRouterStore(),
    provideEffects(),

    // Setup Interceptors
    provideHttpClient(
      withInterceptorsFromDi(),
      // ⚠️ FIXME: remove it in real app ⚠️
      withInterceptors([fakeApiInterceptor])
    ),

    // Setup Application
    provideAuthStore(),
    provideRouter(routes),

    // Setup DevTools
    provideAppDevTools(),
  ],
};
