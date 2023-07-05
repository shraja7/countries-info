import React from "react";
import "./Country.css";

const Country = ({ country }) => {
  return (
    <div className="country-container">
      <h2>{country.name.common}</h2>
      <p>Capital: {country.capital}</p>
      <p>Population: {country.population}</p>
      <h3>Languages</h3>
      <ul>
        {Object.values(country.languages).map((language) => (
          <li key={language}>{language}</li>
        ))}
      </ul>

      <img
        src={`https://flagcdn.com/w320/${country.cca2.toLowerCase()}.png`}
        alt={`Flag of ${country.name.common}`}
        className="country-flag"
      />

      {/* Display other country details here */}
    </div>
  );
};

export default Country;
