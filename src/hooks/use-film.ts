import useSWR from "swr";
import { requestGET } from "../utils/api-requests";

export function useFilm(filmTitle: string) {
  const filmTitleKey = filmTitle
    ? [`https://swapi.dev/api/films/?search=${filmTitle}`]
     : null;

  const { data: films } = useSWR(filmTitleKey, (url: string) =>
    requestGET({ url })
  );


  return {
      films: filmTitle && films ? films.results : [],
      isLoading: !films && filmTitleKey,
      count: films ? films.count : 0,
    };
}
