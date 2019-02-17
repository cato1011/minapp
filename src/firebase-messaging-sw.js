importScripts('https://www.gstatic.com/firebasejs/5.5.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/5.5.0/firebase-messaging.js');


if(firebase.messaging.isSupported())
{
  var config = {
  
    messagingSenderId: "429056293943"
  
};


firebase.initializeApp(config);
 const messaging = firebase.messaging();
}