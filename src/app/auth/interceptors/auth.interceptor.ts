import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { TokenStorageService } from '../../core/services';
import { AuthFacade } from '../store/auth.facade';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private authFacade: AuthFacade,
    private tokenStorageService: TokenStorageService
  ) {}

  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const accessToken = this.tokenStorageService.getAccessToken();

    if (accessToken) {
      req = req.clone({
        setHeaders: { Authorization: `Bearer ${accessToken}` },
        // !Attention: it used only at Fake API, remove it in real app
        params: req.params.set('auth-token', accessToken),
      });
    }

    return next.handle(req).pipe(s => this.handleErrors(s, req.url));
  }

  private handleErrors(
    source: Observable<HttpEvent<unknown>>,
    urlPath: string
  ): Observable<HttpEvent<unknown>> {
    return source.pipe(
      catchError((error: HttpErrorResponse) => {
        // try to avoid errors on logout
        // therefore we check the url path of '/auth/'
        if (error.status === 401 && !urlPath.includes('/auth/')) {
          return this.handle401();
        }

        // rethrow error
        return throwError(() => error);
      })
    );
  }

  private handle401() {
    this.authFacade.logout();
    return EMPTY;
  }
}
