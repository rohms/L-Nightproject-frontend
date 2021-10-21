import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router";

export const AuthContext = createContext();

export const AuthController = (props) => {
    const [user, setUser] = useState();
    const [isLogged, setIsLogged] = useState(false);
    let history = useHistory();
    useEffect(() => {
        if (localStorage.getItem("token")) getUserWithToken();
    }, []);

    const getUserWithToken = () => {
        axios
        .get("http://localhost:3000/me", {
            headers: {
                "auth-token": localStorage.getItem("token"),
            },
        })
        .then((res) => {
            setUser(res.data.user[0]);
            setIsLogged(true);
        })
        .catch((err) => console.log("err", err));
    };

    const login = (loginData) => {
        axios.post("http://localhost:3000/auth/login", loginData).then((res) => {
            localStorage.setItem("token", res.headers["auth-token"]);
            getUserWithToken();
        });
    };


    // I THINK I wont need to have register, or it should not be available for everybody

    const register = (registerData) => {
        axios
        .post("http//localhost:3000/auth/register", registerData)
        .then((res) => {
            localStorage.setItem("token", res.headers["auth-token"]);
            getUserWithToken();
        })
        .catch((err) => console.log("err", err, err.response));
    };

    const logout = (logoutData) => {
        localStorage.removeItem("token");
        setIsLogged(false);
        logoutData.preventDefault();
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



