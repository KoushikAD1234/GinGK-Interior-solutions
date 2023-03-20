import React, { useState, useEffect } from "react";
import "./Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = async (event) => {

    event.preventDefault();
    setUsername("");
    setPassword("");
    try {
      const response = await axios
        .post("http://localhost:4000/", { username, password })
        .then((res) => {
          console.log(res);
          if ((res?.data == "Login successfull")) {
            setResult("Login Successfull")
            navigate("/main");
          }
        }); // Login .
    } catch (error) {
      setResult(error.response.data); // Incorrect email or password
      // Display error message to user
    }
    console.log(`Submitting ${username} and ${password}`);
    // Here you can add code to submit the data to a server or validate it in some way
  };

  return (
    <div className="login">
      <div className="login_box">
        <img className="logo" src="/images/logo.png" alt="" srcset="" />
        <div className="login_header">
          <h1>Login</h1>
          <div className="signup">
            Need an account? <a href="">Sign Up</a>
          </div>
        </div>
        <div className="login_form">
          <form onSubmit={handleSubmit}>
            <label className="input">
              Username
              <input
                className="input_edit"
                placeholder="Enter your username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
            <br />
            <label className="input">
              Password
              <input
                className="input_edit"
                placeholder="Enter your password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <br />
            <div className="submit">
              <button className="login_button" type="submit">
                Login
              </button>
              <a href="" className="forgot">
                Forgot Password?
              </a>
            </div>
            <div className="result">
              {result}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
