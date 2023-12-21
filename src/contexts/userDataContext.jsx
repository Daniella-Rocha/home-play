import { createContext, useState } from "react";

export const UserDataContext = createContext({});

export const UserDataContextProvider = ({children}) => {
    const useData = JSON.parse(localStorage.getItem('userData'));
    
    const [data, setData] = useState(useData ? useData : []);
    
    return (
        <UserDataContext.Provider value={data}>
            {children}
        </UserDataContext.Provider>
    )
}

