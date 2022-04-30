import { useEffect } from "react";
import { useWatch, useFormContext  } from "react-hook-form";
import { useDispatch } from "react-redux";
import { generatePath, useNavigate } from "react-router-dom";
import Loader from "../../../../components/loader";
import { addSearch } from "../../../../features/searchHistorySlice";
import { useFilm } from "../../../../hooks/use-film";
import { AppDispatch } from "../../../../store";
import { Title, Wrapper, Results, ResultItem } from "./styled";


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
        <Wrapper>
            <Title>Search results: {count}</Title>
            {isLoading ? <Loader /> : 
                <Results>
                    {
                        films.map((film: any) => {
                            const filmId = film.url.substring(film?.url.length-2, film?.url.length-1);
                            return <ResultItem key={filmId} onClick={() => navigate(generatePath(`/film/:id`, {id: filmId}))}>{film.title}</ResultItem>
                        })
                    }
                </Results>}
        </Wrapper>
    );
  }