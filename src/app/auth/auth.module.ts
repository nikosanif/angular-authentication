import { RouterModule, Routes } from '@angular/router';
import {
  TuiFieldErrorModule,
  TuiInputModule,
  TuiInputPasswordModule,
} from '@taiga-ui/kit';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { TuiButtonModule } from '@taiga-ui/core';

import { AUTH_FEATURE_KEY, authReducer } from './store/auth.reducer';
import { AuthService, authServiceInitProvider } from './auth.service';
import { AuthEffects } from './store/auth.effects';
import { AuthFacade } from './store/auth.facade';
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
    StoreModule.forFeature(AUTH_FEATURE_KEY, authReducer),
    EffectsModule.forFeature([AuthEffects]),
  ],
  declarations: [LoginComponent],
  providers: [AuthFacade, AuthService, authServiceInitProvider],
})
export class AuthModule {}
