import { useEffect, useState } from "react";

import axios from 'axios';

const apiKey = import.meta.env.VITE_API_KEY;

export const useNowPlaying = async () => {

    const [nowPlaying, setNowPlaiyng] = useState([]);

    const getNowPlaying = async () => {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=pt-BR&page=1`);
        
        const data = await response.data.results;
        
        setNowPlaiyng(data);
    }
    useEffect(() => {
        getNowPlaying();
    }, []);
    
    return nowPlaying;
}