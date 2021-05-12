import Weather from './Weather';

const Country = ({country, inputOnChangeFunction, apiUrl}) => {
  return(
        <div>
        find countries <input onChange={inputOnChangeFunction}/>
        <br></br>
        <h1>{country.name}</h1>
        <p>capital {country.capital}</p>
        <p>population {country.population}</p>
        <h2>languages</h2>
        <ul>
          {country.languages.map(language => <li>{language.name}</li>)}
        </ul>
        <img src={country.flag} alt="flag" width="200" height="200"/>
        <Weather country={country} apiUrl={apiUrl}/>
      </div>
    );
}

export default Country;