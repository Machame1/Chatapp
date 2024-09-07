import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"
const firebaseConfig = {
  apiKey: "AIzaSyAU4OAVs3sPNb-jNz82GzsnbZVDfyaqXp8",
  authDomain: "chatapp-bccb4.firebaseapp.com",
  projectId: "chatapp-bccb4",
  storageBucket: "chatapp-bccb4.appspot.com",
  messagingSenderId: "598740056090",
  appId: "1:598740056090:web:08e32362ea5bf23aaa39a3"
};

const app = initializeApp(firebaseConfig);
export const auth=getAuth()
export const db=getFirestore()
export const storage=getStorage()