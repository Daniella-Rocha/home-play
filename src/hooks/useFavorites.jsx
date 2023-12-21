import { useEffect, useState } from "react";

const useFavorites = () => {
    const [favList, setFavList] = useState(() => {
        const favMovies = JSON.parse(localStorage.getItem('favorites'));

        return favMovies ? favMovies : [];
    });

    const toggleFavs = (newFav) => {

        if (favList.some(fav => fav.id === newFav.id)) {
            const updatedFavs = favList.filter((fav) => fav !== newFav);

            setFavList([...updatedFavs]);
        } else {
            setFavList([...favList, { ...newFav }]);
        }
    }

    useEffect(() => {
        // localStorage.setItem('favorites', JSON.stringify(favList));
    }, [favList]);

    return {
        toggleFavs,
        favList
    }
}

export default useFavorites;
