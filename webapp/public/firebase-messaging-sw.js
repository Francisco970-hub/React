// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
// eslint-disable-next-line
importScripts("https://www.gstatic.com/firebasejs/8.6.7/firebase-app.js");
// eslint-disable-next-line
importScripts("https://www.gstatic.com/firebasejs/8.6.7/firebase-messaging.js");

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
// eslint-disable-next-line
firebase.initializeApp({
    apiKey: "AIzaSyCu7r3TlqiiI_3HTJft_G-SSC8_*******",
    authDomain: "logrocket-pub-sub.firebaseapp.com",
    projectId: "logrocket-pub-sub",
    storageBucket: "logrocket-pub-sub.appspot.com",
    messagingSenderId: "*************",
    appId: "1:709132711133:web:***********************",
    measurementId: "G-*********",
  });
  

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
// eslint-disable-next-line
const messaging = firebase.messaging();

messaging.onBackgroundMessage((message) => {
  // eslint-disable-next-line no-restricted-globals
  /*return self.showNotification(
    message.notification.title,
    message.notification*/

    const fcmChannel = new BroadcastChannel("fcm-channel");
    fcmChannel.postMessage(message);
  ;
});