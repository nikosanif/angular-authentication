import { Injectable } from '@angular/core';

import { environment } from '../../../environments/environment';

type AppEnv = typeof environment;

@Injectable({ providedIn: 'root' })
export class ConfigService {
  /**
   * Returns environment config of application
   */
  getEnvironment(): AppEnv {
    return environment;
  }

  /**
   * Returns the server's host url
   */
  getAPIUrl(): string {
    return environment?.apiUrl ?? '';
  }

  /**
   * Returns configuration for auth client and secret
   */
  getAuthSettings(): AppEnv['settings']['auth'] {
    return environment?.settings?.auth;
  }
}
