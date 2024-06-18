import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { authGuard } from './auth';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./features/home').then(m => m.HomeComponent),
  },
  {
    path: 'about',
    loadComponent: () => import('./features/about').then(m => m.AboutComponent),
  },
  {
    path: 'secured-feat',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./features/secured-feat').then(m => m.SecuredFeatComponent),
  },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
