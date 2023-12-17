import { useState, useContext } from "react";

import { Link } from "react-router-dom";

import { UserFavoritesContext } from '../../contexts/useFavorites';

import useFavorite from '../../hooks/useFavorites';

import { LuMonitorPlay } from "react-icons/lu";

import { FaRegHeart } from "react-icons/fa";

import { FaHeart } from "react-icons/fa6";

import styles from './SlideItem.module.css';

const SlideItem = ({ movie }) => {

    const { title, backdrop_path, id } = movie;

    const [isFav, setIsFav] = useState(false);

    const [getFavoritesList] = useContext(UserFavoritesContext);

    const { favList, setFavList, defineFavoritesList } = useFavorite();

    const isFavorite = (movie) => {
        setIsFav(!isFav);
        if (!isFav) {
            const favorite = favList.filter((fav, index, array) =>
                array.indexOf(fav) !== index);
            setFavList((prevState) => {
                return prevState,
                    { ...favorite }
            });
            defineFavoritesList();
            
        } else{
            setIsFav(!isFav);
        }

    }


    return (
        <div
            className={styles.slide_cover}>
            <img src={`https://image.tmdb.org/t/p/w300${backdrop_path}`} alt={`imagem da capa do filme${title}`} />

            <div className={styles.slide_menu}
                style={{ backgroundImage: `url('https://image.tmdb.org/t/p/w300${backdrop_path}')` }}
            >
                <div>
                    <h3>{title}</h3>
                </div>
                <div>
                    <button
                        type="button"
                    >
                        <Link to={`/movie/${id}`}>
                            <LuMonitorPlay />
                        </Link>
                    </button>
                    <button
                        type="button"
                        onClick={() => isFavorite(movie)}
                    >
                        {
                            isFav ? <FaHeart
                                className={`${isFav ? styles.fav : ''}`}
                            />
                                :
                                <FaRegHeart />
                        }

                    </button>
                </div>
            </div>
        </div>
    )
}

export default SlideItem
