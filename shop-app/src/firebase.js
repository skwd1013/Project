import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCuJQrPbRbyKS_90FNbipBazM0IKg0ddBY",
  authDomain: "shop-app-49279.firebaseapp.com",
  projectId: "shop-app-49279",
  storageBucket: "shop-app-49279.appspot.com",
  messagingSenderId: "671312007161",
  appId: "1:671312007161:web:cd1d86505ff8f6e3c33728",
  measurementId: "G-NG8DZ0KHSD",
};

const firebaseApp = initializeApp(firebaseConfig);
const firebaseauth = getAuth(firebaseApp);

export default firebaseApp;
