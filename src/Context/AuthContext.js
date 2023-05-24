import { createContext, useState, useEffect, useCallback } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const AuthContext = createContext();

const adminURL = process.env.REACT_APP_ADMINUSERS;
const adminLogin = process.env.REACT_APP_ADMINUSERS_LOGIN;
const adminRegister = process.env.REACT_APP_ADMINUSERS_REGISTER;

const AuthController = (props) => {
  const [user, setUser] = useState();
  const [isLogged, setIsLogged] = useState(false);
  const navigate = useNavigate();
  const controller = new AbortController();
  const { signal } = controller;

  const getUserWithToken = useCallback(async () => {
    try {
      const res = await axios.get(adminURL, {
        headers: {
          "auth-token": localStorage.getItem("token"),
          "Access-Control-Allow-Origin": true,
        },
        signal,
      });
      setUser(res.data.user);
      setIsLogged(true);
    } catch (error) {
      if (error.name === "AbortError") {
        toast.error("Request aborted");
      }
    }
  }, [signal]);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      getUserWithToken();
    }
  }, [getUserWithToken]);

  const login = async (loginData) => {
    try {
      const res = await axios.post(adminLogin, loginData);
      localStorage.setItem("token", res.data);
      await getUserWithToken();
      toast.success("Login successful");
      navigate("/");
    } catch (err) {
      toast.error(`Password or email is incorrect`);
    }
  };

  const register = async (registerData) => {
    try {
      const res = await axios.post(adminRegister, registerData);
      localStorage.setItem("token", res.headers["auth-token"]);
      await getUserWithToken();
    } catch (err) {
      console.log("err", err, err.response);
    }
  };

  const logout = (logoutData) => {
    logoutData.preventDefault();
    localStorage.removeItem("token");
    setIsLogged(false);
    navigate("/");
  };

  const value = {
    login,
    user,
    isLogged,
    register,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
};

export default AuthController
