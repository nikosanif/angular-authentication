// eslint-disable-next-line @typescript-eslint/no-var-requires
const { version } = require('../../package.json');

export const environment = {
  production: false,
  appVersion: `${version}-dev`,

  // Replace this with your server API URL
  // We assigned it to empty string for the Fake API
  apiUrl: '',

  settings: {
    auth: {
      // OAuth2 credentials
      clientId: 'fake-client-id', // <Your auth client id here>
      secretId: 'fake-secret-id', // <Your auth secret id here>

      // keys to store tokens at local storage
      accessTokenKey: 'DoPS3ZrQjM',
      refreshTokenKey: 'nmlP8PW2nb',
    },
  },
};
