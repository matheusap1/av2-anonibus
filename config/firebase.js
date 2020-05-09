import firebase from 'firebase';
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDtgGxu-C0snOjYTYmS-ehYAqciK1OAviw",
    authDomain: "av2-anonibus.firebaseapp.com",
    databaseURL: "https://av2-anonibus.firebaseio.com",
    projectId: "av2-anonibus",
    storageBucket: "av2-anonibus.appspot.com",
    messagingSenderId: "222093467277",
    appId: "1:222093467277:web:8960bef87c83463b264cc4"
  };

  export default !firebase.apps.length ?
  firebase.initializeApp(firebaseConfig) : firebase.app();