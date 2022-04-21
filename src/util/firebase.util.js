// Import the functions you need from the SDKs you need
import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1508bF_i_SefHigzy8pORYzavpbesBog",
  authDomain: "crwn-clothing-db-456f3.firebaseapp.com",
  projectId: "crwn-clothing-db-456f3",
  storageBucket: "crwn-clothing-db-456f3.appspot.com",
  messagingSenderId: "893137396860",
  appId: "1:893137396860:web:af4b999393beb218b515f9",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGoolePopup = () => signInWithPopup(auth, provider);
export const firebaseDB = getFirestore();
export const createUserDocFromAuth = async (userAuth) => {
  const userDocRef = doc(firebaseDB, "users", userAuth.uid);
  const userSnapShot = await getDoc(userDocRef);

  console.log("user doc ref", userDocRef);
  console.log("Is user exist", userSnapShot.exists());

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createAt,
      });
    } catch (error) {
      console.log("error occur while creating a user", error.message);
    }
  }

  return userDocRef;
};
