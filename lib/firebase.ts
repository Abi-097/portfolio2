import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
// };
const firebaseConfig = {
  apiKey: "AIzaSyCjrfpPw5D8xpsm6YpO7ZP9ZvWSNclsTms",
  authDomain: "portfolio-view-tracker.firebaseapp.com",
  projectId: "portfolio-view-tracker",
  storageBucket: "portfolio-view-tracker.firebasestorage.app",
  messagingSenderId: "88333570206",
  appId: "1:88333570206:web:a4e893425edfaa1b77eb8f",
  measurementId: "G-X13F37W4QV",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
