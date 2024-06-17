import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';

import { AuthFacade } from '../../auth';
import { USERS } from '../../core/fake-api';
import { GreetingUtil } from '../../shared/util';
@Component({
  selector: 'aa-secured-feat',
  standalone: true,
  imports: [AsyncPipe, MatCardModule, MatTableModule],
  templateUrl: './secured-feat.component.html',
})
export class SecuredFeatComponent {
  private readonly authFacade = inject(AuthFacade);

  readonly greeting = GreetingUtil.greet();
  readonly authUser$ = this.authFacade.user$;
  readonly displayedColumns: string[] = ['id', 'name', 'username', 'password'];
  readonly dataSource = USERS;
}
