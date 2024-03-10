import React from 'react';
import { MdDeleteForever } from 'react-icons/md';

function Movie({ movie, onDelete }) {
    return (
        <tr>
            <td>{movie.title}</td>
            <td>{movie.year}</td>
            <td>{movie.language}</td>
            <td>Edit</td>
            <td>< MdDeleteForever onClick ={() => onDelete(movie._id)} /></td>
        </tr>
    );
}

export default Movie;