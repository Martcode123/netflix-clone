// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD1k2IURCsdbj9h3VB7BOTTdRJeRNdd8xc",
    authDomain: "netflix-clone-abeb4.firebaseapp.com",
    projectId: "netflix-clone-abeb4",
    storageBucket: "netflix-clone-abeb4.appspot.com",
    messagingSenderId: "987439606855",
    appId: "1:987439606855:web:9cd624d774750d51afd562"
  };
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }