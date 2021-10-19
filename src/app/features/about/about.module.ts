import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
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
export class AboutModule {}
