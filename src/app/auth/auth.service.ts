import { HttpClient, HttpParams } from '@angular/common/http';
import { APP_INITIALIZER, Injectable, Provider, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { lastValueFrom, Observable, throwError } from 'rxjs';
import { filter, take } from 'rxjs/operators';

import { ConfigService, TokenStorageService } from '../core/services';

import { RefreshTokenActions } from './store/auth.actions';
import { AuthState, AuthUser, TokenStatus } from './store/auth.models';
import * as AuthSelectors from './store/auth.selectors';

export interface AccessData {
  token_type: 'Bearer';
  expires_in: number;
  access_token: string;
  refresh_token: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly store = inject(Store);
  private readonly http = inject(HttpClient);
  private readonly configService = inject(ConfigService);
  private readonly tokenStorageService = inject(TokenStorageService);

  private readonly hostUrl = this.configService.getAPIUrl();
  private readonly clientId = this.configService.getAuthSettings().clientId;
  private readonly clientSecret = this.configService.getAuthSettings().secretId;

  /**
   * Returns a promise that waits until
   * refresh token and get auth user
   *
   * @returns {Promise<AuthState>}
   */
  init(): Promise<AuthState> {
    this.store.dispatch(RefreshTokenActions.request());

    const authState$ = this.store.select(AuthSelectors.selectAuth).pipe(
      filter(
        auth =>
          auth.refreshTokenStatus === TokenStatus.INVALID ||
          (auth.refreshTokenStatus === TokenStatus.VALID && !!auth.user)
      ),
      take(1)
    );

    return lastValueFrom(authState$);
  }

  /**
   * Performs a request with user credentials
   * in order to get auth tokens
   *
   * @param {string} username
   * @param {string} password
   * @returns Observable<AccessData>
   */
  login(username: string, password: string): Observable<AccessData> {
    return this.http.post<AccessData>(`${this.hostUrl}/api/auth/login`, {
      client_id: this.clientId,
      client_secret: this.clientSecret,
      grant_type: 'password',
      username,
      password,
    });
  }

  /**
   * Performs a request for logout authenticated user
   *
   * @param {('all' | 'allButCurrent' | 'current')} [clients='current']
   * @returns Observable<void>
   */
  logout(clients: 'all' | 'allButCurrent' | 'current' = 'current'): Observable<void> {
    const params = new HttpParams().append('clients', clients);

    return this.http.get<void>(`${this.hostUrl}/api/auth/logout`, { params });
  }

  /**
   * Asks for a new access token given
   * the stored refresh token
   *
   * @returns {Observable<AccessData>}
   */
  refreshToken(): Observable<AccessData> {
    const refreshToken = this.tokenStorageService.getRefreshToken();
    if (!refreshToken) {
      return throwError(() => new Error('Refresh token does not exist'));
    }

    return this.http.post<AccessData>(`${this.hostUrl}/api/auth/login`, {
      client_id: this.clientId,
      client_secret: this.clientSecret,
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
    });
  }

  /**
   * Returns authenticated user
   * based on saved access token
   *
   * @returns {Observable<AuthUser>}
   */
  getAuthUser(): Observable<AuthUser> {
    return this.http.get<AuthUser>(`${this.hostUrl}/api/users/me`);
  }
}

export const authServiceInitProvider: Provider = {
  provide: APP_INITIALIZER,
  useFactory: (authService: AuthService) => () => authService.init(),
  deps: [AuthService],
  multi: true,
};
