import firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBvbPDCNfYz3vnvmKWeAj2ajrTC2pBdaNw",
  authDomain: "vue-rtc-a909c.firebaseapp.com",
  databaseURL: "https://vue-rtc-a909c.firebaseio.com",
  projectId: "vue-rtc-a909c",
  storageBucket: "vue-rtc-a909c.appspot.com",
  messagingSenderId: "871302723500",
  appId: "1:871302723500:web:ae644a2857d7cd3fa12c09",
  measurementId: "G-T5B58EFSFP"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

// firebaseApp.firestore.settings({ timestampsInSnapshots: true });

console.log(firebaseApp.firestore());

export default firebaseApp.firestore();
