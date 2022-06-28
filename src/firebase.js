// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWtCIjSCqlL_euXp3_0lnyYhfyjcKhJsw",
  authDomain: "registrationform-b5171.firebaseapp.com",
  projectId: "registrationform-b5171",
  storageBucket: "registrationform-b5171.appspot.com",
  messagingSenderId: "813406538993",
  appId: "1:813406538993:web:af6611fc968cd5a7402d50",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
