import { Action, createReducer, on } from '@ngrx/store';

import { AuthStateModel, TokenStatus } from '../../models';

import {
  AuthUserActions,
  LoginActions,
  LogoutAction,
  RefreshTokenActions,
} from './auth.actions';

export const AUTH_FEATURE_KEY = 'auth';

export interface AuthPartialState {
  readonly [AUTH_FEATURE_KEY]: AuthStateModel;
}

export const initialState: AuthStateModel = {
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
    (state): AuthStateModel => ({
      ...state,
      accessTokenStatus: TokenStatus.VALIDATING,
      isLoadingLogin: true,
      hasLoginError: false,
    })
  ),

  // Refresh token
  on(
    RefreshTokenActions.request,
    (state): AuthStateModel => ({
      ...state,
      refreshTokenStatus: TokenStatus.VALIDATING,
    })
  ),

  // Login & Refresh token
  on(
    LoginActions.success,
    RefreshTokenActions.success,
    (state): AuthStateModel => ({
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
    (state, action): AuthStateModel => ({
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
    (): AuthStateModel => ({
      ...initialState,
    })
  ),

  // Auth user
  on(
    AuthUserActions.success,
    (state, action): AuthStateModel => ({
      ...state,
      user: action.user,
    })
  ),
  on(
    AuthUserActions.failure,
    (): AuthStateModel => ({
      ...initialState,
    })
  )
);

export function authReducer(
  state: AuthStateModel | undefined,
  action: Action
): AuthStateModel {
  return reducer(state, action);
}
