var firebaseConfig = {
    apiKey: "AIzaSyDgVXOLSbjJm2szi8VF9jTt4IIxJDCWkP4",
    authDomain: "covid-a89ef.firebaseapp.com",
    projectId: "covid-a89ef",
    storageBucket: "covid-a89ef.appspot.com",
    messagingSenderId: "724605475091",
    appId: "1:724605475091:web:4fc1054933cb5d9f5362e6"
  };
  
firebase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
  firebase_message_id = childKey;
  message_data = childData;
} });  }); }

getData();

function send()
{
  msg=document.getElementById("msg").value
  firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
  })
  document.getElementById("msg").value=""
}

user_name=localStorage.getItem("user_name")

    document.getElementById("user_name").innerHTML="welcome "+user_name



function logout()
{
      localStorage.removeItem("user_name")
      window.location="login.html"
}
