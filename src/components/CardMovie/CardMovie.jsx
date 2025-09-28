import { useState, useContext } from "react";

import { Link } from "react-router-dom";

import { BsCollectionPlayFill } from "react-icons/bs";

import styles from './CardMovie.module.css';

import FavoriteButton from "../FavoriteButton/FavoriteButton";

import useFavorites from "../../hooks/useFavorites";

const CardMovie = ({ movie }) => {

    const { favoritesList, toggleFavorite } = useFavorites();

    const isFav = favoritesList.some(fav => fav.id === movie.id);

    const { title, id, poster_path } = movie;

    const handleClick = () =>{
        toggleFavorite(movie);
    }

    return (
        <div
            className={styles.slide_container}
            style={{ backgroundImage: `url("https://image.tmdb.org/t/p/w300${poster_path}")` }}
        >
            <div className={styles.slide_menu}>
                <h5>{title}</h5>
                <div>
                    <button
                        type="button"
                        className={styles.play}
                        value={"assistir"}
                    >
                        <Link to={`/movie/${id}`}>
                            <BsCollectionPlayFill />
                        </Link>
                    </button>
                    <FavoriteButton
                        toFavorite={handleClick}
                        isFav={isFav}
                    />
                </div>
            </div>
        </div>
    )
}

export default CardMovie;
