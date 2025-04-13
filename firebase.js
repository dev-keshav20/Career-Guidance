// Import the functions you need from Firebase SDK
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyB4E-_YbaCdU8eHwsx67g-hpCg9sGv8RRc",
  authDomain: "career-guidance-5fee9.firebaseapp.com",
  projectId: "career-guidance-5fee9",
  storageBucket: "career-guidance-5fee9.firebasestorage.app",
  messagingSenderId: "858545216095",
  appId: "1:858545216095:web:c6d5c8f11eec31535cd9ea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Function to save career data
const saveCareer = async (careerData) => {
  try {
    const docRef = await addDoc(collection(db, "careers"), careerData);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
