interface FlagName {
  common: string;
  official: string;
  nativeName: { [key: string]: { official: string; common: string } };
}

export interface Flag {
  name: FlagName;
  population: number;
  region: string;
  capital: string[];
  flags: { png: string; svg: string; alt: string };
  cca3: string;
}

export interface Country extends Flag {
  subregion: string;
  tld: string[];
  currencies: { [key: string]: { symbol: string; name: string } };
  languages: { [key: string]: string };
  borders: string[];
}

export interface Option {
  value: string;
  label: string;
}
