import { Component, inject } from '@angular/core';

import { AuthFacade } from '../../auth';
import { USERS } from '../../core/fake-api';
import { GreetingUtil } from '../../shared/util';
@Component({
  selector: 'aa-secured-feat',
  templateUrl: './secured-feat.component.html',
})
export class SecuredFeatComponent {
  private readonly authFacade = inject(AuthFacade);

  readonly greeting = GreetingUtil.greet();
  readonly user$ = this.authFacade.user$;
  readonly users = USERS;
}
