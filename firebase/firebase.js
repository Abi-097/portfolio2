import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics, isSupported } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjrfpPw5D8xpsm6YpO7ZP9ZvWSNclsTms",
  authDomain: "portfolio-view-tracker.firebaseapp.com",
  projectId: "portfolio-view-tracker",
  storageBucket: "portfolio-view-tracker.firebasestorage.app",
  messagingSenderId: "88333570206",
  appId: "1:88333570206:web:a4e893425edfaa1b77eb8f",
  measurementId: "G-X13F37W4QV",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const db = getFirestore(app);
// export { db };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Conditionally initialize Analytics
let analytics;
isSupported()
  .then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  })
  .catch((err) => {
    console.warn("Analytics not supported:", err);
  });
export { db };
