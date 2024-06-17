import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

import { selectIsNotLoggedIn } from '../store/auth.selectors';

@Injectable({ providedIn: 'root' })
export class NoAuthGuardService {
  private readonly store = inject(Store);
  private readonly router = inject(Router);

  canActivate(): Observable<boolean> {
    return this.store.select(selectIsNotLoggedIn).pipe(
      take(1),
      map(isNotLoggedIn => {
        if (!isNotLoggedIn) {
          this.router.navigateByUrl('/');
        }

        return isNotLoggedIn;
      })
    );
  }
}
