import { Routes } from '@angular/router';

import { noAuthGuard } from './guards';

export const authRoutes: Routes = [
  {
    path: 'login',
    canActivate: [noAuthGuard],
    loadComponent: () => import('./login/login.component').then(c => c.LoginComponent),
  },
];
