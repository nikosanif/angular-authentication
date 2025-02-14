import { provideEffects } from '@ngrx/effects';
import { provideRouterStore, routerReducer } from '@ngrx/router-store';
import { provideStore as provideNgrxStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { withNgxsReduxDevtoolsPlugin } from '@ngxs/devtools-plugin';
import { provideStore as provideNgxsStore } from '@ngxs/store';

import { environment } from '../environments/environment';

import { provideNgrxAuthStore, provideNgxsAuthStore } from './auth';

export enum StoreType {
  Ngrx = 'ngrx',
  Ngxs = 'ngxs',
}

/**
 * Provides all the necessary store providers for setting up the store.
 * It supports both Ngrx and Ngxs.
 */
export function provideSetupStore(storeType: StoreType) {
  const isDevToolsEnabled = !environment.production;

  const providers = {
    ngrx: [
      provideNgrxStore({ router: routerReducer }),
      provideRouterStore(),
      provideEffects(),
      isDevToolsEnabled ? provideStoreDevtools({ name: 'Angular Authentication' }) : [],
    ],
    ngxs: [
      provideNgxsStore([], ...(isDevToolsEnabled ? [withNgxsReduxDevtoolsPlugin()] : [])),
    ],
  };

  return providers[storeType];
}

/**
 * Provides the authentication store for the application.
 * It supports both Ngrx and Ngxs.
 */
export function provideAuthStore(storeType: StoreType) {
  const providers = {
    ngrx: provideNgrxAuthStore(),
    ngxs: provideNgxsAuthStore(),
  };

  return providers[storeType];
}
