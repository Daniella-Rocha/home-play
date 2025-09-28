import { useContext, useState } from "react";
import { UserFavoritesContext } from '../contexts/userFavorites';

const useFavorites = () => {

    const { favoritesList, setFavoritesList } = useContext(UserFavoritesContext);

    const toggleFavorite = (movie) => {
        const hasFav = favoritesList.some((favMovie) => favMovie.id === movie.id);

        if (hasFav) {
            const updatedList =  favoritesList.filter((favMovie) => favMovie.id !== movie.id);
            setFavoritesList(updatedList);
            localStorage.setItem('@favorites', JSON.stringify(updatedList));
            return;
        }
        const updateList = [...favoritesList, movie];
        localStorage.setItem('@favorites', JSON.stringify(updateList));
        setFavoritesList(updateList);
    }

    return {
        toggleFavorite,
        favoritesList
    }
}

export default useFavorites;
