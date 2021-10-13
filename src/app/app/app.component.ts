import { Component } from '@angular/core';

import { AuthFacade } from '../auth/store/auth.facade';

@Component({
  selector: 'aa-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private authFacade: AuthFacade) {}

  logout() {
    this.authFacade.logout();
  }
}
