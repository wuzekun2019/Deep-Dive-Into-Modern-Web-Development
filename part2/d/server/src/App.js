import React, { useState, useEffect } from 'react'

import axios from 'axios'

const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/notes')
      .then(response => {
        console.log('promise fulfilled')
        setNotes(response.data)
      })
  }, [])

  setNewNote("This is hard!");

  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      date: new Date(),
      important: Math.random() < 0.5,
    }

    console.log(noteObject)
  
    axios
      .post('http://localhost:3001/notes', noteObject)
      .then(response => {
        console.log(response)
      })
  }


  return (
    <div>{addNote}</div>
  )
}

export default App;
