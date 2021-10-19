import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveComponentModule } from '@ngrx/component';

import { SecuredFeatComponent } from './secured-feat.component';

const routes: Routes = [{ path: '', component: SecuredFeatComponent }];

@NgModule({
  imports: [CommonModule, ReactiveComponentModule, RouterModule.forChild(routes)],
  declarations: [SecuredFeatComponent],
})
export class SecuredFeatModule {}
