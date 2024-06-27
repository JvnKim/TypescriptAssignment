import React from "react";
import { Country } from "../types/Country";
import styled from "styled-components";

const CardContainer = styled.div`
  border: 1px solid black;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
  cursor: pointer;
  width: 300px;
  text-align: center;

  &:hover {
    background-color: #f0f0f0;
    color: black;
    border: 1px solid #ccc;
  }
`;

const FlagImage = styled.img`
  width: 150px;
  height: auto;
  border-radius: 4px;
  margin-top: 8px;
`;

export type CountryCardProps = {
  country: Country;
  onClick: () => void;
  isSelected: boolean;
};

const CountryCard: React.FC<CountryCardProps> = ({
  country,
  onClick,
  isSelected,
}) => {
  return (
    <CardContainer
      className={`country-card ${isSelected ? "selected" : ""}`}
      onClick={onClick}
    >
      <FlagImage src={country.flags.svg} alt={`${country.name.common} flag`} />
      <h3>{country.name.common}</h3>
      <p>Capital: {country.capital}</p>
      <p>Region: {country.region}</p>
    </CardContainer>
  );
};

export default CountryCard;
