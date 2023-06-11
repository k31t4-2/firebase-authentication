import React from 'react'

function Register() {
  return (
    <>
            <h1>新規登録</h1>
      <form>
        <div>
          <label>メールアドレス</label>
          <input
            name="email"
            type="email"
          />
        </div>
        <div>
          <label>パスワード</label>
          <input
            name="password"
            type="password"
          />
        </div>
        <button>登録する</button>
      </form>
    </>
  )
}

export default Register
