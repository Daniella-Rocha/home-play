import { useState, useContext, useEffect } from "react";

import { Link } from "react-router-dom";

// import { UserFavoritesContext } from '../../contexts/useFavorites';

import useFavorite from '../../hooks/useFavorites';

import { LuMonitorPlay } from "react-icons/lu";

import { FaRegHeart } from "react-icons/fa";

import { FaHeart } from "react-icons/fa6";

import styles from './SlideItem.module.css';
import FavoriteButton from "../FavoriteButton/FavoriteButton";

const SlideItem = ({ movie }) => {

    const { title, backdrop_path, id, poster_path } = movie;

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
                        value={'assistir'}
                    >
                        <Link to={`/movie/${id}`}>
                            <LuMonitorPlay />
                        </Link>
                    </button>
                    <FavoriteButton />
                </div>
            </div>
        </div>
    )
}

export default SlideItem
