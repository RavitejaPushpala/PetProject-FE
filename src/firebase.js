// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAh7LkHfR8--nNbWKngO1WOv-DZM4Wc8Ec",
  authDomain: "fooddelivery-auth.firebaseapp.com",
  projectId: "fooddelivery-auth",
  storageBucket: "fooddelivery-auth.appspot.com",
  messagingSenderId: "878728091760",
  appId: "1:878728091760:web:3e9be00f95ea04e9c67cb5",
  measurementId: "G-LKVQM2F7M8"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();
export { app, auth };