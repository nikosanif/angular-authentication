import { Component } from '@angular/core';

import { AuthFacade } from '../../../app/auth/store/auth.facade';

@Component({
  selector: 'aa-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
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
