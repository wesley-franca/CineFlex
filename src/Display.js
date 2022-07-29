import Movie from "./Movie.js"

import { useState, useEffect } from 'react';
import axios from "axios";


function Display() {
    const [movies, setMovies] = useState(null);
    
    useEffect(() => {
        const require = axios.get("https://mock-api.driven.com.br/api/v7/cineflex/movies");

        require.then(res => {
            setMovies(res.data);
        });
    }, []);

    if(movies !== null){
    return (
        movies.map((movie) => {
            return <Movie
                id={movie.id}
                posterURL={movie.posterURL}
                key={movie.id}
            />
        })
    )}else{
        return <div>carregando lista de filmes</div>
    }

}



export default Display;