import { createContext, useEffect, useState } from 'react';

export const UserFavoritesContext = createContext([]);

export const UserFavoritesContextProvider = ({ children }) => {

    const [favoritesList, setFavoritesList] = useState(() => {
        const saved = localStorage.getItem('@favorites');
        return saved ? JSON.parse(saved) : [];
    });


    useEffect(() => {
        localStorage.setItem('@favorites', JSON.stringify(favoritesList));
    }, [favoritesList]);

    return (
        <UserFavoritesContext.Provider
            value={{
                favoritesList,
                setFavoritesList
            }} >
            {children}
        </UserFavoritesContext.Provider>
    )
}

