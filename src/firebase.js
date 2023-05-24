import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBiM6u5g4LIAIMK6v_PPR2ICnje1KOSnNo",
  authDomain: "mockup--pro.firebaseapp.com",
  projectId: "mockup--pro",
  storageBucket: "mockup--pro.appspot.com",
  messagingSenderId: "5272861249",
  appId: "1:5272861249:web:42d041788428e3ed7fa4c0",
  measurementId: "G-JJZNMCML72"
};

const app = initializeApp(firebaseConfig);

export default app;