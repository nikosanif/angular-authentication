import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AuthService, authServiceInitProvider } from './auth.service';
import { NoAuthGuardService } from './guards';
import { LoginComponent } from './login/login.component';
import { AuthEffects } from './store/auth.effects';
import { AuthFacade } from './store/auth.facade';
import { AUTH_FEATURE_KEY, authReducer } from './store/auth.reducer';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [NoAuthGuardService],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    StoreModule.forFeature(AUTH_FEATURE_KEY, authReducer),
    EffectsModule.forFeature([AuthEffects]),
  ],
  providers: [AuthFacade, AuthService, authServiceInitProvider],
})
export class AuthModule {}
