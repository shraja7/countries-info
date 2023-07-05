import "./CountriesDisplay.css";

const CountriesDisplay = ({ filteredCountries }) => {
  return (
    <div className="countries-display">
      {filteredCountries.map((country) => (
        <p key={country.cca2} className="country-name">
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
