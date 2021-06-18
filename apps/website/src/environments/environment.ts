import { firebaseConfig } from './firebase.config';

export const environment = {
  production: false,
  firebase: {
    ...firebaseConfig,
    databaseURL: 'http://localhost:9000?ns=tyrcord-816d7',
    ssl: false,
  },
};
