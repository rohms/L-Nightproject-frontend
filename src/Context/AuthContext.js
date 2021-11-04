import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router";
// import dotenv from "dotenv";


export const AuthContext = createContext();
const adminURL = process.env.REACT_APP_ADMINUSERS;
const adminLogin = process.env.REACT_APP_ADMINUSERS_LOGIN;
const adminRegister = process.env.REACT_APP_ADMINUSERS_REGISTER;



export const AuthController = (props) => {
    const [user, setUser] = useState();
    const [isLogged, setIsLogged] = useState(false);
    let history = useHistory();
    useEffect(() => {
        if (localStorage.getItem("token")) getUserWithToken();
    }, []);

    const getUserWithToken = () => {
        axios
        .get(adminURL, {
            headers: {
                "auth-token": localStorage.getItem("token"),
            },
        })
        .then((res) => {
            setUser(res.data.user);
            setIsLogged(true);
        })
        .catch((err) => console.log("err", err));
    };

    const login = (loginData) => {
        axios.post(adminLogin, loginData).then((res) => {
            localStorage.setItem("token", res.data);
            getUserWithToken();
        });
    };


    // I THINK I wont need to have register

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
        history.push(`/`);
    };

    const value = {
        login,
        user,
        isLogged,
        register,
        logout,
    };

    return(
        <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
    );
};



