import { Component, ViewEncapsulation } from '@angular/core';

import { AuthFacade } from '../auth/store/auth.facade';

@Component({
  selector: 'aa-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  readonly menuItems = [
    { link: '/home', label: 'Home' },
    { link: '/about', label: 'About' },
    { link: '/secured-feat', label: 'Secured Feature' },
  ];
  authUser$ = this.authFacade.user$;

  constructor(private authFacade: AuthFacade) {}

  logout() {
    this.authFacade.logout();
  }
}
