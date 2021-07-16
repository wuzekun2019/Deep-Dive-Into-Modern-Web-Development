import React from "react"

const Filter = ({searchHandler, search})=>{
    return (
        <div>filter shown with <input onChange={searchHandler} value={search}/></div>
    )

}

export default Filter;