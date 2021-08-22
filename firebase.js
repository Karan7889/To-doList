var firebaseConfig = {
    apiKey: "AIzaSyBadAyI-ds10CzONkzjdf50VhWAtO8Y5g0",
    authDomain: "to-do-list-68d66.firebaseapp.com",
    projectId: "to-do-list-68d66",
    storageBucket: "to-do-list-68d66.appspot.com",
    messagingSenderId: "124934259281",
    appId: "1:124934259281:web:33c39efbf1bd173a22ee70",
    measurementId: "G-LYHSKBL9P2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  var db = firebase.firestore();