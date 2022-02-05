import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TuiButtonModule } from '@taiga-ui/core';

import { IconModule } from '../../shared/ui/icon/icon.module';
import { AboutComponent } from './about.component';

const routes: Routes = [{ path: '', component: AboutComponent }];

@NgModule({
  imports: [CommonModule, TuiButtonModule, RouterModule.forChild(routes), IconModule],
  declarations: [AboutComponent],
})
export class AboutModule {}
