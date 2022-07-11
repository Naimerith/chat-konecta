// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8Rh8U3bSZldu0Zl1rAGq-GOJiCfIYQzk",
  authDomain: "chatbot-86a74.firebaseapp.com",
  projectId: "chatbot-86a74",
  storageBucket: "chatbot-86a74.appspot.com",
  messagingSenderId: "361932351177",
  appId: "1:361932351177:web:cc0cda9e94a3b4085a4f18"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

//export const db = getFirestore(firebaseApp);

//export default firebaseApp;
