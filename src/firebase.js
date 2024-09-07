// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAwKxiZW7rKooHmD_8PavOFz_2QZ4VwXZY",
    authDomain: "saferoutes-argam.firebaseapp.com",
    projectId: "saferoutes-argam",
    storageBucket: "saferoutes-argam.appspot.com",
    messagingSenderId: "126472726020",
    appId: "1:126472726020:web:aea13625fff9df56257751"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Initialize Firebase Authentication
const auth = getAuth(app);

// Initialize Firebase Storage
const storage = getStorage(app);

export { db, auth, storage };
