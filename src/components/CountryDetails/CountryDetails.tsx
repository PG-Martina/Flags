import type { Country } from "../../types/flagTypes";
import Borders from "../Borders/Borders";
import classes from "./CountryDetails.module.scss";

interface CountryDetailsProps {
  country: Country;
}

function CountryDetails({ country }: CountryDetailsProps) {
  const nativeNames = country.name.nativeName;
  const currencyNames = country.currencies;
  return (
    <div className={classes.countryDetails}>
      <div className={classes.countryDetails__image}>
        <img src={country.flags.svg} alt={country.flags.alt} />
      </div>
      <div className={classes.countryDetails__details}>
        <div className={classes.countryDetails__cols}>
          <div className={classes.countryDetails__left}>
            <h1>{country.name.common}</h1>
            <span>
              <span className="bold">Native Name: </span>
              {nativeNames[Object.keys(nativeNames)[0]].common}
            </span>
            <span>
              <span className="bold">Population: </span>
              {country.population}
            </span>
            <span>
              <span className="bold">Region: </span>
              {country.region}
            </span>
            <span>
              <span className="bold">Sub Region: </span>
              {country.subregion}
            </span>
            <span>
              <span className="bold">Capital: </span>
              {country.capital}
            </span>
          </div>
          <div className={classes.countryDetails__right}>
            <span>
              <span className="bold">Top Level Domain: </span>
              {country.tld}
            </span>
            <span>
              <span className="bold">Currencies: </span>
              {currencyNames[Object.keys(currencyNames)[0]].name}
            </span>
            <span>
              <span className="bold">Languages: </span>
              {Object.values(country.languages).map((lang, index, arr) => (
                <span key={index}>{`${lang}${
                  index < arr.length - 1 ? ", " : ""
                }`}</span>
              ))}
            </span>
          </div>
        </div>
        {country.borders && country.borders.length > 0 && (
          <Borders borders={country.borders} />
        )}
      </div>
    </div>
  );
}

export default CountryDetails;
