// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const { version } = require('../../package.json');

export const environment = {
  production: false,
  appVersion: `${version}-dev`,
  // TODO: explain why it's empty
  apiUrl: '', // <Your auth server API URL here>
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

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
