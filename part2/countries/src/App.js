import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Country from './components/singleCountry';

function App() {
  const [ countries, setCountries ] = useState([]);
  const [ searchCountryName, setSearchCountryName ] = useState("");

  let countriesToShow = countries.filter(country => country.name.toLowerCase().includes(searchCountryName));

  useEffect(() => {
    const eventHandler = response => {
      setCountries(response.data);
    }

    const promise = axios.get("https://restcountries.eu/rest/v2/all");

    promise.then(eventHandler);
  }, []);

  const handleCountryNameChange = (event) => {
    setSearchCountryName(event.target.value);
  };

  const showCountry = (country) => {
    return (Country(country));
  }

  console.log(countriesToShow);

  return (
    <div>
      find countries <input onChange={handleCountryNameChange}/>
      <br></br>
      {(countriesToShow.length > 10 ? "Too many matches. Specify another filter." : countriesToShow.map(country => <div key={country.alpha3Code}>{country.name} <button onClick={showCountry(country)}>view</button></div>))
      }
    </div>
  );
}

export default App;
