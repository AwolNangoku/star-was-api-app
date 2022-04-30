import { useFormContext  } from "react-hook-form";
import usePreviousSearches from "../../../hooks/use-previous-searches";

type FormData = {
    filmTitle: string;
  };

export default function PreviousSearches(){
    const searches = usePreviousSearches();
    const { setValue } = useFormContext<FormData>();

    return(
      <div>
        <h2>Previous searches</h2>
        {searches.map((({title}) => (
          <li 
            key={title}
            onClick={() => setValue('filmTitle', title)}
          >{title}</li>)))}
      </div>
    )
}