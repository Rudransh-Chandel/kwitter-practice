var firebaseConfig = {
    apiKey: "AIzaSyCaOuQ4ZcfyscQaL__figgWd9d_hXL4kuI",
    authDomain: "kwitter-d5d36.firebaseapp.com",
    databaseURL: "https://kwitter-d5d36-default-rtdb.firebaseio.com",
    projectId: "kwitter-d5d36",
    storageBucket: "kwitter-d5d36.appspot.com",
    messagingSenderId: "125345105419",
    appId: "1:125345105419:web:778c8283b8f6650f18a90e",
    measurementId: "G-GQSQTGCS54"
  };
  
  // Initialize Firebase

 firebase.initializeApp(firebaseConfig);

 function addUser()
 {
user_name = document.getElementById("user_name").value;
firebase.database().ref("/").child(user_name).update({
   key:"Hello This is an example" 
});

 }
 