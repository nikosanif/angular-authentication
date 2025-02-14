/**
 * ⚠️ FIXME: choose one store and remove any unused packages in real app ⚠️
 * This file contains the store setup for the application.
 * It supports both Ngrx and Ngxs for the store management, but only one can be used at a time.
 * In real applications, you should choose one and remove the unused packages.
 */

import { provideEffects } from '@ngrx/effects';
import { provideRouterStore, routerReducer } from '@ngrx/router-store';
import { provideStore as provideNgrxStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { withNgxsReduxDevtoolsPlugin } from '@ngxs/devtools-plugin';
import {
  provideStore as provideNgxsStore,
  withNgxsDevelopmentOptions,
} from '@ngxs/store';

import { environment } from '../environments/environment';

import { provideNgrxAuthStore, provideNgxsAuthStore } from './auth';

const APP_NAME = 'Angular Authentication';

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
      isDevToolsEnabled ? provideStoreDevtools({ name: APP_NAME }) : [],
    ],
    ngxs: [
      provideNgxsStore(
        [],
        withNgxsReduxDevtoolsPlugin({
          name: APP_NAME,
          disabled: !isDevToolsEnabled,
        }),
        withNgxsDevelopmentOptions({
          warnOnUnhandledActions: true,
        })
      ),
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
