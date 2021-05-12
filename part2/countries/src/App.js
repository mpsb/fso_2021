import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Country from './components/Country';


function App() {
  const [ countries, setCountries ] = useState([]);
  const [ searchCountryName, setSearchCountryName ] = useState("");
  const [ displayCountry, setDisplayCountry ] = useState(false);
  const [ selectedCountry, setSelectedCountry ] = useState(Object);

  const weatherstackApiKey = process.env.REACT_APP_WEATHERSTACK_API_KEY;

  let countriesToShow = countries.filter(country => country.name.toLowerCase().includes(searchCountryName));

  useEffect(() => {
    const eventHandler = response => {
      setCountries(response.data);
      setDisplayCountry(false);
    }

    const promise = axios.get("https://restcountries.eu/rest/v2/all");

    promise.then(eventHandler);
  }, []);

  const handleCountryNameChange = (event) => {
    setSearchCountryName(event.target.value);
    setDisplayCountry(false);
  };

  const nonCountryDisplay = (
    <div>
      find countries <input onChange={handleCountryNameChange}/>
      <br></br>
      {(countriesToShow.length > 10 ? "Too many matches. Specify another filter." : countriesToShow.map(country => <div key={country.alpha3Code}>{country.name} <button value="view" onClick={() => {
        setDisplayCountry(!displayCountry);
        setSelectedCountry(country);
      }}>view</button></div>))
      }
    </div>
  );

  if(displayCountry === true) {
    let apiUrl = `http://api.weatherstack.com/current?access_key=${weatherstackApiKey}&query=${selectedCountry.capital}`;
    return <Country country= {selectedCountry} inputOnChangeFunction = {handleCountryNameChange} apiUrl={apiUrl}/>;
  }

  else {
    return (
      nonCountryDisplay
    );
  }
}

export default App;
