import React from "react";
import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase"; // Importing the auth instance from firebase.js
import { useDispatch, useSelector } from "react-redux";
import { signIn, signOut } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";

const UserValidate = () => {
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const [userStatus, setUserStatus] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validate = (email, password, userPage) => {
    const validateEmailRegex = /^\S+@\S+\.\S+$/;
    const validatepasswordRegex =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

    if (!validateEmailRegex.test(email)) {
      setEmailValid(false);
    } else if (validateEmailRegex.test(email)) {
      setEmailValid(true);
    }

    if (!validatepasswordRegex.test(password)) {
      setPasswordValid(false);
    } else if (validatepasswordRegex.test(password)) {
      setPasswordValid(true);
    }

    if (emailValid && passwordValid) {
      if (userPage == "Sign Up") {
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            console.log(user);
            setUserStatus("User created successfully");
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
            // ..
          });
      } else if (userPage == "Sign In") {
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
            setUserStatus("User signed in successfully");
            dispatch(signIn());

            navigate("/browse");
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
          });
      }
    }
  };
  return { emailValid, passwordValid, userStatus, validate };
};

export default UserValidate;
