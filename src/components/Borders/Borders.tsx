import { useFlags } from "../../hooks/useFlags";
import type { Flag } from "../../types/flagTypes";
import classes from "./Borders.module.scss";

interface BordersProps {
  borders: string[];
}

function Borders({ borders }: BordersProps) {
  const { data: flags } = useFlags();
  const borderCountries: Flag[] | undefined = flags?.filter((flag) =>
    borders.includes(flag.cca3)
  );
  return (
    <div className={classes.borders}>
      <span className="bold">Border Countries: </span>
      {borderCountries &&
        borderCountries.length > 0 &&
        borderCountries.map((country) => (
          <div key={country.name.common} className={classes.borders__country}>
            {country.name.common}
          </div>
        ))}
    </div>
  );
}

export default Borders;
