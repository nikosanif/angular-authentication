import { HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable, catchError, delay, tap, throwError } from 'rxjs';

import { FakeApi } from './fake-api';

export function fakeApiInterceptor(
  request: HttpRequest<unknown>
): Observable<HttpEvent<unknown>> {
  const { method, url, body } = request;
  console.log('[FakeApiInterceptor] Request ⏩');
  console.table({ method, url, body });

  return new FakeApi(request as HttpRequest<Record<string, unknown>>)
    .handleRequest()
    .pipe(
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
