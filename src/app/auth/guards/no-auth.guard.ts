import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, createUrlTreeFromSnapshot } from '@angular/router';
import { map, take } from 'rxjs/operators';

import { AUTH_FACADE } from '../tokens';

export const noAuthGuard = (route: ActivatedRouteSnapshot) => {
  const authFacade = inject(AUTH_FACADE);

  return authFacade.isLoggedIn$.pipe(
    take(1),
    map(isLoggedIn =>
      !isLoggedIn
        ? // If the user is not logged in, allow the route
          true
        : // Redirect to home page
          createUrlTreeFromSnapshot(route, ['/'])
    )
  );
};
