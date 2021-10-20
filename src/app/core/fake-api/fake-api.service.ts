import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';

import { USERS } from './db.data';
import { FakeAuth } from './fake-auth';

@Injectable({ providedIn: 'root' })
export class FakeApiService implements InMemoryDbService {
  createDb() {
    const users = USERS.map(({ id, firstName, lastName }) => ({
      id,
      firstName,
      lastName,
    }));

    return { users };
  }

  post(ri: RequestInfo) {
    // if client pinged "api/auth" then call FakeAuth handler
    if (ri.collectionName === 'auth') {
      return new FakeAuth(ri).handleRequest();
    }

    //  otherwise default response of In-memory DB
    return undefined;
  }

  get(ri: RequestInfo) {
    // if client pinged "api/users/me" then override id
    if (ri.collectionName === 'users' && ri.id === 'me') {
      const accessToken = ri.query.get('auth-token')?.[0];
      const user = USERS.find(user => user.accessToken === accessToken);
      ri.id = user?.id;
    }

    //  otherwise default response of In-memory DB
    return undefined;
  }
}
