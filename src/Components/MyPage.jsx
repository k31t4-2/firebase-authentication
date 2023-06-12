import React, { useEffect, useState } from 'react'
// 次の行はfirebaseが用意している関数をimportしている
import { onAuthStateChanged,signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useNavigate,Navigate } from "react-router-dom";

function MyPage() {

  const [user, setUser] = useState("")
  // ログイン判定が終わるまで、リダイレクトさせないようにする
  const [loading,setLoading]= useState(true)

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false)
    })
  }, [])

  const navigate = useNavigate();

  const logout = async () => {
    await signOut(auth)
    navigate("/login/")
  }

  return (
    <>
      {/* loadingがfalseの時にマイページを表示する設定 */}
      {!loading && (
        <>
        {/* userがfalse = ログインしていなかったら、 */}
        {/* ログインページに飛ぶようにする */}
        {!user ? (
          <Navigate to={`/login/`} />
        ) : (
          <>
            <h1>マイページ</h1>
            {/* ログインしている場合、ユーザーのメールアドレスを表示 */}
            <p>{user?.email}</p>
            <button onClick={logout}>ログアウト</button>
          </>
        )}
      </>
      )}
    </>
  )
}

export default MyPage
