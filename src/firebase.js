// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";



const firebaseConfig = {
  apiKey: "AIzaSyBiM6u5g4LIAIMK6v_PPR2ICnje1KOSnNo",
  authDomain: "mockup--pro.firebaseapp.com",
  projectId: "mockup--pro",
  storageBucket: "mockup--pro.appspot.com",
  messagingSenderId: "5272861249",
  appId: "1:5272861249:web:42d041788428e3ed7fa4c0",
  measurementId: "G-JJZNMCML72",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storge = getStorage(app)
