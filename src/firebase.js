import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDMLuV_lP5dtIbPpHwuAF71wiKAqm-vB-Y",
    authDomain: "task-manager-581a9.firebaseapp.com",
    projectId: "task-manager-581a9",
    storageBucket: "task-manager-581a9.appspot.com",
    messagingSenderId: "628269617669",
    appId: "1:628269617669:web:525f1ba6e54a63e573026c",
    measurementId: "G-2H954QSKY4"
  };
  

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const firestore = getFirestore(app);
