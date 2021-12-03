const firebaseConfig = {
      apiKey: "AIzaSyBM0Dfdv2ti_mWyI82KwplGuTnAT3SfF0g",
      authDomain: "kitter-29265.firebaseapp.com",
      databaseURL: "https://kitter-29265-default-rtdb.firebaseio.com",
      projectId: "kitter-29265",
      storageBucket: "kitter-29265.appspot.com",
      messagingSenderId: "102170593149",
      appId: "1:102170593149:web:e9cf83f06684aeff2d2e14"
    };

     firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
