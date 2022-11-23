import React, { createContext, useState } from "react";

export const AuthContext = createContext({});

export const Auth = ({ children })=>{
    const [isAuth, setIsAuth] = useState(JSON.parse(window.localStorage.getItem("isAuth")));
    const [user, setUser] = useState({});

    const login = (data) => {
        setIsAuth(true);
        setUser(data);
        window.localStorage.setItem("isAuth", true);
    };

    const logout = () => {
        setIsAuth(false);
        setUser({});
        window.localStorage.setItem("isAuth", false);
    };

    return (
        <AuthContext.Provider value={ {isAuth, user, login, logout} }>
            {children}
        </AuthContext.Provider>
    )
}
