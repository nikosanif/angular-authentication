import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

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
  // TODO: uncomment in
  // {
  //   path: 'secured-feat',
  //   canActivate: [AuthGuardService],
  //   loadChildren: () =>
  //     import('./features/secured-feat/secured-feat.module').then(
  //       m => m.SecuredFeatModule
  //     ),
  // },
  {
    path: '**',
    redirectTo: 'home',
  },
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
