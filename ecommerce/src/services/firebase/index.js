
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBwKK413fpfViyQKUsaABpcF-pjv7iKcn8",
  authDomain: "proyectofinalcoderreact.firebaseapp.com",
  projectId: "proyectofinalcoderreact",
  storageBucket: "proyectofinalcoderreact.firebasestorage.app",
  messagingSenderId: "937786534388",
  appId: "1:937786534388:web:79bac9d015a7f09ba431a1"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

