import { useEffect } from "react";

import { Link } from "react-router-dom";

import { LuMonitorPlay } from "react-icons/lu";

import styles from './SlideItem.module.css';

import FavoriteButton from "../FavoriteButton/FavoriteButton";

const SlideItem = ({ movie }) => {

    const { id, poster_path } = movie;

    useEffect(() => {
    }, [favList]);

    return (
        <div
            className={styles.slide_container}
            style={{ backgroundImage: `url("https://image.tmdb.org/t/p/w300${poster_path}")` }}
        >
            <div className={styles.slide_menu}>
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
                </div>
                <div>
                    <FavoriteButton />
                </div>
            </div>
        </div>
    )
}

export default SlideItem
