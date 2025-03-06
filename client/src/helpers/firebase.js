import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { initializeApp } from "firebase/app";
import { getEvn } from "./getEnv";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCBPb08hR-R_hPEQHt177L7obilRCSWTTM",
  authDomain: "mern-blog-7446f.firebaseapp.com",
  projectId: "mern-blog-7446f",
  storageBucket: "mern-blog-7446f.firebasestorage.app",
  messagingSenderId: "960784578864",
  appId: "1:960784578864:web:9d250bc8ab5324cb3ab0f5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export { auth, provider }

