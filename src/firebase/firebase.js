
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import 'firebase/database'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyAj79-hWinMASaCpOv6F3jDvwdPODgEd_4",
  authDomain: "footbustik.firebaseapp.com",
  databaseURL: "https://footbustik-default-rtdb.firebaseio.com",
  projectId: "footbustik",
  storageBucket: "footbustik.appspot.com",
  messagingSenderId: "174159774209",
  appId: "1:174159774209:web:7637cd724c36d5584df600",
  measurementId: "G-Z7PN2RDVPX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {
    auth,
    db,
}