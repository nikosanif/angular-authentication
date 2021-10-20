import { Component } from '@angular/core';

import { AuthFacade } from '../../auth/store/auth.facade';
import { USERS } from '../../core/fake-api';
import { GreetingUtil } from '../../shared/util';
@Component({
  selector: 'aa-secured-feat',
  templateUrl: './secured-feat.component.html',
})
export class SecuredFeatComponent {
  greeting = GreetingUtil.greet();
  user$ = this.authFacade.user$;
  users = USERS;

  constructor(private authFacade: AuthFacade) {}
}
