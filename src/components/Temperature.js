import React from 'react'
import {Container} from 'react-bootstrap'
import '../style/temperature.css'


function Temperature(props) {
    return (
       <Container fluid className="d-inline flex-wrap w-50 text-center temperature" >
           {props.celcius} C 
       </Container>
    )
}

export default Temperature
