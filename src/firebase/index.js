
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDSdsOhUSfZE7iZWvwO_zOxULyjx49Wf74",
  authDomain: "vue-firebaseauth-landing.firebaseapp.com",
  projectId: "vue-firebaseauth-landing",
  storageBucket: "vue-firebaseauth-landing.appspot.com",
  messagingSenderId: "37481917257",
  appId: "1:37481917257:web:f02c30def3ebae02360898"
}

const app = initializeApp(firebaseConfig)

const auth = getAuth(app)

export { auth }