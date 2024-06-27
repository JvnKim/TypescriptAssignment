// src/api/countriesAPI.ts
import axios from "axios";
import { Country } from "../types/Country";

const BASE_URL = "https://restcountries.com/v3.1";

export const getAllCountries = async (): Promise<Country[]> => {
  try {
    const response = await axios.get<Country[]>(`${BASE_URL}/all`);
    return response.data;
  } catch (error) {
    console.error("Error fetching countries data: ", error);
    throw error;
  }
};
