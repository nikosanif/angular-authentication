const { version } = require('../../package.json');

export const environment = {
  production: true,
  appVersion: version,
  apiUrl: '<Your auth server API URL here>',
  settings: {
    auth: {
      clientId: '<Your auth client id here>',
      secretId: '<Your auth secret id here>',
      // keys to store tokens at local storage
      accessTokenKey: 'DoPS3ZrQjM',
      refreshTokenKey: 'nmlP8PW2nb',
    },
  },
};
