export interface User {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  accessToken: string;
  refreshToken: string;
}

export const USERS: User[] = [
  {
    id: 1,
    firstName: 'Admin',
    lastName: 'Demo',
    username: 'admin',
    password: 'demo',
    accessToken: 'valid-jwt-access-token-1',
    refreshToken: 'valid-jwt-refresh-token-1',
  },
  {
    id: 2,
    firstName: 'Nikos',
    lastName: 'Anifantis',
    username: 'nikos',
    password: '1234',
    accessToken: 'valid-jwt-access-token-2',
    refreshToken: 'valid-jwt-refresh-token-2',
  },
  {
    id: 3,
    firstName: 'John',
    lastName: 'Doe',
    username: 'john',
    password: '4321',
    accessToken: 'valid-jwt-access-token-3',
    refreshToken: 'valid-jwt-refresh-token-3',
  },
];
