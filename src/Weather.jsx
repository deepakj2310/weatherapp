import React, { useState } from 'react'
import axios from 'axios';
import './App.css';
const Weather = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState();
  function cityChange(e){
    setCity(e.target.value)
    //console.log(city); 
  }
  const fetchWeather = async () => {
    try{
      const response = await  axios.get(`https://api.weatherstack.com/current?access_key=${'e456f7d4279983c97f27d0c4c6489e8e'}&query=${city},india`)
      //console.log(response);
      setWeather(response.data);
    }
    catch(error){
      console.log("Error fetching weather data:", error)
    }
  }
  function handleSubmit(e){
    //console.log(city); e456f7d4279983c97f27d0c4c6489e8e
    fetchWeather();
  }
  return (
    <div className='weatherbox'>
      <input className='weatherinput' type='text' name='' placeholder='Enter City Name' value={city} onChange={ (e) => { cityChange(e)}}/>
      <button type="submit" onClick={handleSubmit}>Get Weather</button>
      <div className='weatherinfo'>
        {weather && <>
        <h3>City is {weather.location.name}</h3>
        <h3>Temperature is {weather.current.temperature}</h3>
        <h3>Weather Descriptions is {weather.current.weather_descriptions[0]}</h3>
        </>}        
      </div>
    </div>
  )
}

export default Weather