import React, { createContext, useState, useEffect } from "react";
import { reqLogin, reqRegister } from "../services/authService";

export const AuthContext = createContext({});

export const Auth = ({ children })=>{
    const [isAuth, setIsAuth] = useState(false);
    const [user, setUser] = useState({});

    useEffect(()=> {
        if(window.localStorage.getItem('tokens')){
            setIsAuth(true);
        }
    }, [])

    const login = async (data) => {
        await reqLogin(data);
        setIsAuth(true);
        setUser(data);
    };

    const register = async (data) =>{
        await reqRegister(data);
        await login({ email: data.email, password: data.password });
    };

    const logout = () => {
        setIsAuth(false);
        setUser({});
        window.localStorage.setItem("tokens", "");
    };

    return (
        <AuthContext.Provider value={ {isAuth, user, login, logout, register} }>
            {children}
        </AuthContext.Provider>
    )
}
