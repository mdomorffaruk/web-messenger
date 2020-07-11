import firebase from "firebase";


const firbaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBO3jcJWmedziX4Fz7fV6UVAizAP2Nv07E",
  authDomain: "web-messenger-ddd68.firebaseapp.com",
  databaseURL: "https://web-messenger-ddd68.firebaseio.com",
  projectId: "web-messenger-ddd68",
  storageBucket: "web-messenger-ddd68.appspot.com",
  messagingSenderId: "862735266122",
  appId: "1:862735266122:web:bd60d70bb3f5779deb91b3",
  measurementId: "G-GDFHEJWJ54"

});

const db = firebase.firestore();
export default db;
    
