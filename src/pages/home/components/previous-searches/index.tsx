import { useFormContext  } from "react-hook-form";
import usePreviousSearches from "../../../../hooks/use-previous-searches";
import { ResultItem, Results, Title } from "./styled";

type FormData = {
    filmTitle: string;
  };

export default function PreviousSearches(){
    const searches = usePreviousSearches();
    const { setValue } = useFormContext<FormData>();

    return(
      <Results>
        <Title>Previous searches {searches.length}</Title>
        {searches.map((({title}) => (
          <ResultItem 
            key={title}
            onClick={() => setValue('filmTitle', title)}
          >
              {title}
        </ResultItem>)))}
      </Results>
    )
}