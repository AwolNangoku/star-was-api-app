import React from 'react';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Loader from '../../components/loader';
import { useFilmId } from '../../hooks/use-film-id';

function Film() {
    const {id} = useParams();
    const film = useFilmId(id);

    return film ? (
        <div>
          <h2>Film Details</h2>
            <ul>
                <li>Title: {film.title}</li>
                <li>Release date: {film.release_date}</li>
                <li>Producer: {film.producer}</li>
                <li>Director: {film.director}</li>
            </ul>

            <NavLink to="/">Back to Home</NavLink>
        </div>
    ): <Loader />
}

export default Film;
