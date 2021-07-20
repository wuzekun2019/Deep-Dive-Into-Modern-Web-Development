import React, {useState,useEffect} from "react"
import axios from "axios"

const Weather= ({city})=>{

    const api_key = process.env.REACT_APP_API_KEY
    const [weather,setWeather]=useState({})

    useEffect(()=>axios.get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${city}`)
    .then(response=>setWeather(response.data.current))
    ,[])

    console.log(weather)

    return (
        <div>
            <p><b>temperature: {weather.temperature}</b></p>
            <p><b>wind:</b> {weather.wind_speed} mph direnction {weather.wind_dir} </p>
        </div>
    )

}

export default Weather;