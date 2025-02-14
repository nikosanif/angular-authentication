import { inject, Injectable } from '@angular/core';
import { Store } from '@ngxs/store';

import { IAuthFacade } from '../../models';

import { FetchAuthUser, Login, Logout } from './auth.actions';
import { AuthSelectors } from './auth.selectors';

@Injectable()
export class NgxsAuthFacade implements IAuthFacade {
  private readonly store = inject(Store);

  readonly authUser$ = this.store.select(AuthSelectors.authUser);
  readonly isLoggedIn$ = this.store.select(AuthSelectors.isLoggedIn);
  readonly isLoadingLogin$ = this.store.select(AuthSelectors.isLoadingLogin);
  readonly hasLoginError$ = this.store.select(AuthSelectors.loginError);

  login(username: string, password: string) {
    this.store.dispatch(new Login(username, password));
  }

  logout() {
    this.store.dispatch(new Logout());
  }

  getAuthUser() {
    this.store.dispatch(new FetchAuthUser());
  }
}
