import React,{useState,useEffect} from "react"
import axios from "axios"

import CountryInfo from "./components/countryinfo";
import Country from "./components/country";

const App=()=> {

  const [countries,setCountries]=useState([]);
  const [search,setSearch]=useState("")


  useEffect(()=>{
    console.log("effect")
    axios.get('https://restcountries.eu/rest/v2/all').then(response=>setCountries(response.data))
  },[])

  const changeHandler = (event)=>{
    setSearch(event.target.value);
  }

  const countriesShow=countries.filter(country=>country.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div>
      <p>find countries</p><input value={search} onChange={changeHandler}></input>
      {/* <Country countriesShow={countriesShow} submitHandler={submitHandler} show={show}/> */}
      {countriesShow.length>10? <p>Too many countries, specify another filter</p>:<Country countriesShow={countriesShow}/>}
    </div>
  );
}

export default App;
