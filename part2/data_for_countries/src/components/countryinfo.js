import React from "react"
import Weather from "./weather"

const CountryInfo = ({country}) => {

    return (
        <div>
            <h2>{country.name}</h2>
            <p>capital {country.capital}</p>
            <p>population {country.population}</p>
            <h3>Spoken languages</h3>
            <ul>
                {country.languages.map(language=><li>{language.name}</li>)}
            </ul>
            <figure>
            <img src={country.flag} width="30%" height="30%"/>
            </figure>
            <h3>Weather in {country.capital}</h3>
            <Weather city={country.capital}/>
        </div>
    )
}

export default CountryInfo;