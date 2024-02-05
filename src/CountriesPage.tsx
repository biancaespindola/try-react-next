// import Select from "@/components/ui/Select";

import { useEffect, useState } from "react";

const BASE_URL = "https://restcountries.com/v3.1";

const FILTRERABLE_CAPITALS = [
  "Tallinn",
  "Helsinki",
  "Stockholm",
  "Oslo",
  "Copenhagen",
  "Reykjavik",
] as const;
type Capital = (typeof FILTRERABLE_CAPITALS)[number];

interface Country {
  name: {
    common: string;
  };
  capital: Capital[];
}

// interface CountryCardProps {
//   country: Country[];
// }

// const ContryCard = (country: CountryCardProps) => (
//   <div>
//     <p key={name}>{country["country"]["name.common"]}</p>
//   </div>
// );

const CoutriesPage = () => {
  const [countries, setCountries] = useState<Country[]>([]);

  //   useEffect(() => {
  //     fetch(`${BASE_URL}/all`)
  //       .then((response) => response.json())
  //       .then((data) => {
  //         setCountries(data);
  //       });
  //   }, []);

  // useEffect(() => {
  //   const fetchCountries = async () => {
  //     try {
  //       const response = await fetch(`${BASE_URL}/all`);
  //       const data = await response.json();

  //       const countriesData = data.map((country: Country) => ({
  //         name: country.name,
  //         capital: country.capital,
  //       }));

  //       setCountries(countriesData);
  //     } catch (error) {
  //       console.error("Error fetching contry data", error);
  //     }
  //   };

  //   fetchCountries();
  // }, []);

  useEffect(() => {
    fetch(`${BASE_URL}/all`)
      .then((response) => response.json())
      .then((data) => {
        setCountries(data);
      });
  })

  return (
    <>
      <h1>Countries</h1>
      <div className="p-4">
        {countries.map((country) => (
          <>
            <p key={country.name.common}>
              {" "}
              {country.name.common}, {country.capital}{" "}
            </p>
            {/* <ContryCard key={country.name.common} country={country} /> */}
          </>
        ))}
      </div>
    </>
  );
};

export default CoutriesPage;
