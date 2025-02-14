import { provideHttpClient, withInterceptors } from '@angular/common/http';
import {
  ApplicationConfig,
  provideExperimentalZonelessChangeDetection,
} from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAuthStore, provideSetupStore, StoreType } from './app.store';
import { authInterceptor } from './auth';
import { fakeApiInterceptor } from './core/fake-api';

// ⚠️ FIXME: choose one store and remove any packages in real app ⚠️
const storeType = StoreType.Ngxs;

export const appConfig: ApplicationConfig = {
  providers: [
    // Setup Angular
    provideExperimentalZonelessChangeDetection(),
    provideAnimationsAsync(),

    // Setup Store
    provideSetupStore(storeType),

    // Setup Interceptors
    provideHttpClient(
      withInterceptors([
        authInterceptor,
        // ⚠️ FIXME: remove it in real app ⚠️
        fakeApiInterceptor,
      ])
    ),

    // Setup Application
    provideAuthStore(storeType),
    provideRouter(routes),
  ],
};
