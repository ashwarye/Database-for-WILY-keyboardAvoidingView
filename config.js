import * as firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyD4YZo8p08N7R4Tg2Zug76w3pEs8Bzaur4",
  authDomain: "library-app-38481.firebaseapp.com",
  databaseURL: "https://library-app-38481.firebaseio.com",
  projectId: "library-app-38481",
  storageBucket: "library-app-38481.appspot.com",
  messagingSenderId: "274560639662",
  appId: "1:274560639662:web:81dd7e10b831daaa74c33f",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
