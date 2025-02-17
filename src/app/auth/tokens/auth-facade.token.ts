import { InjectionToken } from '@angular/core';

import { IAuthFacade } from '../models';

export const AUTH_FACADE = new InjectionToken<IAuthFacade>('AUTH_FACADE');
