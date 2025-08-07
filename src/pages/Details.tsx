import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import { getCountryByName } from "../services/flagServices";
import type { Country } from "../types/flagTypes";
import CountryDetails from "../components/CountryDetails/CountryDetails";

function Details() {
  const { flagName } = useParams();
  const {
    data: country,
    isError,
    isLoading,
  } = useQuery<Country>({
    queryKey: ["country", flagName],
    queryFn: () => getCountryByName(flagName!),
  });
  if (isError) return <div>Something went wrong. Try again later.</div>;
  if (isLoading) return <div>Loading...</div>;
  return (
    <section>
      <Link to="../" className="back-button">
        <span className="material-icons">west</span> Back
      </Link>
      {country && <CountryDetails country={country} />}
    </section>
  );
}

export default Details;
