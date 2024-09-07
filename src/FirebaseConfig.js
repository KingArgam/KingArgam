// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAwKxiZW7rKooHmD_8PavOFz_2QZ4VwXZY",
  authDomain: "saferoutes-argam.firebaseapp.com",
  projectId: "saferoutes-argam",
  storageBucket: "saferoutes-argam.appspot.com",
  messagingSenderId: "126472726020",
  appId: "1:126472726020:web:aea13625fff9df56257751"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
