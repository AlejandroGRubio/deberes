"use strict";


import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";


const firebaseConfig = {

    apiKey: "AIzaSyA9RcJtMWM2pEzdvqNvG7hfrRW9BCrobQU",

    authDomain: "practica6-01-7d545.firebaseapp.com",

    projectId: "practica6-01-7d545",

    storageBucket: "practica6-01-7d545.appspot.com",

    messagingSenderId: "440379813706",

    appId: "1:440379813706:web:0be588cb8cacf5e8811bb3",

    measurementId: "G-X2BF1NXP0T"

  };


  const app = initializeApp(firebaseConfig);


  export { app };