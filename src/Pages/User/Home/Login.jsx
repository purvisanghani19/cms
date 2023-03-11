// import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import "./login.css";

const Login = () => {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");


  const navigate = useNavigate();
  // console.log({ userName, password });  

  useEffect(() => {
    if (localStorage.getItem("user")) {
      // navigate("/studashboard")
      // alert("login sucessfully");
    }
  }, []);

  const handlelogin = async (e) => {
    console.warn(userName, password);
    let item = { userName, password };

    let result = await fetch("http://localhost:5000/api/use/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(item),
    });
    result = await result.json();
  
    localStorage.setItem("user", JSON.stringify(result));
    // console.log(result)

    if(result.response.data.role === "STUDENT"){
      // console.log("nidhiiii")
      navigate("/studashboard");
    }else if(result.response.data.role === "STAFF"){
      navigate("/dashboard");
    }


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
          <br />
          
          <a className="submitlogin" align="center" onClick={handlelogin}>
            Login
          </a>
        </form>
      </div>
    </>
  );
};
export default Login;
