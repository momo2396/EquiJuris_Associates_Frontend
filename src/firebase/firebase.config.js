// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCoOV39r56NjOgE2GmcOMnOPXgvNsbC3ZU",
  authDomain: "equijuris-associates.firebaseapp.com",
  projectId: "equijuris-associates",
  storageBucket: "equijuris-associates.appspot.com",
  messagingSenderId: "722800124032",
  appId: "1:722800124032:web:c2564508fca46802f1c665"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;

