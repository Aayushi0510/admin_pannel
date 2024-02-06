import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getStorage } from "firebase/storage"; // Use 'getStorage' to get Firebase Storage

// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
// };

const firebaseConfig = {
    apiKey: "AIzaSyALfxn9iYeUdGEP8T3PXtBaYlHGhE3Zt9c",
    authDomain: "folderstructue.firebaseapp.com",
    projectId: "folderstructue",
    storageBucket: "folderstructue.appspot.com",
    messagingSenderId: "900542399488",
    appId: "1:900542399488:web:12b7963ba4eed0580344e5",
    measurementId: "G-QD0QCDD5CL"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { auth ,storage };
