import { assertExpressionStatement } from '@babel/types'
import React, { useState, useEffect } from 'react'
import Filter from './components/filter'
import PersonForm from './components/personform'
import Persons from './components/persons'
import personService from './services/persons'
import axios from "axios"
import Notification from './components/notification'

import './index.css'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])

  useEffect(()=>{
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  },[])

  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ search, setSearch ] = useState('')
  const [ Message,setMessage ] = useState(null)

  const inputHandler=(e)=>{
    setNewName(e.target.value);
  }
  
  const secondinputHandler=(e)=>{
    setNewNumber(e.target.value);
  }

  const searchHandler=(e)=>{
    setSearch(e.target.value)
  }

  const addPerson = (e) => {
    e.preventDefault()
    if (persons.some(p=>p.name===newName)){
      const targetPerson=persons.find(p=>p.name===newName)
      if (targetPerson.number===newNumber){
        window.alert(`${newName} is already added to phonebook`);
        return;
      }
      else{
        if (window.confirm(`${newName} is already added to the phonebook, replace the old numbe with new one?`)) {
          personService
          .update(targetPerson.id,{name:newName,number:newNumber}).then(returnedPersons=>{
            setPersons(persons.map(p=>p.id!==targetPerson.id?p:returnedPersons))
          })
        }
        else {
          return;
        }
      }
    }
    else{
      const personObject = {
        name: newName,
        number: newNumber,
      }
  
      personService.create(personObject).then(returnedPersons=>{
        setPersons(persons.concat(returnedPersons))
        setNewName('')
        setNewNumber('')
        setMessage({ text:`Added ${newName}`, type: "success"})
      })
      .catch((error) => {
        setMessage({
          text: error.response, 
          type: "error",
        })
      })
    }
  }

  const deletePerson = (id) => {
    personService.deleteperson(id).then(
      setPersons(persons.filter(person=>person.id!==id)),
      setMessage({
        text:`${persons.find(person=>person.id).name} is deleted`,
        type:"success"
      })
    )  
      .catch(
        (error)=>{
          setMessage({
            text:`${persons.find(person=>person.id).name} is already deleted`,
            type:"error"
          })
        }
      )
  }
  
  const personstoShow = persons.filter(person=>person.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={Message}/>
      <Filter searchHandler={searchHandler} search={search}></Filter>
      <h3>add a new</h3>
      <PersonForm formHandler={addPerson} inputHandler={inputHandler} newName={newName} secondinputHandler={secondinputHandler} newNumber={newNumber}/>
      <h3>Numbers</h3>
      <Persons persons={persons} search={search} deletePerson={deletePerson}/>
    </div>
  )
}

export default App