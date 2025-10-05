import { useContext } from "react";

import useFavorites from "../../hooks/useFavorites";
import styles from './Favorites.module.css';
import { Link } from "react-router-dom";
import CardMovie from "../../components/CardMovie/CardMovie";

const Favorites = () => {
  const { favoritesList } = useFavorites();

  return (
    <section className={styles.container}>
      {
        favoritesList.map((movie, index) =>
          <div key={index} className={styles.favorite_movie}>
            <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={`Capa do filme ${movie.title}`} className={styles.movie_cover} />
            <div className={styles.movie_info}>
              <h3>{movie.title}</h3>
              <div className={styles.actions}>
                <Link to={`/movie/${movie.id}`}>Sobre</Link>
                <button>Excluir</button>
              </div>
            </div>
          </div>
        )
      }
    </section>
  )
}

export default Favorites;
