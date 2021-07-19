import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyAF1tLoyQgnb63rdvcnfcckBNI_sQqlWQY",
  authDomain: "book-santa-20867.firebaseapp.com",
  databaseURL: "https://book-santa-20867.firebaseio.com",
  projectId: "book-santa-20867",
  storageBucket: "book-santa-20867.appspot.com",
  messagingSenderId: "366061247947",
  appId: "1:366061247947:web:ba86c6ddd47f92c3f1aa4e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();