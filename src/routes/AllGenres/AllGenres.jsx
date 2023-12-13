import { useEffect, useState } from 'react';

import axios from 'axios';

import SectionGenre from '../../components/SectionGenre/SectionGenre';

const apiKey = import.meta.env.VITE_API_KEY;

import styles from './AllGenres.module.css';

const AllGenres = () => {
    const [genres, setGenres] = useState([]);

    const getAllGenres = async () => {
        const response = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=pt-BR`);

        const data = await response.data.genres;

        setGenres(data);
    }

    useEffect(() => {
        getAllGenres();
    }, []);

    return (
        <div className={styles.all_container}>
            <h3>Lista de todos os gêneros</h3>
            {
                genres
                .map((genre) =>
                    <SectionGenre key={genre.id} genre={genre}/>
                )
            }
        </div>
    )
}

export default AllGenres
