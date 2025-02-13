import { Injectable, inject } from '@angular/core';
import { Store } from '@ngrx/store';

import { IAuthFacade } from '../../models';

import { LogoutAction, LoginActions, AuthUserActions } from './auth.actions';
import * as AuthSelectors from './auth.selectors';

@Injectable()
export class NgrxAuthFacade implements IAuthFacade {
  private readonly store = inject(Store);

  readonly authUser$ = this.store.select(AuthSelectors.selectAuthUser);
  readonly isLoggedIn$ = this.store.select(AuthSelectors.selectIsLoggedIn);
  readonly isLoadingLogin$ = this.store.select(AuthSelectors.selectIsLoadingLogin);
  readonly hasLoginError$ = this.store.select(AuthSelectors.selectLoginError);

  login(username: string, password: string) {
    this.store.dispatch(LoginActions.request({ username, password }));
  }

  logout() {
    this.store.dispatch(LogoutAction());
  }

  getAuthUser() {
    this.store.dispatch(AuthUserActions.request());
  }
}
