import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD78Ygmt-K6dsWgFvAJqTsd-x1xOmKv4gE",
  authDomain: "auth-1399c.firebaseapp.com",
  projectId: "auth-1399c",
  storageBucket: "auth-1399c.firebasestorage.app",
  messagingSenderId: "339892520612",
  appId: "1:339892520612:web:13e3fa0111c982b353c831",
  measurementId: "G-88DE110S20"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
