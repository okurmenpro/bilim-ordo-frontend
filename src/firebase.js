import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAS5W7l1c58tSsGDidjMa5k0XGcBl2YFc4",
  authDomain: "front-end-bilim.firebaseapp.com",
  projectId: "front-end-bilim",
  storageBucket: "front-end-bilim.firebasestorage.app",
  messagingSenderId: "42371047076",
  appId: "1:42371047076:web:a1da97aa7a7fc7211dd031",
  measurementId: "G-TWC2Z0L82S",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
