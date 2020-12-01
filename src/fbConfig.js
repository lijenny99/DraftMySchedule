require("firebase/auth")
const firebase = require('firebase')
var admin = require("firebase-admin");
var serviceAccount = require("./se3316-lab5-a1775-firebase-adminsdk-nrj3d-4427df34bf.json");

const firebaseConfig = {
    apiKey: "AIzaSyB72rXHZQusPEFcgpxSl6wMLzWTKxpAUqk",
    authDomain: "se3316-lab5-a1775.firebaseapp.com",
    databaseURL: "https://se3316-lab5-a1775.firebaseio.com",
    projectId: "se3316-lab5-a1775",
    storageBucket: "se3316-lab5-a1775.appspot.com",
    messagingSenderId: "386528497172",
    appId: "1:386528497172:web:49eac83ef0f13aa2e42101"
  };

  firebase.initializeApp(firebaseConfig)
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://se3316-lab5-a1775.firebaseio.com"
});

module.exports = {firebase, admin}