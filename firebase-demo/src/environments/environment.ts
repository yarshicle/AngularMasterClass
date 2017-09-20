// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyAPpdvtjhTyiJiJEs0WyTb53xoCxVQjglM',
    authDomain: 'angfbdemo.firebaseapp.com',
    databaseURL: 'https://angfbdemo.firebaseio.com',
    projectId: 'angfbdemo',
    storageBucket: 'angfbdemo.appspot.com',
    messagingSenderId: '848423918027'
  }
};
