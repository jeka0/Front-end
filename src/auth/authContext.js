import React, { createContext, useState } from "react";

export const AuthContext = createContext({});

export const Auth = ({ children })=>{
    const [isAuth, setIsAuth] = useState(/*window.sessionStorage.getItem("isAuth") ||*/ false);
    const [user, setUser] = useState({});

    const login = (data) => {
        setIsAuth(true);
        setUser(data);
        //window.sessionStorage.setItem("isAuth", true);
    };

    const logout = () => {
        setIsAuth(false);
        setUser({});
    };

    return (
        <AuthContext.Provider value={ {isAuth, user, login, logout} }>
            {children}
        </AuthContext.Provider>
    )
}
