// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase  : {
    apiKey: "AIzaSyB24hugQRwstaJEztdPMONC5DsqEkXLb_M",
    authDomain: "angular5crud-c10ad.firebaseapp.com",
    databaseURL: "https://angular5crud-c10ad.firebaseio.com",
    projectId: "angular5crud-c10ad",
    storageBucket: "angular5crud-c10ad.appspot.com",
    messagingSenderId: "351704291681"
  }
};
