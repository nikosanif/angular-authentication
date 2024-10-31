import { Action, createReducer, on } from '@ngrx/store';

import {
  AuthUserActions,
  LoginActions,
  LogoutAction,
  RefreshTokenActions,
} from './auth.actions';
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
    LoginActions.request,
    (state): AuthState => ({
      ...state,
      accessTokenStatus: TokenStatus.VALIDATING,
      isLoadingLogin: true,
      hasLoginError: false,
    })
  ),

  // Refresh token
  on(
    RefreshTokenActions.request,
    (state): AuthState => ({
      ...state,
      refreshTokenStatus: TokenStatus.VALIDATING,
    })
  ),

  // Login & Refresh token
  on(
    LoginActions.success,
    RefreshTokenActions.success,
    (state): AuthState => ({
      ...state,
      isLoggedIn: true,
      isLoadingLogin: false,
      accessTokenStatus: TokenStatus.VALID,
      refreshTokenStatus: TokenStatus.VALID,
    })
  ),
  on(
    LoginActions.failure,
    RefreshTokenActions.failure,
    (state, action): AuthState => ({
      ...state,
      isLoadingLogin: false,
      accessTokenStatus: TokenStatus.INVALID,
      refreshTokenStatus: TokenStatus.INVALID,
      hasLoginError: action.type === LoginActions.failure.type && !!action.error,
    })
  ),

  // Logout
  on(
    LogoutAction,
    (): AuthState => ({
      ...initialState,
    })
  ),

  // Auth user
  on(
    AuthUserActions.success,
    (state, action): AuthState => ({
      ...state,
      user: action.user,
    })
  ),
  on(
    AuthUserActions.failure,
    (): AuthState => ({
      ...initialState,
    })
  )
);

export function authReducer(state: AuthState | undefined, action: Action): AuthState {
  return reducer(state, action);
}
