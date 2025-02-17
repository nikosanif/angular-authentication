export class Login {
  static readonly type = '[Auth] Login';

  constructor(
    public username: string,
    public password: string
  ) {}
}

export class Logout {
  static readonly type = '[Auth] Logout';
}

export class FetchAuthUser {
  static readonly type = '[Auth] Fetch Auth User';
}

export class RefreshToken {
  static readonly type = '[Auth] Refresh Token';
}
