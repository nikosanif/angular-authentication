import { EnvironmentProviders, inject, provideAppInitializer } from '@angular/core';
import { Store } from '@ngxs/store';
import { lastValueFrom } from 'rxjs';
import { filter, take } from 'rxjs/operators';

import { TokenStatus } from '../../models';

import { RefreshToken } from './auth.actions';
import { AuthSelectors } from './auth.selectors';
export { NgxsAuthFacade } from './auth.facade';
export { AuthState } from './auth.state';

const initializeAuth = () => {
  const store = inject(Store);

  store.dispatch(new RefreshToken());

  const authState$ = store.select(AuthSelectors.auth).pipe(
    filter(
      auth =>
        auth.refreshTokenStatus === TokenStatus.INVALID ||
        (auth.refreshTokenStatus === TokenStatus.VALID && !!auth.user)
    ),
    take(1)
  );

  return lastValueFrom(authState$);
};

export const provideAuthInit = (): EnvironmentProviders => {
  return provideAppInitializer(initializeAuth);
};
