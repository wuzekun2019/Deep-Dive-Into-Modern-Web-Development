import React,{useState,useEffect} from "react"
import axios from "axios"

const Persons = ({persons,search,deletePerson})=>{
    const personstoShow=persons.filter(person=>person.name.toLowerCase().includes(search.toLowerCase()))
    return(
        personstoShow.map((person)=><p>{person.name} {person.number} <button onClick={()=>deletePerson(person.id)}>delete</button></p>)
    )
}

export default Persons;