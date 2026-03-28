

export type Paises = {
  name: {
    common: string;
    official: string;
  };
  capital: string;
  subregion: string;
  languages: Record<string, string>;
  currencies: Record<string, { name: string; symbol: string }>;
  population: number;
  flags: {
    png: string;
    svg: string;
    alt?: string;
  };
}