import { createContext, useState, useEffect, useCallback } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const AuthContext = createContext();
const adminURL = process.env.REACT_APP_ADMINUSERS;
const adminLogin = process.env.REACT_APP_ADMINUSERS_LOGIN;
const adminRegister = process.env.REACT_APP_ADMINUSERS_REGISTER;

export const AuthController = (props) => {
  const [user, setUser] = useState();
  const [isLogged, setIsLogged] = useState(false);
  let navigate = useNavigate();
  const controller = new AbortController();
  const { signal } = controller;

  const getUserWithToken = useCallback(() => {
    axios
      .get(adminURL, {
        headers: {
          "auth-token": localStorage.getItem("token"),
          "Access-Control-Allow-Origin": true,
        },
        signal,
      })
      .then((res) => {
        // console.log("response for getting users", res);
        setUser(res.data.user);
        // need to check
        // console.log("user", user);
        setIsLogged(true);
      })
      .catch((error) => {
        if (error.name === "AbortError") {
          toast.error("Request aborted");
        }
      });
  }, [signal, setUser, setIsLogged]);

  // console.log("user", user);

  useEffect(() => {
    if (localStorage.getItem("token")) getUserWithToken();
  }, [getUserWithToken]);

  const login = (loginData) => {
    axios
      .post(adminLogin, loginData)
      .then((res) => {
        localStorage.setItem("token", res.data);
        getUserWithToken();
        toast.success("Login successful");
        navigate("/");
      })
      .catch((err) => toast.error(`Password or email is incorrect`));
  };

  const register = (registerData) => {
    axios
      .post(adminRegister, registerData)
      .then((res) => {
        localStorage.setItem("token", res.headers["auth-token"]);
        getUserWithToken();
      })
      .catch((err) => console.log("err", err, err.response));
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
