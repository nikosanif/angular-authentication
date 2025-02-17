import {
  HttpErrorResponse,
  HttpEvent,
  HttpRequest,
  HttpHandlerFn,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { EMPTY, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { TokenStorageService } from '../../core/services';
import { AUTH_FACADE } from '../tokens';

export function authInterceptor(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> {
  const authFacade = inject(AUTH_FACADE);
  const tokenStorageService = inject(TokenStorageService);

  const handle401 = () => {
    authFacade.logout();
    return EMPTY;
  };

  const accessToken = tokenStorageService.getAccessToken();

  if (accessToken) {
    // Add the Authorization header to the request
    req = req.clone({ setHeaders: { Authorization: `Bearer ${accessToken}` } });
  }

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      // try to avoid errors on logout
      // therefore we check the url path of '/auth/'
      const ignoreAPIs = ['/auth/'];
      if (ignoreAPIs.some(api => req.url.includes(api))) {
        return throwError(() => error);
      }

      // Handle global error status
      switch (error.status) {
        case 401:
          return handle401();
        // Add more error status handling here (e.g. 403)
        default:
          // Rethrow the error as is
          return throwError(() => error);
      }
    })
  );
}
