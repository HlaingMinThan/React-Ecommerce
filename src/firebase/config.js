import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"
var firebaseConfig = {
    apiKey: "AIzaSyDsI6lNBaGR7nBt-cxYsTGpASe_QtkqXMA",
    authDomain: "reactecommerce-9edb8.firebaseapp.com",
    projectId: "reactecommerce-9edb8",
    storageBucket: "reactecommerce-9edb8.appspot.com",
    messagingSenderId: "684984742453",
    appId: "1:684984742453:web:d559adeed8ee711449b77c"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
let firestore=firebase.firestore();
let auth=firebase.auth();
var provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
  });
  
  let signInWithGoogle=()=>auth.signInWithPopup(provider);

  export  {firestore,auth,signInWithGoogle};