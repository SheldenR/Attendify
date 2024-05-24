import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyB9Az95KAvR6y9zBDqZv4BSSQZKI3sAH0g",
  authDomain: "attendify-57b54.firebaseapp.com",
  projectId: "attendify-57b54",
  storageBucket: "attendify-57b54.appspot.com",
  messagingSenderId: "369101021895",
  appId: "1:369101021895:web:4da3c06e1bc8e89dfe54e2",
  measurementId: "G-FTYDZ8051D"
};

// Application variables
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Authentication variables
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirm_password = document.getElementById("confirm-password");
const login_button = document.getElementById("login-button");
const signup_button = document.getElementById("signup-button");

// Authentication methods
const signup = async ()=> {
  if (password.value != confirm_password.value) {
    alert("Passwords do not match");
    return;
  } 

  const signup_email = email.value;
  const signup_password = password.value;

  createUserWithEmailAndPassword(auth, signup_email, signup_password)
  .then((userCreditional) => {
      const user = userCreditional.user;
      console.log(user);
      alert('user created successfully');
  })
  .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode,errorMessage);
      alert(errorMessage);
  });
};

const login = async () => {
  const login_email = email.value;
  const login_password = password.value;
  signInWithEmailAndPassword(auth, login_email, login_password)
  .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      alert('user signed in successfully');
  })
  .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      alert(errorMessage);
  });
};

// Event listeners
if (document.URL.includes("login-page")) {
  login_button.addEventListener("click", login);
}

if (document.URL.includes("signup-page")) {
  signup_button.addEventListener("click", signup);
}

