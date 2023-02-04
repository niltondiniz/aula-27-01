import React, { useState, useEffect } from 'react';
import { Container, MovieList, Movie } from './styles';
import { API_URL, API_KEY, API_IMAGE } from '../../config/config';
import { Link } from 'react-router-dom';

export default function Home(){

    const [movies, setMovies] = useState<any[]>([])   

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon`)
        .then(response => response.json())
        .then(data => setMovies(data.results))
    },[])


    return (
        <Container>
            <h1>Pokemon</h1>
            <MovieList>
                {
                    movies.map(pokemon => {  
                        const pokeId = pokemon.url.split('/')                        
                        return (
                            <Movie>    
                                <Link to={`/details/${pokeId[6]}`}>
                                    <img src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokeId[6]}.svg`} alt={pokemon.name} />
                                </Link>
                                <span>{pokemon.name}</span>
                            </Movie>
                        )
                    })
                }
                                                        
            </MovieList>
        </Container>
    )
}
