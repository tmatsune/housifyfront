import { useState, useEffect, createContext } from "react";
import React from "react";

type ReactProps = {
    children: React.ReactNode;
}
type AuthUser = {
    id: number
    name: string
    email: string
    profImg: string
    desc: string
}
type currentUserType = {
    currentUser: AuthUser | null
    setCurrentUser: React.Dispatch<React.SetStateAction<AuthUser | null>>
}
export const UserContext = createContext({} as currentUserType);

export const UserProvider = ({children}:ReactProps) => {
    const [currentUser, setCurrentUser] = useState<AuthUser|null>(null);
    useEffect(() => {
        const data = localStorage.getItem("currentUser")
        //console.log(data);
        if(data){
            setCurrentUser(JSON.parse(data))
        }
    }, [])
    useEffect(() => {

        localStorage.setItem("currentUser", JSON.stringify(currentUser))
    })
    return  <UserContext.Provider value={{currentUser, setCurrentUser}}>
                {children}
            </UserContext.Provider>
}   