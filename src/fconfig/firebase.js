import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6s4sUKiPX2K1sWJ_GGQQ5o1CIkJFAS4s",
  authDomain: "hackathon-2b917.firebaseapp.com",
  projectId: "hackathon-2b917",
  storageBucket: "hackathon-2b917.firebasestorage.app",
  messagingSenderId: "478174879008",
  appId: "1:478174879008:web:727aea460839cf449ecb45",
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app);
