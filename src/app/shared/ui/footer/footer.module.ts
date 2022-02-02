import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {
  faGithub,
  faMediumM,
  faTwitter,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import { TuiLinkModule } from '@taiga-ui/core';

import { FooterComponent } from './footer.component';

@NgModule({
  imports: [CommonModule, FontAwesomeModule, TuiLinkModule],
  declarations: [FooterComponent],
  exports: [FooterComponent],
})
export class FooterModule {
  private icons = [faGithub, faMediumM, faTwitter, faLinkedinIn];

  constructor(faIconLibrary: FaIconLibrary) {
    faIconLibrary.addIcons(...this.icons);
  }
}
