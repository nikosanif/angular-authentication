import { Injectable, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, finalize, map, tap } from 'rxjs/operators';

import { TokenStorageService } from '../../core/services';
import { AuthService } from '../auth.service';

import * as AuthActions from './auth.actions';

@Injectable()
export class AuthEffects {
  private readonly router = inject(Router);
  private readonly actions$ = inject(Actions);
  private readonly authService = inject(AuthService);
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly tokenStorageService = inject(TokenStorageService);

  readonly login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.loginRequest),
      exhaustMap(credentials =>
        this.authService.login(credentials.username, credentials.password).pipe(
          map(data => {
            // save tokens
            this.tokenStorageService.saveTokens(data.access_token, data.refresh_token);
            // trigger login success action
            return AuthActions.loginSuccess();
          }),
          catchError(error => of(AuthActions.loginFailure({ error })))
        )
      )
    );
  });

  readonly onLoginSuccess$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.loginSuccess),
      map(() => {
        // redirect to return url or home
        this.router.navigateByUrl(
          this.activatedRoute.snapshot.queryParams['returnUrl'] || '/'
        );
        return AuthActions.getAuthUserRequest();
      })
    );
  });

  readonly logout$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(AuthActions.logout),
        exhaustMap(() => {
          this.router.navigateByUrl('/');
          return this.authService
            .logout()
            .pipe(finalize(() => this.tokenStorageService.removeTokens()));
        })
      );
    },
    { dispatch: false }
  );

  readonly getUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.refreshTokenSuccess, AuthActions.getAuthUserRequest),
      exhaustMap(() =>
        this.authService.getAuthUser().pipe(
          map(user => AuthActions.getAuthUserSuccess({ user })),
          catchError(() => of(AuthActions.getAuthUserFailure()))
        )
      )
    );
  });

  readonly refreshToken$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.refreshTokenRequest),
      exhaustMap(() =>
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

  readonly onLoginOrRefreshTokenFailure$ = createEffect(
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
}
