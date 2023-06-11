import React from "react";
import './App.css';
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Register, {  } from "./Components/Register";
import LogIn from "./Components/LogIn";
import MyPage from "./Components/MyPage";

function App() {
  return (
    <div className="container">

      {/* 今まではコンポーネントを記載して表示していたが、Routerで表示する */}
      <BrowserRouter>
        <Routes>
          <Route path={`/register/`} element={<Register/>} />
          <Route path={`/Login/`} element={<LogIn/>} />
          <Route path={`/`} element={<MyPage/>} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
