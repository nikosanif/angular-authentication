import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {
  faGithub,
  faMediumM,
  faTwitter,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import { faBook, faLink } from '@fortawesome/free-solid-svg-icons';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '../../environments/environment';
import { AuthModule } from '../auth/auth.module';
import { authInterceptorProviders } from '../auth/interceptors';

@NgModule({
  imports: [
    // Angular
    CommonModule,
    HttpClientModule,

    // NgRx
    StoreModule.forRoot({}, {}),
    StoreRouterConnectingModule.forRoot(),
    EffectsModule.forRoot([]),
    environment.production
      ? []
      : StoreDevtoolsModule.instrument({ name: 'Angular Authentication' }),

    // External
    FontAwesomeModule,

    // Application
    AuthModule,
  ],
  providers: [
    // Interceptors
    ...authInterceptorProviders,
  ],
})
export class CoreModule {
  constructor(
    faIconLibrary: FaIconLibrary,
    @Optional() @SkipSelf() parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only once in AppModule');
    }

    faIconLibrary.addIcons(faGithub, faMediumM, faTwitter, faLinkedinIn, faBook, faLink);
  }
}
