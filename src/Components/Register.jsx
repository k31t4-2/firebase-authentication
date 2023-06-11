import React, { useEffect, useState } from 'react'
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged
} from 'firebase/auth'; // 直接firebaseからimport
import { auth } from "../firebaseConfig"; // 自分で初期化したfirebaseConfigから
import { Navigate } from "react-router-dom";


function Register() {

  const [registerEmail,setRegisterEmail] = useState("")
  const [registerPassword, setRegisterPassword] = useState("")
  // ログイン状況を管理する
  const [user,setUser] = useState("")

    const handleSubmit = async (e) => {
    // 送信された時にデフォルトで設定されている挙動をキャンセルする
    e.preventDefault();

    //ユーザー登録がされたら何も起きず、エラーが起きたらalert文が発動する
    try {
      await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
    } catch (error) {
      alert("正しく入力してください。")
    }
    }

  // ログインしているかどうかを判定する
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    })
  },[]) // ログイン判定は1度だけでいいので、第２引数に[]を入れる


  return (
    <>
      {/* ログインしていればマイページ */}
      {/* していなければログイン画面に遷移するように三項演算子で記述する */}

      {user ? (
        <Navigate to={`/`} />
          ) : (
          <>
    <h1>新規登録</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>メールアドレス</label>
          <input
            name="email"
            type="email"
            value={registerEmail}
            onChange={(e) => setRegisterEmail(e.target.value)}
          />
        </div>
        <div>
          <label>パスワード</label>
          <input
            name="password"
            type="password"
            value={registerPassword}
            onChange={(e) => setRegisterPassword(e.target.value)}
          />
        </div>
        <button>登録する</button>
      </form>
          </>
      )}
    </>
  )
}

export default Register
