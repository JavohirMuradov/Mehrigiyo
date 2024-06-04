// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCMVtgvAx8HA5G-UG8931Bd1w3qyrtKgW4",
    authDomain: "auth-f7591.firebaseapp.com",
    projectId: "auth-f7591",
    storageBucket: "auth-f7591.appspot.com",
    messagingSenderId: "489513979095",
    appId: "1:489513979095:web:e005ca618f950758107492",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
