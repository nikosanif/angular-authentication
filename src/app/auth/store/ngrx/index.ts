import { EnvironmentProviders, inject, provideAppInitializer } from '@angular/core';
import { Store } from '@ngrx/store';
import { lastValueFrom } from 'rxjs';
import { filter, take } from 'rxjs/operators';

import { RefreshTokenActions } from './auth.actions';
import { AuthState, TokenStatus } from './auth.models';
import * as AuthSelectors from './auth.selectors';

export { AuthEffects } from './auth.effects';
export { NgrxAuthFacade } from './auth.facade';
export * from './auth.reducer';

const initializeAuth = () => {
  const store = inject<Store<AuthState>>(Store);

  store.dispatch(RefreshTokenActions.request());

  const authState$ = store.select(AuthSelectors.selectAuth).pipe(
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
