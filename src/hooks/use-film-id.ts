import useSWR from "swr";
import { requestGET } from "../utils/api-requests";

export function useFilmId(filmId?: string ) {
  const filmIdKey = filmId ? `https://swapi.dev/api/films/${filmId}/` : null;

  const { data: film } = useSWR(filmIdKey, (url: string) =>
    requestGET({ url })
  );

  return film;
}
