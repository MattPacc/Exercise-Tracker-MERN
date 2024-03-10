import React from 'react';
import Movie from './Movie';

function MovieList({ movies, onDelete }) {
    return (
        <table id="movies">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Year</th>
                    <th>Language</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {movies.map((movie, i) => <Movie movie={movie}
                    onDelete={onDelete}
                    key={i} />)}
            </tbody>
        </table>
    );
}

export default MovieList;
