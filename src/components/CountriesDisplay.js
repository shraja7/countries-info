import React from "react";
import "./CountriesDisplay.css";

const CountriesDisplay = ({ filteredCountries, onCountryClick }) => {
  const handleCountryClick = (countryName) => {
    console.log(countryName); // Log the name of the clicked country
    onCountryClick(countryName);
  };

  return (
    <div className="countries-display">
      {filteredCountries.map((country) => (
        <p
          key={country.cca2}
          onClick={() => handleCountryClick(country.name.common)}
        >
          {country.name.common}
          <span>
            <img
              src={`https://flagcdn.com/w320/${country.cca2.toLowerCase()}.png`}
              alt={`Flag of ${country.name.common}`}
            />
          </span>
        </p>
      ))}
    </div>
  );
};

export default CountriesDisplay;
