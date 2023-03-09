// import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import "./login.css";

const Login = () => {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const navigate = useNavigate();
  console.log({ userName, password });  

  useEffect(() => {
    if (localStorage.getItem("info")) {
      navigate("/studashboard")
      alert("login sucessfully");
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
    localStorage.setItem("info", JSON.stringify(result));

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
          <br />
          {/* <label className="small mb-1">Role :</label> */}
          <select
            className="role-form"
            aria-label="Default select example"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="" disabled selected>
              Select your role
            </option>
            <option value="1">Student</option>
            <option value="2">Faculty</option>
            <option value="3">Admin</option>
          </select>
          <a className="submitlogin" align="center" onClick={handlelogin}>
            Login
          </a>
        </form>
      </div>
    </>
  );
};
export default Login;
