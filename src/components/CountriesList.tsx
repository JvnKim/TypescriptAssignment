// src/components/CountriesList.tsx
import { useEffect, useState } from "react";
import { getAllCountries } from "../api/countriesAPI";
import { Country } from "../types/Country";
import axios from "axios";
import CountryCard from "./CountryCard";

const CountriesList: React.FC = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCountries, setSelectedCountries] = useState<Country[]>([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const data: Country[] = await getAllCountries();
        setCountries(data);
        setLoading(false);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          setError(error.message);
        } else {
          setError("error");
        }
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  const handleCountryCardClick = (clickedCountry: Country) => {
    const isCountrySelected = selectedCountries.some(
      (country) => country.cca3 === clickedCountry.cca3
    );

    if (isCountrySelected) {
      setSelectedCountries(
        selectedCountries.filter(
          (country) => country.cca3 !== clickedCountry.cca3
        )
      );
      setCountries([...countries, clickedCountry]);
    } else {
      setCountries(
        countries.filter((country) => country.cca3 !== clickedCountry.cca3)
      );
      setSelectedCountries([...selectedCountries, clickedCountry]);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data: {error}</p>;

  return (
    <div>
      <h1>Selected Countries</h1>
      <div>
        {selectedCountries.map((country: Country) => (
          <div key={country.cca3}>
            <CountryCard
              country={country}
              onClick={() => handleCountryCardClick(country)}
              isSelected={selectedCountries.some(
                (c) => c.cca3 === country.cca3
              )}
            />
          </div>
        ))}
      </div>
      <h1>Countries List</h1>
      <div>
        {countries.map((country: Country) => (
          <div key={country.cca3}>
            <CountryCard
              country={country}
              onClick={() => handleCountryCardClick(country)}
              isSelected={selectedCountries.some(
                (c) => c.cca3 === country.cca3
              )}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountriesList;
