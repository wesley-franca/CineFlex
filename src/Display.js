import Movie from "./Movie.js"

import { useState, useEffect } from 'react';
import axios from "axios";


function Display() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const require = axios.get("https://mock-api.driven.com.br/api/v7/cineflex/movies");

        require.then(res => {
            setMovies(res.data);
        });
    }, []);

    return (
        movies.map((movie)=> {
        return <Movie
            Id={movie.id}
            overview={movie.overview}
            posterURL={movie.posterURL}
            releaseDate={movie.releaseDate}
            title={movie.title}
            key={movie.id}
        />
    })     
    )
}



export default Display;