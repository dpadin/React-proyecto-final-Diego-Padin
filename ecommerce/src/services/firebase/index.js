
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDeoP3pK5OyaWusyQEhmrqNPn6sPmDGZCI",
  authDomain: "proyectofinalcoderreact-dc554.firebaseapp.com",
  projectId: "proyectofinalcoderreact-dc554",
  storageBucket: "proyectofinalcoderreact-dc554.firebasestorage.app",
  messagingSenderId: "889667288396",
  appId: "1:889667288396:web:2e1488c4d55781e0dc23e9",
  measurementId: "G-0YTS84EN4F"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

