export type Country = {
  name: {
    common: string;
    official: string;
  };
  cca3: string;
  capital: string;
  region: string;
  flags: {
    png: string;
    svg: string;
  };
};
