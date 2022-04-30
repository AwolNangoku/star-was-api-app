import { useFormContext  } from "react-hook-form";

type FormData = {
    filmTitle: string;
  };

export default function SearchBar() {
  const { register } = useFormContext<FormData>();
  return(
    <div>
      <h2>Search film using film title</h2>
      <div>
          <input {...register("filmTitle")} placeholder="Enter film title" />
        </div>
    </div>
  )
}