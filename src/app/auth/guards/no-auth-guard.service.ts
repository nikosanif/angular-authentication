import { CanActivate, Router } from '@angular/router';
import { map, take } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { selectIsLoggedIn } from '../store/auth.selectors';

@Injectable({ providedIn: 'root' })
export class NoAuthGuardService implements CanActivate {
  constructor(private router: Router, private store: Store) {}

  canActivate(): Observable<boolean> {
    return this.store.select(selectIsLoggedIn).pipe(
      take(1),
      // eslint-disable-next-line ngrx/avoid-mapping-selectors
      map((isLoggedIn) => {
        if (isLoggedIn) {
          this.router.navigateByUrl('/');
        }

        return !isLoggedIn;
      })
    );
  }
}
