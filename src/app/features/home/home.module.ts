import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
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
export class HomeModule {}
