import { assertExpressionStatement } from '@babel/types'
import React, { useState, useEffect } from 'react'
import Filter from './components/filter'
import PersonForm from './components/personform'
import Persons from './components/persons'
import axios from "axios"

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])

  useEffect(()=>{
    axios.get("http://localhost:3001/persons").then(
      response=>{
        setPersons(response.data)
      }
    )
  },[])

  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ search, setSearch ] = useState('')

  const inputHandler=(e)=>{
    setNewName(e.target.value);
  }
  
  const secondinputHandler=(e)=>{
    setNewNumber(e.target.value);
  }
  
  const formHandler=(e)=>{
    e.preventDefault();
    console.log(1)
    if (persons.some(e=>e.name===newName)){
      window.alert(`${newName} is already added to phonebook`);
      return;
    }
    setPersons(persons.concat({ name:newName, number:newNumber }))
  }
  
  const searchHandler=(e)=>{
    setSearch(e.target.value)
  }

  const persontoShow = persons.filter(person=>person.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter searchHandler={searchHandler} search={search}></Filter>
      <h3>add a new</h3>
      <PersonForm formHandler={formHandler} inputHandler={inputHandler} newName={newName} secondinputHandler={secondinputHandler} newNumber={newNumber}></PersonForm>
      <h3>Numbers</h3>
      <Persons persons={persons} search={search} />
    </div>
  )
}

export default App