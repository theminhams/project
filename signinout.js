import {auth} from "./config.js"
import { signInWithPopup, GoogleAuthProvider} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
const loginButton = document.querySelector(".login")
const provider = new GoogleAuthProvider();
const xuly = (e) => {

    signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
    // const express = document.querySelector(".test")
    // express = user.displayName
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
}
loginButton.addEventListener('click', xuly)
