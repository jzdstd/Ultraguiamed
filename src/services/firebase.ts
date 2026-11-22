import { initializeApp, getApps, getApp, type FirebaseApp } from 'firebase/app';
import {
  getAuth,
  setPersistence,
  browserSessionPersistence,
  type Auth,
} from 'firebase/auth';
import { getFirestore, type Firestore } from 'firebase/firestore';

const apiKey = import.meta.env.VITE_FIREBASE_API_KEY?.trim() || '';
const authDomain = import.meta.env.VITE_FIREBASE_AUTH_DOMAIN?.trim() || '';
const projectId = import.meta.env.VITE_FIREBASE_PROJECT_ID?.trim() || '';
const storageBucket = import.meta.env.VITE_FIREBASE_STORAGE_BUCKET?.trim() || '';
const messagingSenderId = import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID?.trim() || '';
const appId = import.meta.env.VITE_FIREBASE_APP_ID?.trim() || '';

const firebaseConfig = {
  apiKey,
  authDomain,
  projectId,
  ...(storageBucket ? { storageBucket } : {}),
  ...(messagingSenderId ? { messagingSenderId } : {}),
  appId,
};

export const isFirebaseConfigured = Boolean(
  apiKey && authDomain && projectId && appId
);

let app: FirebaseApp | null = null;
let auth: Auth | null = null;
let firestoreDb: Firestore | null = null;

if (isFirebaseConfigured) {
  app = getApps().length ? getApp() : initializeApp(firebaseConfig);
  auth = getAuth(app);
  auth.languageCode = 'pt-BR';
  setPersistence(auth, browserSessionPersistence).catch((err) => {
    console.warn('Não foi possível aplicar browserSessionPersistence:', err);
  });
  firestoreDb = getFirestore(app);
}

export { app, auth, firestoreDb };
