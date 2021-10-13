import { Action, createReducer, on } from '@ngrx/store';

import * as AuthActions from './auth.actions';
import { AuthState, TokenStatus } from './auth.models';

export const AUTH_FEATURE_KEY = 'auth';

export interface AuthPartialState {
  readonly [AUTH_FEATURE_KEY]: AuthState;
}

export const initialState: AuthState = {
  isLoggedIn: false,
  user: undefined,
  accessTokenStatus: TokenStatus.PENDING,
  refreshTokenStatus: TokenStatus.PENDING,
  isLoadingLogin: false,
  hasLoginError: false,
};

const reducer = createReducer(
  initialState,

  // Login
  on(
    AuthActions.loginRequest,
    (state): AuthState => ({
      ...state,
      accessTokenStatus: TokenStatus.VALIDATING,
      isLoadingLogin: true,
      hasLoginError: false,
    })
  ),

  // Refresh token
  on(
    AuthActions.refreshTokenRequest,
    (state): AuthState => ({
      ...state,
      refreshTokenStatus: TokenStatus.VALIDATING,
    })
  ),

  // Login & Refresh token
  on(
    AuthActions.loginSuccess,
    AuthActions.refreshTokenSuccess,
    (state): AuthState => ({
      ...state,
      isLoggedIn: true,
      isLoadingLogin: false,
      accessTokenStatus: TokenStatus.VALID,
      refreshTokenStatus: TokenStatus.VALID,
    })
  ),
  on(
    AuthActions.loginFailure,
    AuthActions.refreshTokenFailure,
    (state, action): AuthState => ({
      ...state,
      isLoadingLogin: false,
      accessTokenStatus: TokenStatus.INVALID,
      refreshTokenStatus: TokenStatus.INVALID,
      hasLoginError: action.type === '[Auth] Login Failure' && !!action.error,
    })
  ),

  // Logout
  on(
    AuthActions.logout,
    (): AuthState => ({
      ...initialState,
    })
  ),

  // Auth user
  on(
    AuthActions.getAuthUserSuccess,
    (state, action): AuthState => ({
      ...state,
      user: action.user,
    })
  ),
  on(
    AuthActions.getAuthUserFailure,
    (): AuthState => ({
      ...initialState,
    })
  )
);

export function authReducer(state: AuthState | undefined, action: Action): AuthState {
  return reducer(state, action);
}
