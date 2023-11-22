// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRXitlKOP9qlCVgyzPMng4S1FhA0IqBZc",
  authDomain: "projet-nuxt.firebaseapp.com",
  projectId: "projet-nuxt",
  storageBucket: "projet-nuxt.appspot.com",
  messagingSenderId: "168934730867",
  appId: "1:168934730867:web:0ea94e35cd054e1aaace06",
  measurementId: "G-GB8RFGCCWG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default {
  app
}
export {app}