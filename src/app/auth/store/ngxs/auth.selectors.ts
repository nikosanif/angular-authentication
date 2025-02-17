import { Selector } from '@ngxs/store';

import { AuthStateModel } from '../../models';

import { AuthState } from './auth.state';

export class AuthSelectors {
  @Selector([AuthState])
  static auth(state: AuthStateModel) {
    return state;
  }

  @Selector([AuthState])
  static isLoggedIn(state: AuthStateModel) {
    return state.isLoggedIn;
  }

  @Selector([AuthState])
  static loginError(state: AuthStateModel) {
    return state.hasLoginError;
  }

  @Selector([AuthState])
  static isLoadingLogin(state: AuthStateModel) {
    return state.isLoadingLogin;
  }

  @Selector([AuthState])
  static authUser(state: AuthStateModel) {
    return state.user;
  }
}
