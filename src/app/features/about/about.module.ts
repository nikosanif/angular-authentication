import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { TuiButtonModule } from '@taiga-ui/core';

import { AboutComponent } from './about.component';

const routes: Routes = [{ path: '', component: AboutComponent }];

@NgModule({
  imports: [
    CommonModule,
    TuiButtonModule,
    FontAwesomeModule,
    RouterModule.forChild(routes),
  ],
  declarations: [AboutComponent],
})
export class AboutModule {
  private icons = [faStar, faTwitter];

  constructor(faIconLibrary: FaIconLibrary) {
    faIconLibrary.addIcons(...this.icons);
  }
}
