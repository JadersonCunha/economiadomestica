import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBtSaQehnbxntlWQP2ZaFW3tCRjpPA44mg",
  authDomain: "economiadomestica-777e6.firebaseapp.com",
  projectId: "economiadomestica-777e6",
  storageBucket: "economiadomestica-777e6.firebasestorage.app",
  messagingSenderId: "303544007257",
  appId: "1:303544007257:web:8ee4eb4d05f1f22884cf48"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();