import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; //認証機能を使うにはこの記述が必要

const firebaseConfig = {
  apiKey: "AIzaSyDwemW9vHuivhAAFeRu6Y9tMVNVIG7AhFU",
  authDomain: "fir-authentication-82cb9.firebaseapp.com",
  projectId: "fir-authentication-82cb9",
  storageBucket: "fir-authentication-82cb9.appspot.com",
  messagingSenderId: "519717272198",
  appId: "1:519717272198:web:1a33b36c5ac6009faeef07"
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app) //認証機能を使うにはこの記述が必要
