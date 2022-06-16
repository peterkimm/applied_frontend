import firebase from "firebase/app";
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAH2hGFt7o4YLimLMMXCqV2mP6F7wgwBW8",
    authDomain: "people-5bcb1.firebaseapp.com",
    projectId: "people-5bcb1",
    storageBucket: "people-5bcb1.appspot.com",
    messagingSenderId: "332052052967",
    appId: "1:332052052967:web:f4c02caa87b097a4095b42",
    measurementId: "G-2YV6XML3XE"
  };

//   initialize firebase
firebase.initializeApp(config);

// set up provider
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

// describe various actions needed to facilitate authentication

// describe what login should do
function login() {
    return auth.signInWithPopup(provider);
}

// describe logout
function logout() {
    return auth.signOut();
}

// export
export { auth, login, logout }