import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyBsQ8IWKR6gHAHOaecGCjVzi8OxfMttoNI",
    authDomain: "meesho-clone.firebaseapp.com",
    projectId: "meesho-clone",
    storageBucket: "meesho-clone.appspot.com",
    messagingSenderId: "646967374595",
    appId: "1:646967374595:web:a36abdcfe187a1ad872f36"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
  export default app;
