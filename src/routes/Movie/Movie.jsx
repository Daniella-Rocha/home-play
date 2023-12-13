import { useEffect, useState } from "react";

import { useParams, useLocation } from "react-router-dom";

import { requestDataTmdb } from '../../axios/config';

const apiKey = import.meta.env.VITE_API_KEY;

import styles from './Movie.module.css';

import { Swiper, SwiperSlide } from 'swiper/react';

const Movie = () => {
    const { id } = useParams();

    const [movie, setMovie] = useState({});

    const [genresMovie, setGenresMovie] = useState([]);

    const [trailers, setTrailers] = useState([]);

    const [sinopseVisible, setSinopseVisible] = useState(false);

    const getMovie = async () => {
        const response = await requestDataTmdb(`${id}?api_key=${apiKey}&language=pt-BR`);

        const data = await response.data;

        if (data) {
            setMovie(data);

            setGenresMovie(data.genres);
        }
    }

    const getTrailers = async () => {
        const response = await requestDataTmdb(`${id}/videos?api_key=${apiKey}&language=pt-BR`);

        const data = await response.data.results;
        if (data) {
            setTrailers(data);
        }
    }

    useEffect(() => {
        getMovie();
    }, [id]);

    useEffect(() => {
        getTrailers();
    }, [id]);

    const showSinopse = () => {
        setSinopseVisible(!sinopseVisible);
    }

    return (
        movie &&
        <div
            className={styles.movie_banner}
            style={{ backgroundImage: `url('https://image.tmdb.org/t/p/original${movie.backdrop_path}')` }}
        >
            <div className={styles.movie_info}>
                <div className={styles.title}>
                    <h2>{movie.title}</h2>
                    <span>Gêneros: </span>
                        {genresMovie.map((genre) => 
                            <span key={genre.id}> {genre.name}</span>
                        )}
                </div>
                <div
                    className={styles.overview}
                >
                    <div>
                        <button
                            type="button"
                            onClick={showSinopse}
                        >
                            {
                                sinopseVisible ? 'Esconder sinopse'
                                    : 'Ver sinopse'
                            }
                        </button>
                    </div>
                    <p
                        className={
                            `${styles.sinopse}
                            ${sinopseVisible ? styles.visible : ''}`
                        }
                    >
                        {movie.overview}
                    </p>
                </div>
            </div>
            <div className={styles.trailers}>
                <h2>Trailers</h2>
                <div>
                    {trailers.length === 0 ?
                        (
                            <p>Não encontramos trailers deste filme.</p>
                        )
                        :
                        (
                            <Swiper>
                                {
                                    trailers.map((trailer) =>
                                        <SwiperSlide key={trailer.id}>
                                            <div>
                                                <iframe
                                                    src={`https://www.youtube.com/embed/${trailer.key}`}
                                                    allowFullScreen
                                                >

                                                </iframe>
                                            </div>
                                        </SwiperSlide>
                                    )
                                }
                            </Swiper>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Movie
