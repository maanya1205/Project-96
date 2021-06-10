// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAnDLbxkd9TGf_MfjyrW07OD4-TVA5vzUk",
  authDomain: "project93kwitter.firebaseapp.com",
  databaseURL: "https://project93kwitter-default-rtdb.firebaseio.com",
  projectId: "project93kwitter",
  storageBucket: "project93kwitter.appspot.com",
  messagingSenderId: "845379590468",
  appId: "1:845379590468:web:57ffe206d806df3b299f11"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  function addUser(){
    user_name= document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose:"adding user"
    });
}