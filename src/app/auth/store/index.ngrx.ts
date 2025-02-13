import { EnvironmentProviders, makeEnvironmentProviders } from '@angular/core';
import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';

import { AUTH_FACADE } from '../tokens';

import {
  provideAuthInit,
  AuthEffects,
  AUTH_FEATURE_KEY,
  authReducer,
  NgrxAuthFacade,
} from './ngrx';

export function provideAuthStore(): EnvironmentProviders {
  return makeEnvironmentProviders([
    // Register Auth Store
    provideState(AUTH_FEATURE_KEY, authReducer),
    provideEffects(AuthEffects),
    provideAuthInit(),
    // Register Auth Facade
    {
      provide: AUTH_FACADE,
      useClass: NgrxAuthFacade,
    },
  ]);
}
