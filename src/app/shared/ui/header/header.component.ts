import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import { AuthFacade } from '../../../auth';
import { AvatarComponent } from '../avatar';
import { IconModule } from '../icon';

interface MenuItem {
  link: string;
  label: string;
  icon: IconProp | null;
}

@Component({
  selector: 'aa-header',
  standalone: true,
  imports: [
    AsyncPipe,
    AvatarComponent,
    RouterLink,
    RouterLinkActive,
    MatButtonModule,
    IconModule,
    MatTooltipModule,
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  private readonly authFacade = inject(AuthFacade);

  readonly menuItems: MenuItem[] = [
    { link: '/home', label: 'Home', icon: null },
    { link: '/about', label: 'About', icon: null },
    { link: '/secured-feat', label: 'Secured Feature', icon: 'lock' },
  ];
  readonly authUser$ = this.authFacade.user$;

  logout() {
    this.authFacade.logout();
  }
}
