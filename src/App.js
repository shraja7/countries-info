import { useState, useEffect } from "react";
import Search from "./components/Search";
import axios from "axios";

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
    const searchInput = search.toLowerCase();
    return country.name.common.toLowerCase().includes(searchInput);
  });

  return (
    <div className="App">
      <h1>Countries Info</h1>
      <Search search={search} handleSearch={handleSearch} />
      {filteredCountries.map((country) => (
        <p key={country.cca2}>{country.name.common}</p>
      ))}
    </div>
  );
}

export default App;
