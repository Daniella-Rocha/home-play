import { createContext, useEffect, useState } from 'react'

export const UserFavoritesContext = createContext([]);

export const UserFavoritesContextProvider = ({ children }) => {

    const [favotitesList, setFavoritesList] = useState([]);

    const getFavoritesList = () => {

        const favorites = localStorage.getItem('favorites');

        setFavoritesList(() => {
            return favorites ? favorites : []
        });

        return favotitesList;
    }

    useEffect(() => {
        getFavoritesList();
    }, []);

    return (
        <UserFavoritesContext.Provider value={favotitesList} >
            {children}
        </UserFavoritesContext.Provider>
    )
}

