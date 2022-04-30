import { useForm, FormProvider  } from "react-hook-form";
import { SearchBar } from "../../components/forms";
import PreviousSearches from "./components/previous-searches";
import SearcResults from "./components/search-results";

type FormData = {
    filmTitle: string;
  };


export default function HomePage() {
  const methods = useForm<FormData>();

  return (
    <FormProvider {...methods}>
      <form>
        <SearchBar />
        <SearcResults />
        <PreviousSearches />
      </form>
    </FormProvider>
  );
}
