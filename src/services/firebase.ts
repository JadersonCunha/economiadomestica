import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY || "AIzaSyBtSaQehnbxntlWQP2ZaFW3tCRjpPA44mg",
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN || "economiadomestica-777e6.firebaseapp.com",
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID || "economiadomestica-777e6",
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET || "economiadomestica-777e6.firebasestorage.app",
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID || "303544007257",
  appId: process.env.REACT_APP_FIREBASE_APP_ID || "1:303544007257:web:8ee4eb4d05f1f22884cf48"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();

// Configurar para sempre mostrar seleção de contas
googleProvider.setCustomParameters({
  prompt: 'select_account'
});