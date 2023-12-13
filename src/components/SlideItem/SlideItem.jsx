import { Link } from "react-router-dom";

import { LuMonitorPlay } from "react-icons/lu";

import { FaRegHeart } from "react-icons/fa";

import styles from './SlideItem.module.css';

const SlideItem = ({ movie }) => {
    const { title, backdrop_path, id } = movie;

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
                    <button type="button">
                        <Link to={`/movie/${id}`}>
                            <LuMonitorPlay />
                        </Link>
                    </button>
                    <button type="button">
                        <FaRegHeart />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SlideItem
