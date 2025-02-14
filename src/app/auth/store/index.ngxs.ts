import { EnvironmentProviders, makeEnvironmentProviders } from '@angular/core';
import { provideStates } from '@ngxs/store';

import { AUTH_FACADE } from '../tokens';

import { AuthState, NgxsAuthFacade, provideAuthInit } from './ngxs';

export function provideAuthStore(): EnvironmentProviders {
  return makeEnvironmentProviders([
    provideStates([AuthState]),
    provideAuthInit(),
    // Register Auth Facade
    {
      provide: AUTH_FACADE,
      useClass: NgxsAuthFacade,
    },
  ]);
}
