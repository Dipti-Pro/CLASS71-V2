import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
apiKey: "AIzaSyBhRN-AQ19DPV40RxqfLXf2W4_ausXjz0I",
    authDomain: "willy-app-2b683.firebaseapp.com",
    databaseURL: "https://willy-app-2b683-default-rtdb.firebaseio.com",
    projectId: "willy-app-2b683",
    storageBucket: "willy-app-2b683.appspot.com",
    messagingSenderId: "952450858838",
    appId: "1:952450858838:web:2cbf859bb6502ee1baa0f7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
