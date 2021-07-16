import React from "react";

const Persons = ({persons,search})=>{
    const personstoShow=persons.filter(person=>person.name.toLowerCase().includes(search.toLowerCase()))
    return(
        personstoShow.map((person)=><p>{person.name} {person.number}</p>)
    )
}

export default Persons;