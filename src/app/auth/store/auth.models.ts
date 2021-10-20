export enum TokenStatus {
  PENDING = 'PENDING',
  VALIDATING = 'VALIDATING',
  VALID = 'VALID',
  INVALID = 'INVALID',
}

export interface AuthState {
  isLoggedIn: boolean;
  user?: AuthUser;
  accessTokenStatus: TokenStatus;
  refreshTokenStatus: TokenStatus;
  isLoadingLogin: boolean;
  hasLoginError: boolean;
}

export interface AuthUser {
  id: number;
  firstName: string;
  lastName: string;
}
