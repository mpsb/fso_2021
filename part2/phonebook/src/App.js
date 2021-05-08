import React, { useState, useEffect } from 'react'
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import axios from 'axios';

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ showAll, setShowAll ] = useState(true)
  const [ nameFilter, setNameFilter ] = useState('')

  console.log(showAll);
  console.log(nameFilter);

  const personsToShow = showAll ? persons : persons.filter(person => person.name.includes(nameFilter))

  console.log(personsToShow);

  const handleNameChange = (event) => {
    console.log(event.target.value);
    setNewName(event.target.value);
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value);
    setNewNumber(event.target.value);
  }

  const handleFilterChange = (event) => {
    setNameFilter(event.target.value);

    if (nameFilter === '') {
      setShowAll(true);
    }
    else{
      setShowAll(false);
    }
  }

  const AddName = (event) => {
    event.preventDefault();
    console.log(persons);

    const nameCheck = persons.map((person) => newName === person.name);

    console.log(nameCheck)

    if(nameCheck.includes(true)) {
      window.alert(`${newName} is already added to phonebook`);
      return;
    }

    else {
      const personObject = {
        name: newName,
        number: newNumber,
        date: new Date().toISOString(),
        id: persons.length + 1,
      }
  
      setPersons(persons.concat(personObject));
      setNewName('');
  
      console.log(persons);
    }
  }

  useEffect(() => {
    const eventHandler = response => {
      setPersons(response.data);
    }

    const promise = axios.get("http://localhost:3001/persons");

    promise.then(eventHandler);
  }, []);

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter changeFunction={handleFilterChange}/>
      <h2>Add new entry:</h2>
      <PersonForm onNameChangeFunction={handleNameChange} onNumberChangeFunction={handleNumberChange} onSubmitFunction={AddName}/>
      <h2>Numbers</h2>
      <Persons personsArray={personsToShow}/>
    </div>
  )
}

export default App