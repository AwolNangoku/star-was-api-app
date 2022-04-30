import { useFormContext  } from "react-hook-form";
import { SearchInput } from "./styled";

type FormData = {
    filmTitle: string;
  };

export default function SearchBar() {
  const { register } = useFormContext<FormData>();
  return(
    <SearchInput {...register("filmTitle")} placeholder="Enter film title" />
  )
}