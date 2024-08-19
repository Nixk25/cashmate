import { useEffect, useState } from "react";

export const useCountries = () => {
  const [countries, setCountries] = useState<
    { name: string; code: string; flag: string }[]
  >([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        if (!response.ok) {
          throw new Error("Failed to fetch countries");
        }
        const data = await response.json();
        const countriesList = data.map((country: any) => ({
          name: country.name.common,
          code: country.cca2,
          flag: country.flags.svg,
        }));
        countriesList.sort((a: any, b: any) => a.name.localeCompare(b.name));
        setCountries(countriesList);
      } catch (err: any) {
        throw new Error(err);
      }
    };

    fetchCountries();
  }, []);

  return { countries };
};
