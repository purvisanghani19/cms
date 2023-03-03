import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import "./login.css";

const Login = () => {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  console.log({ userName, password });

  useEffect(() => {
    if (localStorage.getItem("student")) {
      navigate("/studashboard");
    }
  }, []);

  const handlelogin = async (e) => {
    console.warn(userName, password);
    let item = { userName, password };

    let result = await fetch(
      "http://127.0.0.1:4000/api/use/student/studentLogin/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(item),
      }
    );
    result = await result.json();
    localStorage.setItem("student", JSON.stringify(result.token));
    navigate("/studashboard");
   
  };
  return (
    <>
      
      <div className="mainlogin">
        <p className="sign" align="center">
          Welcome to login page
        </p>
        <form className="form1">
          <input
            className="username "
            type="text"
            align="center"
            placeholder="Username"
            value={userName}
            id="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="pass"
            type="password"
            align="center"
            placeholder="Password"
            value={password}
            id="email"
            onChange={(e) => setPassword(e.target.value)}
          />
          <a className="submitlogin" align="center" onClick={handlelogin}>
            Login
          </a>
        </form>
      </div>
    </>
  );
};
export default Login;
