import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { environment } from '../../environments/environment';
import { AuthModule } from '../auth/auth.module';
import { authInterceptorProviders } from '../auth/interceptors';
import { FakeApiService } from './fake-api';

@NgModule({
  imports: [
    // Angular
    CommonModule,
    HttpClientModule,

    // Fake Auth API: Remove this in real apps
    HttpClientInMemoryWebApiModule.forRoot(FakeApiService),

    // NgRx
    StoreModule.forRoot({}, {}),
    StoreRouterConnectingModule.forRoot(),
    EffectsModule.forRoot([]),
    environment.production
      ? []
      : StoreDevtoolsModule.instrument({ name: 'Angular Authentication' }),

    // Application
    AuthModule,
  ],
  providers: [
    // Interceptors
    ...authInterceptorProviders,
  ],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only once in AppModule');
    }
  }
}
