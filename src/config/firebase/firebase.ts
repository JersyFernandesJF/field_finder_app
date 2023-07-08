import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAy4STor0KtK5zXLNcAjWWi_CsIvW5bfSo",
  authDomain: "fieldfinder-583a6.firebaseapp.com",
  databaseURL: "https://fieldfinder-583a6-default-rtdb.firebaseio.com",
  projectId: "fieldfinder-583a6",
  storageBucket: "fieldfinder-583a6.appspot.com",
  messagingSenderId: "566239938402",
  appId: "1:566239938402:web:15369384ca6a12e9be4e3b",
  measurementId: "G-ZRVGG0HD3F", 
};

// Initialize Firebase
export const ClientID = '466030022998-momsc4ar4asc4hpu75on5934tfum2m18.apps.googleusercontent.com'
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);
