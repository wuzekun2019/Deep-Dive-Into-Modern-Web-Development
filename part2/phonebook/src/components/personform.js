import React from "react"

const PersonForm = ({formHandler,inputHandler,newName,secondinputHandler,newNumber})=>{
    return (
    <form onSubmit={formHandler}>
    <div>name: <input onChange={inputHandler} value={newName}/></div>
    <div>number: <input onChange={secondinputHandler} value={newNumber}/></div>
    <div><button type="submit">add</button></div>
    </form>
    )
}

export default PersonForm;