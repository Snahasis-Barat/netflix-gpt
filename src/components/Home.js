import React from "react";
import "../Login.css";
import { Alert } from "@mui/material"; // Importing Material-UI components
import { useState, useRef,useEffect } from "react";

import UserValidate from "./UserValidate";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


const Home = () => {
  const [userPage, setUserPage] = useState("Sign In");
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const email = useRef(null);
  const password = useRef(null);
  const username = useRef(null);
  const { emailValid, passwordValid, userStatus, validate } = UserValidate();
  const navigate = useNavigate();
  

  const handleSubmit = (e) => {
    e.preventDefault();
    validate(email.current.value, password.current.value, userPage);
  };

  return (
    <div>
      <div className="background">
       
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/7d2359a4-434f-4efa-9ff3-e9d38a8bde7f/web/IN-en-20250707-TRIFECTA-perspective_4faa9280-a2c5-4e07-aafc-a45ce43fea09_small.jpg" />
        <div className="form">
          <form className="login-form" onSubmit={handleSubmit}>
            <h1>{userPage == "Sign Up" ? "Sign Up" : "Sign In"}</h1>
            {userPage == "Sign Up" ? (
              <input ref={username} type="text" placeholder="Enter username" />
            ) : (
              ""
            )}
            <input
              ref={email}
              type="text"
              placeholder="Email or mobile number"
            />

            <input ref={password} type="password" placeholder="Password" />

            <button className="btn-signin">{userPage}</button>

            <div className="or-divider">OR</div>

            <div className="bottom-links">
              <a href="#" className="forgot-password">
                Forgot password?
              </a>

              {userPage == "Sign In" ? (
                <div className="signup-link">
                  New to Netflix?{" "}
                  <a href="#" onClick={() => setUserPage("Sign Up")}>
                    Sign up now.
                  </a>
                </div>
              ) : (
                <div className="signup-link">
                  <a href="#" onClick={() => setUserPage("Sign In")}>
                    Sign in
                  </a>
                </div>
              )}
            </div>
          </form>
        </div>
        <div className="user-status">
          {!emailValid ? <Alert severity="error">Enter valid email</Alert> : ""}
          {!passwordValid ? (
            <Alert severity="error">
              <p>Enter valid password</p>
            </Alert>
          ) : (
            ""
          )}
          {userStatus && emailValid && passwordValid && (
            <Alert severity="success">{userStatus}</Alert>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
