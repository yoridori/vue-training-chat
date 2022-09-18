// Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js";
import {firebaseConfig} from "../../firebase.config";
import {initializeApp} from "firebase/app";
import {collection, getDocs, getFirestore, query} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Initialize Firebase
export const firebase = initializeApp(firebaseConfig);
export const db = getFirestore(firebase);

export async function getFirebaseData(collectionId) {
  const reference = collection(db, collectionId)
  const q = query(reference)
  return await getDocs(q);
}

