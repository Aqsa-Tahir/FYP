import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCxUVWDHMq0T8xD9V7o23XI3Hi7Jql714g",
  authDomain: "alnisa-204f3.firebaseapp.com",
  projectId: "alnisa-204f3",
  storageBucket: "alnisa-204f3.appspot.com",
  messagingSenderId: "1022308965615",
  appId: "1:1022308965615:web:8bd60411bdfdab1a728f1a",
  measurementId: "G-TD2MXZMB0D"
};

const app = initializeApp(firebaseConfig);
const auth=getAuth();

export default {app,auth};
