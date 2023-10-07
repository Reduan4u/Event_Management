// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAmTT8iQxviDCFAY22K5RuS_ObJ-HBMKNY",
    authDomain: "rr-wedding-planner.firebaseapp.com",
    projectId: "rr-wedding-planner",
    storageBucket: "rr-wedding-planner.appspot.com",
    messagingSenderId: "3536555885",
    appId: "1:3536555885:web:bedb0883f6618266579464"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;