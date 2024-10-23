import { provideEffects } from '@ngrx/effects';
import { provideState } from '@ngrx/store';

import { authServiceInitProvider } from './auth.service';
import { authInterceptorProviders } from './interceptors';
import { AuthEffects } from './store/auth.effects';
import { AUTH_FEATURE_KEY, authReducer } from './store/auth.reducer';

export type { AuthUser } from './store/auth.models';
export { AuthFacade } from './store/auth.facade';
export { authGuard } from './guards';

export function provideAuthStore() {
  return [
    provideState(AUTH_FEATURE_KEY, authReducer),
    provideEffects(AuthEffects),
    authServiceInitProvider,
    authInterceptorProviders,
  ];
}
