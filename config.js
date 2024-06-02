  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCInDdQJ8Rod6QitQgFqs6pgERAALhJOYY",
    authDomain: "fir-ffb05.firebaseapp.com",
    projectId: "fir-ffb05",
    storageBucket: "fir-ffb05.appspot.com",
    messagingSenderId: "501232356582",
    appId: "1:501232356582:web:ada97bf5072e334d6cff27"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app)