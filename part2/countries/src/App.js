import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [ countries, setCountries ] = useState([]);

  useEffect(() => {
    const eventHandler = response => {
      setCountries(response.data);
    }

    const promise = axios.get("http://localhost:3001/persons");

    promise.then(eventHandler);
  }, []);

  return (
    <div className="App">
      <input type="text">find countries</input>
      {countries}
    </div>
  );
}

export default App;
