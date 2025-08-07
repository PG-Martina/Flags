import classes from "./FlagsOverview.module.scss";
import { Link } from "react-router-dom";
import FlagCard from "../FlagCard/FlagCard";
import { useFlags } from "../../hooks/useFlags";
import Filters from "../Filters/Filters";
import { FormProvider, useForm, useWatch } from "react-hook-form";
import { FiltersSchema, type FilterForm } from "../Filters/validations";
import { useMemo } from "react";
import { zodResolver } from "@hookform/resolvers/zod";

function FlagsOverview() {
  const { data: flags, isError, isLoading } = useFlags();
  const methods = useForm<FilterForm>({
    resolver: zodResolver(FiltersSchema),
    mode: "onChange",
  });

  const filters = useWatch({
    control: methods.control,
  });

  const filteredFlags = useMemo(() => {
    return flags?.filter((flag) => {
      const matchedRegion =
        !filters.region ||
        filters.region?.value?.toLowerCase() === flag.region.toLowerCase();

      const matchedName =
        !filters.term ||
        flag.name.common.toLowerCase().includes(filters.term.toLowerCase());

      return matchedRegion && matchedName;
    });
  }, [flags, filters]);

  if (isError) {
    return <div>Something went wrong. Please try refreshing the page.</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={classes.flagsOverview}>
      <FormProvider {...methods}>
        <Filters />
      </FormProvider>
      {filteredFlags && filteredFlags.length > 0 && (
        <ul className={classes.flagsOverview__list}>
          {filteredFlags.map((flag) => (
            <li key={flag.name.common}>
              <Link to={`details/${flag.name.common}`}>
                <FlagCard flag={flag} />
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FlagsOverview;
