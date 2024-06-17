import { NgModule } from '@angular/core';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {
  faGithub,
  faMediumM,
  faXTwitter,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import { faStar, faBook, faLink } from '@fortawesome/free-solid-svg-icons';

@NgModule({
  imports: [FontAwesomeModule],
  exports: [FontAwesomeModule],
})
export class IconModule {
  private icons = [faGithub, faMediumM, faXTwitter, faLinkedinIn, faStar, faBook, faLink];

  constructor(faIconLibrary: FaIconLibrary) {
    faIconLibrary.addIcons(...this.icons);
  }
}
