import { createContext, useState, useEffect } from "react";
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

  useEffect(() => {
    if (localStorage.getItem("token")) getUserWithToken();

    return () => {
      controller.abort();
    };
  }, []);

  // console.log(isLogged);
  // console.log(setUser);

  const getUserWithToken = () => {
    axios
      .get(adminURL, {
        headers: {
          "auth-token": localStorage.getItem("token"),
          "Access-Control-Allow-Origin": true,
        },
        signal,
      })
      .then((res) => {
        setUser(res.data.user);
        setIsLogged(true);
      })
      .catch((error) => {
        if (error.name === "AbortError") {
          toast.error("Request aborted");
        }
      });
  };

  const login = (loginData) => {
    axios.post(adminLogin, loginData).then((res) => {
      localStorage.setItem("token", res.data);
      getUserWithToken();
    });
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
