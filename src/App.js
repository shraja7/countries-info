import { useState, useEffect } from "react";
import Search from "./components/Search";
import CountriesDisplay from "./components/CountriesDisplay";
import Country from "./components/Country";
import axios from "axios";
import "./App.css";

function App() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredCountry, setFilteredCountry] = useState(null);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    const url = "https://studies.cs.helsinki.fi/restcountries/api/all";
    axios.get(url).then((response) => {
      setCountries(response.data);
    });
  }, []);

  const filteredCountries = countries.filter((country) => {
    const searchInput = search.toLowerCase().trim(); // Trim the search input
    return country.name.common.toLowerCase().includes(searchInput);
  });

  const handleCountryClick = (countryName) => {
    setSearch(countryName);
  };

  return (
    <div className="App">
      <h1>Countries Info</h1>
      <Search search={search} handleSearch={handleSearch} />
      <CountriesDisplay
        filteredCountries={filteredCountries}
        onCountryClick={handleCountryClick}
      />
      {filteredCountries.length === 1 && (
        <Country country={filteredCountries[0]} />
      )}
    </div>
  );
}

export default App;
