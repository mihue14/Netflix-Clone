import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAJykaJcPvdp5sNDNagEiBmQyWTn4_h0lw",
    authDomain: "netflix-clone-c2a27.firebaseapp.com",
    projectId: "netflix-clone-c2a27",
    storageBucket: "netflix-clone-c2a27.appspot.com",
    messagingSenderId: "196557587147",
    appId: "1:196557587147:web:b2984ba27957285b48514e"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();

  export {auth};

  

