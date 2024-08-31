import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "react-chat-app-47f19.firebaseapp.com",
  projectId: "react-chat-app-47f19",
  storageBucket: "react-chat-app-47f19.appspot.com",
  messagingSenderId: "477230604254",
  appId: "1:477230604254:web:e272452f048eef338b874f"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()