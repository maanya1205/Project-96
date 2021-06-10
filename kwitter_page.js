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

  user_name= localStorage.getItem("user_name");
room_name= localStorage.getItem("room_name");

function send(){
      msg= document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value= "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
