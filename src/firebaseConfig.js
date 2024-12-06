// src/firebaseConfig.js
import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

// Votre configuration Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCx0gP0no3Fq4V21bDxXgia7tprQ0_eUBg",
  authDomain: "dailyroutenc.firebaseapp.com",
  projectId: "dailyroutenc",
  storageBucket: "dailyroutenc.firebasestorage.app",
  messagingSenderId: "1013779718441",
  appId: "1:1013779718441:web:1da95b0040a880b336d738",
  measurementId: "G-SEEYYW8MXE"
};

// Vérifiez si une app Firebase existe déjà
const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];

// Initialisation des services Firebase
const db = getFirestore(app);
const realtimeDb = getDatabase(app);
const auth = getAuth(app);

export { db, realtimeDb, auth };