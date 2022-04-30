import React from 'react';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Loader from '../../components/loader';
import { PageLayout } from '../../components/structure';
import { useFilmId } from '../../hooks/use-film-id';
import { ResultItem, Results, ItemContent } from './styled';

export default function Film() {
    const {id} = useParams();
    const film = useFilmId(id);

    return (
        <PageLayout title='Film Details'>
            {film ? (
                <>
                    <Results>
                        <ResultItem>Title: <ItemContent>{film.title}</ItemContent></ResultItem>
                        <ResultItem>Release date: <ItemContent>{film.release_date}</ItemContent></ResultItem>
                        <ResultItem>Producer:  <ItemContent>{film.producer}</ItemContent></ResultItem>
                        <ResultItem>Director: <ItemContent>{film.director}</ItemContent></ResultItem>
                    </Results>
                    <NavLink to="/">Back to Home</NavLink>
                </>
            ) : <Loader />}
        </PageLayout>
    )
}
