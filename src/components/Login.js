import React from "react";
import "../Login.css";
import { FormControl, InputLabel, Input, FormHelperText } from "@mui/material"; // Importing Material-UI components
import { useState } from "react";
const Login = () => {
  const [userPage, setUserPage] = useState("Sign In");

  return (
    <div>
      <div className="background">
        <div className="absolute">
          <img src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-01/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" />
        </div>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/7d2359a4-434f-4efa-9ff3-e9d38a8bde7f/web/IN-en-20250707-TRIFECTA-perspective_4faa9280-a2c5-4e07-aafc-a45ce43fea09_small.jpg" />
        <div className="form">
          <form className="login-form">
            <h1>{userPage == "Sign Up" ? "Sign Up" : "Sign In"}</h1>
            {userPage == "Sign Up" ? (
              <input type="text" placeholder="Enter username" />
            ) : (
              ""
            )}
            <input type="text" placeholder="Email or mobile number" />

            <input type="password" placeholder="Password" />

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
      </div>
    </div>
  );
};

export default Login;
