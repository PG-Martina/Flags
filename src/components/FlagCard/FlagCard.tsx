import type { Flag } from "../../types/flagTypes";
import classes from "./FlagCard.module.scss";

interface FlagCardProps {
  flag: Flag;
}

function FlagCard({ flag }: FlagCardProps) {
  return (
    <div className={classes.flagCard}>
      <img src={flag.flags.svg} alt={flag.flags.alt} />
      <div className={classes.flagCard__content}>
        <h2>{flag.name.common}</h2>
        <div className={classes.flagCard__info}>
          <span>
            <span className={classes.flagCard__bold}>Population:</span>{" "}
            {flag.population}
          </span>
          <span>
            <span className={classes.flagCard__bold}>Region:</span>{" "}
            {flag.region}
          </span>
          <span>
            <span className={classes.flagCard__bold}>Capital:</span>{" "}
            {flag.capital}
          </span>
        </div>
      </div>
    </div>
  );
}

export default FlagCard;
