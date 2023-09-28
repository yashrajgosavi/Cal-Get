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
      setEmailError("Invalid email");
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

  return (
    <AuthContext.Provider
      value={{
        name,
        email,
        pwd,
        confirmPwd,
        icons,
        setName,
        setEmail,
        setPwd,
        setConfirmPwd,
        setIcons,
        nameError,
        emailError,
        pwdError,
        confirmPwdError,
        validateSignupForm,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
