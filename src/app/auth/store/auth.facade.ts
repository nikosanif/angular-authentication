import { Injectable, inject } from '@angular/core';
import { Store } from '@ngrx/store';

import * as AuthActions from './auth.actions';
import * as AuthSelectors from './auth.selectors';

@Injectable()
export class AuthFacade {
  private readonly store = inject(Store);

  readonly authUser$ = this.store.select(AuthSelectors.selectAuthUser);
  readonly isLoggedIn$ = this.store.select(AuthSelectors.selectIsLoggedIn);
  readonly isLoadingLogin$ = this.store.select(AuthSelectors.selectIsLoadingLogin);
  readonly hasLoginError$ = this.store.select(AuthSelectors.selectLoginError);

  login(username: string, password: string) {
    this.store.dispatch(AuthActions.loginRequest({ username, password }));
  }

  logout() {
    this.store.dispatch(AuthActions.logout());
  }

  getAuthUser() {
    this.store.dispatch(AuthActions.getAuthUserRequest());
  }
}
