import { DatePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import { ConfigService } from '../../../core/services';
import { IconModule } from '../icon';

interface PersonalLink {
  label: string;
  href: string;
  icon: IconProp;
}

@Component({
  selector: 'aa-footer',
  standalone: true,
  imports: [DatePipe, IconModule, MatButtonModule],
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  private readonly configService = inject(ConfigService);

  readonly now = new Date();
  readonly version = this.configService.getVersion();
  readonly personalLinks: PersonalLink[] = [
    {
      label: 'GitHub',
      href: 'https://github.com/nikosanif',
      icon: ['fab', 'github'],
    },
    {
      label: 'Medium',
      href: 'https://nikosanif.medium.com/',
      icon: ['fab', 'medium-m'],
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/nikosanifantis/',
      icon: ['fab', 'linkedin-in'],
    },
    {
      label: 'X',
      href: 'https://x.com/nikosanif',
      // TODO: add X icon
      icon: ['fab', 'twitter'],
    },
  ];
}
