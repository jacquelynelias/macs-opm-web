import * as firebase from 'firebase';

const prodConfig = {
  apiKey: "AIzaSyD4bTE3jno3u56ceOufY2D8c7g5crdesgU",
    authDomain: "macsplace-96608.firebaseapp.com",
    databaseURL: "https://macsplace-96608.firebaseio.com",
    projectId: "macsplace-96608",
    storageBucket: "",
    messagingSenderId: "400022262402"
};

const devConfig = {
  apiKey: "AIzaSyD4bTE3jno3u56ceOufY2D8c7g5crdesgU",
    authDomain: "macsplace-96608.firebaseapp.com",
    databaseURL: "https://macsplace-96608.firebaseio.com",
    projectId: "macsplace-96608",
    storageBucket: "",
    messagingSenderId: "400022262402"
};

const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export {
  db,
  auth,
};
