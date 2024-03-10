import React from 'react';
import { Link } from 'react-router-dom';
import MovieList from '../components/MovieList';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
    const [movies, setMovies] = useState([]);

    const onDelete = async _id => {
        const response = await fetch('/movies/${_id}', {method: 'DELETE'})
        if (response.status === 200) {
            const newMovies = movies.filter(m => m._id !== _id);
            setMovies(newMovies);
        } else{
            console.error('Failed to delete movie with _id = ${_id}, ststus code = ${response.status}')
        }
    }

    const loadMovies = async () =>{
        const response = await fetch('/movies');
        const data = await response.json();
        setMovies(data);
    }

    useEffect(() => {
        loadMovies();
    },[]);

    return (
        <>
            <h2>List of Movies</h2>
            <MovieList movies={movies} onDelete={onDelete}></MovieList>
            <Link to="/add-movie">Add a movie</Link>
        </>
    );
}

export default HomePage;