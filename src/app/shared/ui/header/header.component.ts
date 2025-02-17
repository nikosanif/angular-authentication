import { Component, Input, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import { AuthUser } from '../../../auth';
import { AvatarComponent } from '../avatar';
import { IconModule } from '../icon';

interface MenuItem {
  link: string;
  label: string;
  icon: IconProp;
}

@Component({
  selector: 'aa-header',
  imports: [
    AvatarComponent,
    IconModule,
    MatButtonModule,
    MatMenuModule,
    MatTooltipModule,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input({ required: true })
  authUser: AuthUser | null | undefined = null;

  readonly logout = output<void>();

  readonly menuItems: MenuItem[] = [
    { link: '/home', label: 'Home', icon: 'home' },
    { link: '/about', label: 'About', icon: 'info-circle' },
    { link: '/secured-feat', label: 'Secured Feature', icon: 'lock' },
  ];
}
