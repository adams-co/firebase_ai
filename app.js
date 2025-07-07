// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAd0pS-7AQjIjEpmvWxlyL_pQTy9odklBE",
  authDomain: "myassistant-oqayj.firebaseapp.com",
  projectId: "myassistant-oqayj",
  storageBucket: "myassistant-oqayj.firebasestorage.app",
  messagingSenderId: "523326907425",
  appId: "1:523326907425:web:2a66e40ed283183d1aef60"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Google Sign-In function
function signIn() {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider)
    .then(result => {
      alert("Signed in as: " + result.user.email);
    })
    .catch(error => {
      console.error("Error signing in:", error);
    });
}
