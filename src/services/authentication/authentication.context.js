import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");

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
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
