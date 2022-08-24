import React, { useState, createContext } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import { loginRequest } from "./auth.serveces";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);

  onAuthStateChanged(getAuth(), (usr) => {
    if (usr) {
      setUser(usr);
      setLoading(false);
    } else {
      setLoading(false);
    }
  });

  const onLogin = async (email, password) => {
    try {
      setLoading(true);
      const res = await signInWithEmailAndPassword(getAuth(), email, password);
      setUser(res);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err);
      setError(err.toString());
    }
  };

  const onRegister = async (email, password, rePassword) => {
    try {
      setLoading(true);
      if (password !== rePassword) {
        setError("Error: Password doesn't match");
        return;
      }
      const createUser = await createUserWithEmailAndPassword(
        getAuth(),
        email,
        password
      );
      setUser(createUser);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError(err.toString());
    }
  };
  const onLogout = async () => {
    await signOut(getAuth());
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        isLoading,
        error,
        onLogin,
        onRegister,
        onLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
