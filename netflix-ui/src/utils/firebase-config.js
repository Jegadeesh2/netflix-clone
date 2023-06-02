import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAs872bVAI4ocjFrx5SUT297jsW06qVdNU",
  authDomain: "netflix-clone-react-4908a.firebaseapp.com",
  projectId: "netflix-clone-react-4908a",
  storageBucket: "netflix-clone-react-4908a.appspot.com",
  messagingSenderId: "576402811515",
  appId: "1:576402811515:web:37a5490bf7fe0d2d7e50de",
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
