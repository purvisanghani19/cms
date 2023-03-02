import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import "./login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  console.log({ email, password });

  const handlelogin = (e) => {
    e.preventDefault();
    navigate("/studashboard");
    axios
      .post("http://127.0.0.1:4000/api/use/login/login", {
        userName: email,
        email: email,
        password: password,
      })
      .then((result) => {
        console.log("result", result);
      })
      .catch((error) => {
        console.log("error", error);
      }, []);
  };
  return (
    <>
      {/* <section className="login_side">
        <img
          src="https://thumbs.dreamstime.com/b/online-registration-sign-up-concept-young-man-signing-login-to-account-smartphone-app-user-interface-secure-password-194944772.jpg"
          alt=""
        />
        <div className="main">
          <div className="login_container">
            <p className="title_login">Welcome to login</p>
            <form action="" className="login_form">
              <div className="form_control">
                <input
                  type="text"
                  placeholder="Email"
                  value={email}
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <i class="fa-solid fa-user"></i>
              </div>
              <div className="form_control">
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <i class="fa-solid fa-lock"></i>
              </div>
              <button
                type="submit"
                placeholder="Submit"
                className="login_form_btn"
                onClick={handlelogin}
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </section> */}
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
            value={email}
            id="username"
            onChange={(e) => setEmail(e.target.value)}
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
