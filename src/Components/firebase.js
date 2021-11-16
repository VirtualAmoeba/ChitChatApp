
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseApp = initializeApp( {
    apiKey: "AIzaSyDo1M-uNT8NXVuLDxEc5MHa2mvxZiyf_lQ",
    authDomain: "chit-chat-a0691.firebaseapp.com",
    projectId: "chit-chat-a0691",
    storageBucket: "chit-chat-a0691.appspot.com",
    messagingSenderId: "980241232083",
    appId: "1:980241232083:web:54490f9083438e9ef02426",
    measurementId: "G-BBVE2T2F7V"
  });

  const db = getFirestore()


export default  { db }