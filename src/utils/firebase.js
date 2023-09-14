// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: 'blog-abd54.firebaseapp.com',
  projectId: 'blog-abd54',
  storageBucket: 'blog-abd54.appspot.com',
  messagingSenderId: '756839345213',
  appId: '1:756839345213:web:1be4b4d80ab4175a750e54',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
