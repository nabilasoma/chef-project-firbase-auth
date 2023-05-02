// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6sNX6RfCOKYxDo4rLCSDTJQ_4a8HE6ws",
  authDomain: "chef-project-firbase-auth.firebaseapp.com",
  projectId: "chef-project-firbase-auth",
  storageBucket: "chef-project-firbase-auth.appspot.com",
  messagingSenderId: "917800119387",
  appId: "1:917800119387:web:e240b78964feacb414237e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;