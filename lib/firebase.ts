"use client";

import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCjrfpPw5D8xpsm6YpO7ZP9ZvWSNclsTms",
  authDomain: "portfolio-view-tracker.firebaseapp.com",
  projectId: "portfolio-view-tracker",
  storageBucket: "portfolio-view-tracker.firebasestorage.app",
  messagingSenderId: "88333570206",
  appId: "1:88333570206:web:a4e893425edfaa1b77eb8f",
  measurementId: "G-X13F37W4QV",
};

const app =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
export const db = getFirestore(app);
