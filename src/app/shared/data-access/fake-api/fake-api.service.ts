import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';

import { FakeAuth } from './fake-auth';

@Injectable({ providedIn: 'root' })
export class FakeApiService implements InMemoryDbService {
  createDb() {
    const users = [
      { id: 1, firstName: 'John', lastName: 'Doe' },
      { id: 'me', firstName: 'Nikos', lastName: 'Anifantis' },
    ];

    return { users };
  }

  post(reqInfo: RequestInfo) {
    // if client pinged "api/auth" then call handleAuthApi
    if (reqInfo.collectionName === 'auth') {
      return FakeAuth.handleRequest(reqInfo);
    }

    //  otherwise default response of In-memory DB
    return undefined;
  }
}
