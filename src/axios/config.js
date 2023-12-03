import axios from 'axios';

const apiKey = import.meta.env.VITE_API_KEY;
const urlMovies = import.meta.env.VITE_API;
const popularMovies = import.meta.env.VITE_API_POPULAR_MOVIES;
const urlSearchMovies = import.meta.env.VITE_SEARCH;
const urlImgMovies = import.meta.env.VITE_IMG;
const globalUrl = import.meta.env.VITE_API;

export const requestDataTmdb = axios.create({
    baseURL: globalUrl,
    headers: {
        "accept": "application/json"
    }
})

export const requestDataMovies = axios.create({
    baseURL: urlMovies,
    headers: {
        "Content-Type": "application/json",
    }
});

export const requestDataPopularMovies = axios.create({
    baseURL: popularMovies,
    headers: {
        "Content-Type": "application/json",
    }
});

export const requestSearchDataMovie = axios.create({
    baseURL: urlSearchMovies,
    headers: {
        "Content-Type": "application/json",
    }
});

export const requestNowPlaying = axios.create({
    baseURL: "https://api.themoviedb.org/3/movie/now_playing",
    headers: {
        "Content-Type": "application/json",
    }
})

export const requestForAllMovieLists = axios.create({
    baseURL: `https://api.themoviedb.org/3/list/multi?api_key=${apiKey}&list_types=now_playing,popular,top_rated,upcoming`,
    headers: {
        "Content-Type": "application/json",
    }
})

export const requestImageDataMovie = axios.create({
    baseURL: urlImgMovies,
    headers: {
        "Content-Type": "application/json",
    }
});

