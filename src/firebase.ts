import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCBEOJLZy3HfHCYgndemSgNJZVleuoYTyc",

  authDomain: "easy-diagram-form.firebaseapp.com",

  databaseURL: "https://easy-diagram-form-default-rtdb.asia-southeast1.firebasedatabase.app",

  projectId: "easy-diagram-form",

  storageBucket: "easy-diagram-form.appspot.com",

  messagingSenderId: "382452877899",

  appId: "1:382452877899:web:b27928c5e8085e17309bce",

  measurementId: "G-F31LFPRQ8X"

};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;