import firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyBnxJg8P6krqEe8bdT1GqF1wsIyNu8TN9s",
    authDomain: "foro-erp.firebaseapp.com",
    databaseURL: "https://foro-erp.firebaseio.com",
    projectId: "foro-erp",
    storageBucket: "foro-erp.appspot.com",
    messagingSenderId: "368206466445",
    appId: "1:368206466445:web:55d62efe96a64683ec01c4",
    measurementId: "G-GTGNZ8SLKK"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  

let db = firebase.firestore();
export default db;
