import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  createUrlTreeFromSnapshot,
} from '@angular/router';
import { map, take } from 'rxjs/operators';

import { AuthFacade } from '../store/auth.facade';

export const authGuard = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const authFacade = inject(AuthFacade);

  return authFacade.isLoggedIn$.pipe(
    take(1),
    map(isLoggedIn =>
      isLoggedIn
        ? // If the user is logged in, allow the route
          true
        : // Redirect to login page with return URL
          createUrlTreeFromSnapshot(route, ['/auth/login'], { returnUrl: state.url })
    )
  );
};
