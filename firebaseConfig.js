// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5IURFYbbFs-kCA2HWpPuoHCU7twIwkKI",
  authDomain: "file-uploading-5dd3e.firebaseapp.com",
  projectId: "file-uploading-5dd3e",
  storageBucket: "file-uploading-5dd3e.appspot.com",
  messagingSenderId: "684757001745",
  appId: "1:684757001745:web:45c04a8559d714246bf3b0",
  measurementId: "G-KXJ773Q0G4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
