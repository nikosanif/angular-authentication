import { HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';

import { USERS } from './db.data';

type RequestHandlers = Record<string, Record<string, () => HttpResponse<unknown>>>;

export class FakeApi {
  private usersDB = new UsersDB();

  constructor(private request: HttpRequest<Record<string, unknown>>) {}

  handleRequest(): Observable<HttpResponse<unknown>> {
    const requestsMapHandlers: RequestHandlers = {
      POST: {
        '/api/auth/login': () => this.handleLogin(),
      },
      GET: {
        '/api/auth/logout': () => this.handleLogout(),
        '/api/users/me': () => this.handleMe(),
      },
    };

    const { method, url } = this.request;
    const handler = requestsMapHandlers[method][url];

    if (handler) {
      const response = handler();
      return response.status < 400 ? of(response) : throwError(() => response);
    }

    return throwError(() => this.respond400Error(`Cannot ${method} ${url}`));
  }

  private handleLogin(): HttpResponse<unknown> {
    const { body } = this.request;
    if (!body) return this.respond400Error();

    // validate grant type
    const grantType = body['grant_type'];
    if (!grantType) return this.respond400Error('Grant type is missing');

    if (grantType === 'password') {
      return this.handleLoginPassword(body);
    } else if (grantType === 'refresh_token') {
      return this.handleLoginRefreshToken(body);
    }

    return this.respond400Error('Grant type is incorrect');
  }

  private handleLoginPassword(body: Record<string, unknown>): HttpResponse<unknown> {
    // handle login for password grant type
    const { username, password } = body;
    if (!username || !password) {
      return this.respond400Error('Username or password is missing');
    }

    const user = this.usersDB.findByUsernameAndPassword(
      username as string,
      password as string
    );

    if (!user) return this.respond400Error('Username or password is incorrect');

    return this.respondSuccess({
      token_type: 'Bearer',
      expires_in: 86399,
      access_token: user.accessToken,
      refresh_token: user.refreshToken,
    });
  }

  private handleLoginRefreshToken(body: Record<string, unknown>): HttpResponse<unknown> {
    // handle login for refresh token grant type
    const refreshToken = body['refresh_token'];
    if (!refreshToken) return this.respond400Error('Refresh token is missing');

    const user = this.usersDB.findByRefreshToken(refreshToken as string);
    if (!user) return this.respond400Error('Refresh token is incorrect');

    return this.respondSuccess({
      token_type: 'Bearer',
      expires_in: 86399,
      access_token: user.accessToken,
      refresh_token: user.refreshToken,
    });
  }

  private handleMe(): HttpResponse<unknown> {
    const { headers } = this.request;
    const accessToken = headers.get('Authorization')?.split(' ')[1];
    if (!accessToken) return this.respond400Error('Access token is missing');

    const user = this.usersDB.findByAccessToken(accessToken);
    if (!user) return this.respond400Error('Access token is incorrect');

    return this.respondSuccess({
      id: user.id,
      username: user.username,
      firstName: user.firstName,
      lastName: user.lastName,
    });
  }

  private handleLogout(): HttpResponse<unknown> {
    return this.respondSuccess({});
  }

  private respondSuccess(body: unknown): HttpResponse<unknown> {
    const { headers, url } = this.request;
    return new HttpResponse({ status: 200, headers, url, body });
  }

  private respond400Error(message = 'Bad request'): HttpResponse<unknown> {
    return new HttpResponse({
      status: 400,
      body: { message },
    });
  }
}

class UsersDB {
  findAll() {
    return USERS;
  }

  findByUsernameAndPassword(username: string, password: string) {
    return this.findAll().find(
      user => user.username === username && user.password === password
    );
  }

  findByAccessToken(accessToken: string) {
    return this.findAll().find(user => user.accessToken === accessToken);
  }

  findByRefreshToken(refreshToken: string) {
    return this.findAll().find(user => user.refreshToken === refreshToken);
  }
}
