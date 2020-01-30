import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
var firebaseConfig = {
    apiKey: "AIzaSyDtMVcRSHqcIdQ5bIGwkoy3-piEcwZ3GqE",
    authDomain: "afidf-eda58.firebaseapp.com",
    databaseURL: "https://afidf-eda58.firebaseio.com",
    projectId: "afidf-eda58",
    storageBucket: "afidf-eda58.appspot.com",
    messagingSenderId: "798066483143",
    appId: "1:798066483143:web:ecac7cedfc48b6838d83e2",
    measurementId: "G-VR9695B0KH"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots: true });

  export default firebase
