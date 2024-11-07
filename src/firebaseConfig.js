// src/firebaseConfig.js

// Importation de Firebase
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'; // Pour Firestore
import { getDatabase } from 'firebase/database'; // Pour Realtime Database
import { getAuth } from 'firebase/auth'; // Pour l'authentification

// Votre configuration Firebase (copiée depuis Firebase Console)
const firebaseConfig = {
  apiKey: "AIzaSyCx0gP0no3Fq4V21bDxXgia7tprQ0_eUBg",
  authDomain: "dailyroutenc.firebaseapp.com",
  projectId: "dailyroutenc",
  storageBucket: "dailyroutenc.firebasestorage.app",
  messagingSenderId: "1013779718441",
  appId: "1:1013779718441:web:1da95b0040a880b336d738",
  measurementId: "G-SEEYYW8MXE"
};

// Initialisation de Firebase
const app = initializeApp(firebaseConfig);

// Initialisation de Firestore
const db = getFirestore(app);

// Initialisation de Realtime Database (facultatif, si vous utilisez la Realtime Database)
const realtimeDb = getDatabase(app);

// Initialisation de l'authentification
const auth = getAuth(app);

export { db, realtimeDb, auth };
