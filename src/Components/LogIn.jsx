import React, { useEffect, useState } from 'react'
import {
  signInWithEmailAndPassword,
  onAuthStateChanged
} from "firebase/auth";
import { auth } from "../firebaseConfig";
import { Navigate,Link } from "react-router-dom";

function LogIn() {

  const [loginEmail,setLoginEmail] = useState("")
  const [loginPassword, setLoginPassword] = useState("")
  // ログインを判定する true / false
  const [user,setUser] = useState("")


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
    } catch (error) {
      alert("メールアドレスまたはパスワードが間違っています。")
    }
  }

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    })
  })

  return (
    <>

      {user ? (
        <Navigate to={`/`} />
      ) : (
          <>
    <h1>ログインページ</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>メールアドレス</label>
          <input
            name="email"
            type="email"
            value={loginEmail}
            onChange={(e) => setLoginEmail(e.target.value)}
            />
        </div>
        <div>
          <label>パスワード</label>
          <input
            name="password"
            type="password"
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
            />
        </div>
        <button>ログイン</button>

        <p>新規登録は<Link to={`/register/`}>こちら</Link></p>
      </form>
        </>

      ) }

    </>
  )
}

export default LogIn
