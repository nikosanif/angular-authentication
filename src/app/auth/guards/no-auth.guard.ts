import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, createUrlTreeFromSnapshot } from '@angular/router';
import { map, take } from 'rxjs/operators';

import { AuthFacade } from '../store/auth.facade';

export const noAuthGuard = (route: ActivatedRouteSnapshot) => {
  const authFacade = inject(AuthFacade);

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
