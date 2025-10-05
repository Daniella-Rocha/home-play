import { createContext, useState } from "react";

export const UserDataContext = createContext({});

export const UserDataContextProvider = ({ children }) => {
    const userData = JSON.parse(localStorage.getItem('userData'));

    const [data, setData] = useState(userData ? userData : []);

    return (
        <UserDataContext.Provider value={{
            data,
            setData
        }}>
            {children}
        </UserDataContext.Provider>
    )
}

