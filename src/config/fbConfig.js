import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Replace this with your own config details
var config = {
  apiKey: "AIzaSyCFDEtdF83GNR62uCE-5y1Wcrs2PaJ-wT8",
  authDomain: "house-pro-call.firebaseapp.com",
  databaseURL: "https://house-pro-call.firebaseio.com",
  projectId: "house-pro-call",
  storageBucket: "house-pro-call.appspot.com",
  messagingSenderId: "835553501149"
};
firebase.initializeApp(config);
firebase.firestore();

export default firebase 