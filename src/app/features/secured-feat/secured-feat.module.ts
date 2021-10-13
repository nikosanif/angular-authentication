import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SecuredFeatComponent } from './secured-feat.component';

const routes: Routes = [{ path: '', component: SecuredFeatComponent }];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [SecuredFeatComponent],
})
export class SecuredFeatModule {}
