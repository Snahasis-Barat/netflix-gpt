import React from "react";
import "../Login.css";
import { Alert } from "@mui/material"; // Importing Material-UI components
import { useState, useRef } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword} from "firebase/auth";


const Login = () => {
  const [userPage, setUserPage] = useState("Sign In");
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const email = useRef(null);
  const password = useRef(null);
  const username = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const validateEmailRegex = /^\S+@\S+\.\S+$/;
    const validatepasswordRegex =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    console.log(validateEmailRegex.test(email.current.value));
    if (!validateEmailRegex.test(email.current.value)) {
      setEmailValid(false);
    } else if (validateEmailRegex.test(email.current.value)) {
      setEmailValid(true);
    }

    if (!validatepasswordRegex.test(password.current.value)) {
      setPasswordValid(false);
    }

    else if (validatepasswordRegex.test(password.current.value)) {
      setPasswordValid(true);
    }

    if(emailValid && passwordValid)
    {
      console.log(true)
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage)
    // ..
  });
    }

  };

  return (
    <div>
      <div className="background">
        <div className="absolute">
          <img src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-01/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" />
        </div>
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
            {!emailValid ? (
              <Alert severity="error">Enter valid email</Alert>
            ) : (
              ""
            )}
            {!passwordValid ? (
              <Alert severity="error">
                <p>Enter valid password</p>
                <li>
                <ul> Has minimum 8 characters in length. </ul>
                  <ul> At least one uppercase English letter. </ul>
                  <ul>At least one lowercase English letter. </ul>
                  <ul>At least one digit. </ul>
                  <ul> At least one special character</ul>
                </li>
              </Alert>
            ) : (
              ""
            )}
          
        
      </div>
    </div>
  );
};

export default Login;
