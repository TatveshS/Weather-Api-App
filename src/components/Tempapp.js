import React from 'react';
import './css/style.css'
import {useState, useEffect} from 'react'

const Tempapp = () => {

    const [city, setCity] = useState(null);
    const [ search, setSearch] = useState('Goa')

    useEffect(() => {
      
        const fetchApi = async () => {
            const url =`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid={add your api key from openweather}`
            const response = await fetch(url)
            const resJSON = await response.json()
            console.log(resJSON);
            setCity(resJSON.main)
        }
      
        fetchApi();
    
      },[search]
    )
    

  return (
    <div>
        <div className="box">
            <div className="inputData">
                <input type='search' className='inputField' value={search} onChange={ (event) => {
                    setSearch(event.target.value)
                }} />
            </div>

            {
                !city ? (
                    <p>No Data Found</p>
                ) :

        <div className="info">
            <h2 className="location">
                {search}
            </h2>
            <h1 className="temp">
                {city.temp} °C
            </h1>
            {/* <h3 className="tempmin-max">

            </h3> */}
        </div>


            }

        </div>
    </div>
  )
}

export default Tempapp
