import { useForm, FormProvider  } from "react-hook-form";
import { SearchBar } from "../../components/forms";
import { PageLayout } from "../../components/structure";
import PreviousSearches from "./components/previous-searches";
import SearcResults from "./components/search-reseults";

type FormData = {
    filmTitle: string;
  };


export default function HomePage() {
  const methods = useForm<FormData>();

  return (
    <PageLayout title="Enter film title:">
      <FormProvider {...methods}>
        <form>
          <SearchBar />
          <SearcResults />
          <PreviousSearches />
        </form>
      </FormProvider>
    </PageLayout>
  );
}
