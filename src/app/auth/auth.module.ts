import { RouterModule, Routes } from '@angular/router';
import {
  TuiFieldErrorModule,
  TuiInputModule,
  TuiInputPasswordModule,
} from '@taiga-ui/kit';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TuiButtonModule } from '@taiga-ui/core';

import { LoginComponent } from './login/login.component';
import { NoAuthGuardService } from './guards';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [NoAuthGuardService],
  },
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TuiButtonModule,
    TuiFieldErrorModule,
    TuiInputModule,
    TuiInputPasswordModule,
    RouterModule.forChild(routes),
  ],
  declarations: [LoginComponent],
})
export class AuthModule {}
