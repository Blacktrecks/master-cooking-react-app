import firebase from "firebase/app"
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCIyiO34E3znOGfyaYjj-HYWmJJ7tsRcDM",
  authDomain: "cooking--master-site.firebaseapp.com",
  projectId: "cooking--master-site",
  storageBucket: "cooking--master-site.appspot.com",
  messagingSenderId: "649301085101",
  appId: "1:649301085101:web:265ec0be64734818e92f24"
};

//init firebase
firebase.initializeApp(firebaseConfig)

//init services
 const projectFire = firebase.firestore()

 export { projectFire } 