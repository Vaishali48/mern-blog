import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getEnv } from "./getEnv.js";

const firebaseConfig = {
  apiKey: getEnv('VITE_FIREBASE_API'),
  authDomain: "blog-app-9e764.firebaseapp.com",
  projectId: "blog-app-9e764",
  storageBucket: "blog-app-9e764.firebasestorage.app",
  messagingSenderId: "63255645168",
  appId: "1:63255645168:web:62bffc96c3e23fa417ab35",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };