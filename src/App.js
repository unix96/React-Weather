import React, {useEffect, useState} from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios'
import API from './components/API'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import SearchBar from './components/SearchBar';
import Temperature from './components/Temperature';
import {ImArrowDown,ImArrowUp} from 'react-icons/im'
import {GiPositionMarker,GiWindSlap} from 'react-icons/gi'
import Sunny from './assests/icons/sunny.svg'
import Cloud from "./assests/icons/cloud.svg"
import Snow from './assests/icons/snow.svg'
import Rain from './assests/icons/rain.svg'
import Storm from './assests/icons/storm.svg'
import Mist from './assests/icons/fog.svg'


function App() {
 
  const [query,setQuery] = useState('');
  const [city,setCity] = useState('');
  const [data,setData] = useState({"name":"",
                                    "main":{
                                      "temp_max":0,
                                      "temp_min":0,
                                      "temp":0,
                                    },
                                  "weather":[{
                                    "description":"",
                                    "id":"",
                                  }],
                                    "sys":{
                                      "country":"",

                                    },
                                    "wind":{
                                      "speed":"",
                                    }});


// Function that change the value of the city
const changeCity = () =>{
      setCity(query)
}


// Function that renders the desired logo 
const imageRender = (state) => {
  switch(state){
    case 'Clear': return Sunny;
    case 'Clouds': return Cloud;
    case 'scattered clouds': return Cloud;
    case 'broken clouds': return Cloud;
    case 'shower rain': return Rain;
    case 'Rain': return Rain;
    case 'Thunderstorm': return Storm;
    case 'Snow': return Snow;
    case 'Mist' || 'Smoke' || 'Haze' || 'Sand' || 'Ash': return Mist;
  }
}

//Function that activates each time the value of city changes 
useEffect(() => {
      async function getData(){

        const request = await  axios.get(`${API.url}q=${city}&appid=${API.key}&units=metric`);
    
        return setData(request.data);
      }
        if(city){
          getData();
          setQuery('')
        console.log(data)
        }    
} , [city] );


   
  return (

    // App Container
    <Container fluid className='weatherapp d-flex flex-column align-content-center' >
    
    {/*The Background blur container  */}
    <div className=" bg-image">
    </div>
      <Row className="navbar-1">
        <h1 className="w-50 text-center title">React Weather</h1>
        <SearchBar className='search-bar' value={query} onClick={changeCity}  onChange={(e) => {setQuery(e.target.value)}}  /> 
         
      </Row>
      <Row className="d-flex flex-row justify-content-center">
        <Col>
            <Container className='borderCard d-flex flex-column justify-content-center border-4 '>
      <Row className="d-flex flex-row justify-content-around">
        <div className="p-2 city-name d-inline text-center">
          <GiPositionMarker/> {data.name} , {data.sys.country}
        </div>
      </Row>
      <Row className="p-1">
        <Temperature className="temperature" celcius={data.main.temp+'°'}/>
      </Row>
      <Row className="text-center d-flex flex-row justify-content-center temperature p-1">
        <div className="d-inline line-temp">
           <ImArrowDown className=" "/> {data.main.temp_min} °C
        </div>
        <div className="line-temp">
            <ImArrowUp className="color "/>{data.main.temp_max}°C
        </div>
       
      </Row>
      <Row className="temperature text-center d-inline">
        {data.weather[0].description}
      </Row> 
      <Row className="temperature d-inline-flex justify-content-center flex-row text-center">
        <GiWindSlap className="w-25 p-0 m-0"/>{data.wind.speed} KM/H
      </Row>
      
      </Container>

        </Col>
        <Col className='d-inline-flex'>
          {data.weather[0].main ? <img src={imageRender(data.weather[0].main)} className="logo"/> : <div></div> }
          
        </Col>
      </Row>
      
    </Container>
  );
}

export default App;
