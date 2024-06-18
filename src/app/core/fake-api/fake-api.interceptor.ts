import {
  HTTP_INTERCEPTORS,
  HttpEvent,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, delay, tap, throwError } from 'rxjs';

import { FakeApi } from './fake-api';

@Injectable()
export class FakeApiInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<Record<string, unknown>>
  ): Observable<HttpEvent<unknown>> {
    const { method, url, body } = request;
    console.log('[FakeApiInterceptor] Request ⏩');
    console.table({ method, url, body });

    return new FakeApi(request).handleRequest().pipe(
      delay(200), // delay to simulate server latency
      tap(response => {
        const { status, url, body } = response;
        console.log('[FakeApiInterceptor] Response success ✅');
        console.table({ status, url, body });
      }),
      catchError(error => {
        console.error('[FakeApiInterceptor] Response error ❌');
        console.error(error);
        return throwError(() => error);
      })
    );
  }
}

export const fakeApiProvider = {
  // use fake backend in place of Http service for backend-less development
  provide: HTTP_INTERCEPTORS,
  useClass: FakeApiInterceptor,
  multi: true,
};
