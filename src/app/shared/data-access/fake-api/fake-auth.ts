import { RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';

export class FakeAuth {
  static handleRequest(reqInfo: RequestInfo): Observable<any> | undefined {
    return this.login(reqInfo);
  }

  static login(reqInfo: RequestInfo) {
    // return an Observable response
    return reqInfo.utils.createResponse$(() => {
      // TODO: remove logs
      console.log('HTTP POST api/auth override');

      const { headers, url, req } = reqInfo;

      // TODO: check client credentials
      const { username, password } = (req as any)?.body;
      console.log(username, password);

      if (username === 'admin' && password === '1234') {
        return {
          status: 200,
          headers,
          url,
          body: {
            access_token:
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9' +
              '.eyJ1c2VySWQiOiI2MTQ4OGM4YjJkMjFmYTAwNWY3Y2ZjMzAiLCJjbGllbnRJZCI6IjYx' +
              'NDg4YjZiZWU0ZjgwMDAzZTI4NjgyYyIsImlhdCI6MTYzNDY3MjI2NX0' +
              '.zai6OaPYURy-rAf1VpLLa7HRHVqt4bt_Ni_3NiesiiI',
            token_type: 'Bearer',
            expires_in: 86399,
            refresh_token:
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9' +
              '.eyJ1c2VySWQiOiI2MTQ4OGM4YjJkMjFmYTAwNWY3Y2ZjMzAiLCJjbGllbnRJZCI6IjYxN' +
              'Dg4YjZiZWU0ZjgwMDAzZTI4NjgyYyIsImlhdCI6MTYzNDY3MjI2NX0' +
              '.fzbb0VhGWChMJAKC6zO0l3etcHMel8l9FkxA6P6UIik',
            scope: [],
          },
        };
      }

      //  otherwise return response with status code 401 (unauthorized)
      return {
        status: 400,
        headers,
        url,
        body: {
          status: 400,
          code: 'invalid_grant',
          message: 'Invalid grant: user credentials are invalid',
        },
      };
    });
  }
}
