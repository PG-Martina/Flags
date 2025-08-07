import classes from "./Filters.module.scss";
import SelectDropdown from "../Select/Select";
import { useFormContext } from "react-hook-form";
import type { FilterForm } from "./validations";

function Filters() {
  const { register } = useFormContext<FilterForm>();
  const options = [
    {
      value: "africa",
      label: "Africa",
    },
    {
      value: "americas",
      label: "Americas",
    },
    {
      value: "asia",
      label: "Asia",
    },
    {
      value: "europe",
      label: "Europe",
    },
    {
      value: "oceania",
      label: "Oceania",
    },
  ];

  return (
    <form noValidate className={classes.filters}>
      <div className={classes.filters__search}>
        <span className={`${classes.filters__icon} material-icons`}>
          search
        </span>
        <input
          type="text"
          {...register("term")}
          placeholder="Search for a country..."
        />
      </div>
      <SelectDropdown name="region" options={options} />
    </form>
  );
}

export default Filters;
