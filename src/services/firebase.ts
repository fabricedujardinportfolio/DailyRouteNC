import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyDrRaDCRBCdjKDO8PzFDDpWqXSmBvj8zBA",
  authDomain: "dailyroutenc.firebaseapp.com",
  databaseURL: "https://dailyroutenc-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "dailyroutenc",
  storageBucket: "dailyroutenc.firebasestorage.app",
  messagingSenderId: "1013779718441",
  appId: "1:1013779718441:android:dfcb25a4b8b00c7036d738"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);

export default app;