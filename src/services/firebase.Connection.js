import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyBhi0KgVMCdHWeQgAHsSTrTjysf1hQdlKg",
    authDomain: "task-c2830.firebaseapp.com",
    projectId: "task-c2830",
    storageBucket: "task-c2830.appspot.com",
    messagingSenderId: "1068167871602",
    appId: "1:1068167871602:web:9dec6bfbde7bfe013c16eb"
  };

const app = initializeApp(firebaseConfig);



export const db = getFirestore(app);

