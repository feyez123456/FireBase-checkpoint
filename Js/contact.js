var config = {
    apiKey: "AIzaSyA479dbgmq3NHcHzAi0KS5tGGQAbFrj9eo",
    authDomain: "projet-test-cc9b5.firebaseapp.com",
    databaseURL: "https://projet-test-cc9b5.firebaseio.com",
    projectId: "projet-test-cc9b5",
    storageBucket: "projet-test-cc9b5.appspot.com",
    messagingSenderId: "895130203828"
  };
  firebase.initializeApp(config);
 

var messagesRef = firebase.database().ref('messages');
function getInputVal(id){
  return document.getElementById(id).value;
}
document.getElementById('contactForm').addEventListener ('submit', submitForm);
function submitForm(e){
    e.preventDefault();

    var name = getInputVal('name');
 
    var email = getInputVal('email');
    var password = getInputVal('password');
    var message = getInputVal('message');
    saveMessage(name,email, password, message);
    document.getElementById('contactForm').reset();
  
}

function saveMessage(name,email,password,message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name:name,
    email:email,   
    password:password,
    message:message,
  });
}


// Show alert
document.querySelector('.alert').style.display = 'block';
// Hide alert after 3 seconds
setTimeout(function(){
  document.querySelector('.alert').style.display = 'none';
},3000);

