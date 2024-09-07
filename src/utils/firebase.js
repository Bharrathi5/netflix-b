// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZUt1kL9XXyFgTKk3yoq4O9TDi5Hq1oGI",
  authDomain: "netflix-b-7b3b8.firebaseapp.com",
  projectId: "netflix-b-7b3b8",
  storageBucket: "netflix-b-7b3b8.appspot.com",
  messagingSenderId: "185247384656",
  appId: "1:185247384656:web:4f3dfac0c3ab1e0a463d55",
  measurementId: "G-DSRLSSZFPD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);