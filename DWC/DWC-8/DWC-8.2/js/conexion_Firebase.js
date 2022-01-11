"use strict";
//*** Enlace a las bibliotecas Firebase -> https://firebase.google.com/docs/web/learn-more?authuser=0#libraries-cdn

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyC7XNhZSz1ZxlvPpH1ypNJ3cp63C-V3pVM",

  authDomain: "productos-566b7.firebaseapp.com",

  projectId: "productos-566b7",

  storageBucket: "productos-566b7.appspot.com",

  messagingSenderId: "167973263940",

  appId: "1:167973263940:web:933ef4af6f790802d9fa11",
};

const app = initializeApp(firebaseConfig);

export { app };
