import { Routes } from '@angular/router';

import { authGuard } from './auth';

export const routes: Routes = [
  // Redirect to home if root path
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  {
    path: 'home',
    loadComponent: () => import('./features/home').then(c => c.HomeComponent),
  },
  {
    path: 'about',
    loadComponent: () => import('./features/about').then(c => c.AboutComponent),
  },
  {
    path: 'secured-feat',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./features/secured-feat').then(c => c.SecuredFeatComponent),
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.routes').then(c => c.authRoutes),
  },

  // Redirect to home if no route found
  { path: '**', redirectTo: 'home' },
];
