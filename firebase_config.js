// yukiyanArt Feedback Hub - Official Firebase Cloud Integration Config
const firebaseConfig = {
  apiKey: "AIzaSyCl_dtBZNBQBTHwtrVe7vrm38tS5b705NI",
  authDomain: "yukiyanart-feedback-hub.firebaseapp.com",
  projectId: "yukiyanart-feedback-hub",
  storageBucket: "yukiyanart-feedback-hub.firebasestorage.app",
  messagingSenderId: "19779026628",
  appId: "1:19779026628:web:f22fdc61e19115afa91391",
  measurementId: "G-L12MV3KC89"
};

// Initialize Firebase App
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();

console.log("yukiyanArt Feedback Hub: Firebase Cloud Integration Initialized Successfully!");
