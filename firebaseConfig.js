// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.APP_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: "file-uploading-5dd3e",
  storageBucket: "file-uploading-5dd3e.appspot.com",
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: "1:684757001745:web:45c04a8559d714246bf3b0",
  measurementId: process.env.MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export default app;
