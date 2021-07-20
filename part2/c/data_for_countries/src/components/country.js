import React,{useState} from "react"
import CountryInfo from "./countryinfo"

const Country = ({countriesShow}) => {

    const [show,setShow]=useState(false)

    console.log(show)
    return(
        show?
        countriesShow.map(country=><CountryInfo country={country}/>):
        countriesShow.map(country=>
            <div>
                <p>{country.name}
                <button onClick={()=>setShow(true)}>show</button></p>
            </div>
    ))
}

export default Country;