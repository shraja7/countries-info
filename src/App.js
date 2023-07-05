import { useState, useEffect } from "react";
import Search from "./components/Search";
import CountriesDisplay from "./components/CountriesDisplay";
import axios from "axios";
import "./App.css"; // Import CSS file for App.js styling

function App() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");

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
    const searchInput = search.toLowerCase().trim();
    return country.name.common.toLowerCase().includes(searchInput);
  });

  return (
    <div className="App">
      <h1>Countries Info</h1>
      <Search search={search} handleSearch={handleSearch} />
      <CountriesDisplay filteredCountries={filteredCountries} />
    </div>
  );
}

export default App;
