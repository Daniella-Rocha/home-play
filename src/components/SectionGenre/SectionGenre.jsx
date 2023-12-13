import { useEffect, useState } from "react";

import CarouselSlides from '../../components/Carousel/CarouselSlides';

import axios from 'axios';

const apiKey = import.meta.env.VITE_API_KEY;

import styles from './SectionGenre.module.css';

const SectionGenre = ({ genre }) => {
    
    const [movieByGenre, setMovieByGenre] = useState([0]);

    const getMovieByGenre = async (genreId) => {
        const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=pt-BR&with_genres=${genreId}`);

        const data = response.data.results;
        
        setMovieByGenre(data);
    }

    useEffect(() => {
        getMovieByGenre(genre.id);
    }, []);

    return (
        <div className={styles.container}>
            <h2>{genre.name}</h2>
            <CarouselSlides movieList={movieByGenre}/>
        </div>
    )
}

export default SectionGenre
