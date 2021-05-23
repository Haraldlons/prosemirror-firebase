// // Firebase App (the core Firebase SDK) is always required and must be listed first
// import firebase from "firebase/app";
// // If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// // import * as firebase from "firebase/app"

// // If you enabled Analytics in your project, add the Firebase SDK for Analytics
// // import "firebase/analytics";

// // Add the Firebase products that you want to use
// // import "firebase/auth";
// import "firebase/database";
// var firebaseConfig = {
//     apiKey: "AIzaSyAbfDp46WMNClP8aIlLHUPmobIlH9CAQrg",
//     authDomain: "prosemirror-firebase.firebaseapp.com",
//     projectId: "prosemirror-firebase",
//     storageBucket: "prosemirror-firebase.appspot.com",
//     messagingSenderId: "1017356291330",
//     appId: "1:1017356291330:web:65d656b7257434842c061b",
//     measurementId: "G-G85R4S1QVF"
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// // firebase.analytics();
// const database = firebase.database;

// export default database;
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';
import 'firebase/functions';

var firebaseConfig = {
    apiKey: "AIzaSyAbfDp46WMNClP8aIlLHUPmobIlH9CAQrg",
    authDomain: "prosemirror-firebase.firebaseapp.com",
    databaseURL: "https://prosemirror-firebase-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "prosemirror-firebase",
    storageBucket: "prosemirror-firebase.appspot.com",
    messagingSenderId: "1017356291330",
    appId: "1:1017356291330:web:65d656b7257434842c061b",
    measurementId: "G-G85R4S1QVF"
  };
let app;
if (!firebase.apps.length) {
  app = firebase.initializeApp(firebaseConfig)
}

// export const { auth, functions, firestore } = firebase;
// export const firestore = firebase.firestore();
export const database = firebase.database();
// database.ref('text').get().then((data) => {
//   console.log(data.val())
// })
// export const functions = firebase.functions();
export default firebase;
