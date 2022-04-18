importScripts('https://www.gstatic.com/firebasejs/7.6.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.6.0/firebase-messaging.js');

firebase.initializeApp({
//     apiKey: "from firebase config",
//  authDomain: "from firebase config",
//  databaseURL: "from firebase config",
//  projectId: "from firebase config",
//  storageBucket: "from firebase config",
//  messagingSenderId: "from firebase config",
//  appId: "from firebase config",
//  measurementId: "from firebase config"

 apiKey: "AIzaSyAwBY7Tpre6JmyJgqLz017fD_RupuCAWXk",
  authDomain: "fir-bc3d8.firebaseapp.com",
  databaseURL: "https://fir-bc3d8-default-rtdb.firebaseio.com",
  projectId: "fir-bc3d8",
  storageBucket: "fir-bc3d8.appspot.com",
  messagingSenderId: "189225874730",
  appId: "1:189225874730:web:ebbe4f150240cd456bda53",
  measurementId: "G-89EM021ND2"
});

const messaging = firebase.messaging();
