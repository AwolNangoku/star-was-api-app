import { useEffect } from "react";
import { useWatch, useFormContext  } from "react-hook-form";
import { useDispatch } from "react-redux";
import { generatePath, useNavigate } from "react-router-dom";
import Loader from "../../../components/loader";

import { addSearch } from "../../../features/searchHistorySlice";
import { useFilm } from "../../../hooks/use-film";
import { AppDispatch } from "../../../store";

type FormData = {
    filmTitle: string;
  };

export default function SearcResults() {
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();

    const { control } = useFormContext<FormData>()

    const filmTitle = useWatch({
      control,
      name: "filmTitle",
    });

    const {films, count, isLoading} = useFilm(filmTitle);

    useEffect(() => {
      if (filmTitle?.length > 0 && count > 0) {
        dispatch(addSearch({title: filmTitle}))
      }
    })
  
    return (
        <div>
            <h2>Search results: {count}</h2>
            {isLoading ? <Loader /> : films.map((film: any) => {
                const filmId = film.url.substring(films[0]?.url.length-2, films[0]?.url.length-1);
                return <li key={filmId} onClick={() => navigate(generatePath(`/film/:id`, {id: filmId}))}>{film.title}</li>
            })}
                `   `
        </div>
    );
  }