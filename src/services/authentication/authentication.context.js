import axios from "axios";
import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");

  const [icons, setIcons] = useState({
    fullName: "account",
    email: "email",
    pwd: "lock",
    confirmPwd: "lock-question",
  });

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [pwdError, setPwdError] = useState("");
  const [confirmPwdError, setConfirmPwdError] = useState("");

  const [body, setBody] = useState({
    status: "",
    message: "",
  });

  const validateEmail = () => {
    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return emailRegex.test(email);
  };

  const validateSignupForm = () => {
    let isValid = true;

    if (!name) {
      setNameError("Name is required");
      isValid = false;
    } else {
      setNameError("");
    }

    if (!email || !validateEmail(email)) {
      setEmailError("Invalid email format");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (pwd.length < 8 || pwd.length > 20) {
      setPwdError("Password should be min 8 char and max 20 char");
      isValid = false;
    } else {
      setPwdError("");
    }

    if (pwd !== confirmPwd) {
      setConfirmPwdError("Password and confirm password should be same");
      isValid = false;
    } else {
      setConfirmPwdError("");
    }

    return isValid;
  };

  const validateSignInForm = () => {
    let isValid = true;

    if (!email || !validateEmail(email)) {
      setEmailError("Invalid email format");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (pwd.length < 8 || pwd.length > 20) {
      setPwdError("Password should be min 8 char and max 20 char");
      isValid = false;
    } else {
      setPwdError("");
    }
    return isValid;
  };

  const clearFields = () => {
    setName("");
    setEmail("");
    setPwd("");
    setConfirmPwd("");
    setNameError("");
    setEmailError("");
    setPwdError("");
    setConfirmPwdError("");
    setBody({ status: "", message: "" });
  };

  const handleSignup = async () => {
    if (validateSignupForm()) {
      console.log("Form is valid");
      try {
        const response = await axios.post(
          "https://inspired-friendly-cougar.ngrok-free.app/api/user/signup",
          {
            email,
            password: pwd,
          }
        );
        const data = response.data;
        if (response.status === 200) {
          console.log(data);
          setBody(data);
          // handle successful signup
        } else {
          console.log(data);
          setBody(data);
          // handle unsuccessful signup
        }
      } catch (error) {
        console.log(error);
        // handle error
      }
    }
  };

  const handleSignin = async () => {
    if (validateSignInForm()) {
      console.log("Form is valid");
      try {
        const response = await axios.post(
          "https://inspired-friendly-cougar.ngrok-free.app/api/user/signin",
          {
            email,
            password: pwd,
          }
        );
        const data = response.data;
        if (response.status === 200) {
          console.log(data);
          setBody(data);
          // handle successful signup
        } else {
          console.log(data);
          setBody(data);
          // handle unsuccessful signup
        }
      } catch (error) {
        console.log(error);
        // handle error
      }
    }
  };

  return (
    <AuthContext.Provider
      value={{
        name,
        email,
        pwd,
        confirmPwd,

        setName,
        setEmail,
        setPwd,
        setConfirmPwd,

        icons,
        setIcons,

        nameError,
        emailError,
        pwdError,
        confirmPwdError,

        body,

        clearFields,
        handleSignup,
        handleSignin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

