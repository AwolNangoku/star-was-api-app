import { useFormContext  } from "react-hook-form";
import { Title } from "./styled";

type FormData = {
    filmTitle: string;
  };

export default function SearchBar() {
  const { register } = useFormContext<FormData>();
  return(
    <div>
      <Title>Search film using film title</Title>
      <input {...register("filmTitle")} placeholder="Enter film title" />
    </div>
  )
}