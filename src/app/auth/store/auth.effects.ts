import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, finalize, map, switchMap, tap } from 'rxjs/operators';

import { TokenStorageService } from '../../core/services';
import { AuthService } from '../auth.service';
import * as AuthActions from './auth.actions';

@Injectable()
export class AuthEffects {
  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.loginRequest),
      switchMap(credentials =>
        this.authService.login(credentials.username, credentials.password).pipe(
          map(data => {
            // save tokens
            this.tokenStorageService.saveTokens(data.access_token, data.refresh_token);
            // trigger login success action
            return AuthActions.loginSuccess();
          }),
          catchError(e => of(AuthActions.loginFailure(e)))
        )
      )
    );
  });

  onLoginSuccess$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.loginSuccess),
      map(() => {
        // redirect to return url or home
        this.router.navigateByUrl(
          this.activatedRoute.snapshot.queryParams.returnUrl || '/'
        );
        return AuthActions.getAuthUserRequest();
      })
    );
  });

  logout$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(AuthActions.logout),
        switchMap(() => {
          this.router.navigateByUrl('/');
          return this.authService
            .logout()
            .pipe(finalize(() => this.tokenStorageService.removeTokens()));
        })
      );
    },
    { dispatch: false }
  );

  getUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.refreshTokenSuccess, AuthActions.getAuthUserRequest),
      switchMap(() =>
        this.authService.getAuthUser().pipe(
          map(user => AuthActions.getAuthUserSuccess({ user })),
          catchError(() => of(AuthActions.getAuthUserFailure()))
        )
      )
    );
  });

  refreshToken$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.refreshTokenRequest),
      switchMap(() =>
        this.authService.refreshToken().pipe(
          map(data => {
            // save tokens
            this.tokenStorageService.saveTokens(data.access_token, data.refresh_token);
            // trigger refresh token success action
            return AuthActions.refreshTokenSuccess();
          }),
          catchError(() => of(AuthActions.refreshTokenFailure()))
        )
      )
    );
  });

  onLoginOrRefreshTokenFailure$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(AuthActions.loginFailure, AuthActions.refreshTokenFailure),
        tap(() => {
          this.tokenStorageService.removeTokens();
        })
      );
    },
    { dispatch: false }
  );

  constructor(
    private router: Router,
    private actions$: Actions,
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private tokenStorageService: TokenStorageService
  ) {}
}
