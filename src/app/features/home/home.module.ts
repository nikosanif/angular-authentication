import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TuiButtonModule, TuiHintModule, TuiLinkModule } from '@taiga-ui/core';
import { TuiAvatarModule } from '@taiga-ui/kit';

import { IconModule } from '../../shared/ui/icon/icon.module';

import { HomeComponent } from './home.component';

const routes: Routes = [{ path: '', component: HomeComponent }];

@NgModule({
  imports: [
    CommonModule,
    TuiButtonModule,
    TuiLinkModule,
    TuiHintModule,
    TuiAvatarModule,
    RouterModule.forChild(routes),
    IconModule,
  ],
  declarations: [HomeComponent],
})
export class HomeModule {}
