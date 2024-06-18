import { NgModule, inject } from '@angular/core';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {
  faGithub,
  faMediumM,
  faXTwitter,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import {
  faStar,
  faBook,
  faLink,
  faLock,
  faUser,
  faRightFromBracket,
  faHome,
  faInfoCircle,
} from '@fortawesome/free-solid-svg-icons';

@NgModule({
  imports: [FontAwesomeModule],
  exports: [FontAwesomeModule],
})
export class IconModule {
  private readonly faIconLibrary = inject(FaIconLibrary);

  private icons = [
    faGithub,
    faMediumM,
    faXTwitter,
    faLinkedinIn,
    faStar,
    faBook,
    faLink,
    faLock,
    faUser,
    faRightFromBracket,
    faHome,
    faInfoCircle,
  ];

  constructor() {
    this.faIconLibrary.addIcons(...this.icons);
  }
}
