import { useSelector } from "react-redux";
import { RootState } from "../store";

export default function usePreviousSearches() {
  const {searches} = useSelector((state: RootState) => state.searchHistory);

  return searches;
}
