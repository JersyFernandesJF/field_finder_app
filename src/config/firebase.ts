// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAy4STor0KtK5zXLNcAjWWi_CsIvW5bfSo",
  authDomain: "fieldfinder-583a6.firebaseapp.com",
  projectId: "fieldfinder-583a6",
  storageBucket: "fieldfinder-583a6.appspot.com",
  messagingSenderId: "566239938402",
  appId: "1:566239938402:web:15369384ca6a12e9be4e3b",
  measurementId: "G-ZRVGG0HD3F"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);