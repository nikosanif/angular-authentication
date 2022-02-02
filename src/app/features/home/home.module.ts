import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBook, faLink } from '@fortawesome/free-solid-svg-icons';
import { TuiButtonModule, TuiHintModule, TuiLinkModule } from '@taiga-ui/core';
import { TuiAvatarModule } from '@taiga-ui/kit';

import { HomeComponent } from './home.component';

const routes: Routes = [{ path: '', component: HomeComponent }];

@NgModule({
  imports: [
    CommonModule,
    TuiButtonModule,
    TuiLinkModule,
    TuiHintModule,
    TuiAvatarModule,
    FontAwesomeModule,
    RouterModule.forChild(routes),
  ],
  declarations: [HomeComponent],
})
export class HomeModule {
  private icons = [faGithub, faBook, faLink];

  constructor(faIconLibrary: FaIconLibrary) {
    faIconLibrary.addIcons(...this.icons);
  }
}
