import Movie from "./Movie.js"

import Spinner from "./assets/images/Spinner.gif";

import { useState, useEffect } from 'react';
import axios from "axios";
import styled from "styled-components"


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
        return <Load>
            <img src={Spinner} alt="" />
        </Load>
    }

}

const Load = styled.div`
    height: 60vh;
    display: flex;
    align-items: center;
    justify-content: center;
`


export default Display;