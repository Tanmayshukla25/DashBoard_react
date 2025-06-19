// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBhL-6USVhjBRo1OghIs3dwd7_CobC-pw",
  authDomain: "dashboard-dd86f.firebaseapp.com",
  projectId: "dashboard-dd86f",
  storageBucket: "dashboard-dd86f.firebasestorage.app",
  messagingSenderId: "716281256192",
  appId: "1:716281256192:web:6acbf5cb4378f671927be5",
  measurementId: "G-2R4WV5HXBG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const auth=getAuth();
 export default app;