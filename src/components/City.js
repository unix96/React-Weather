import React from 'react';
import {Container} from 'react-bootstrap';

function City(props) {
    return (
       <Container fluid className="location">
           {props.city},{props.state},{props.country}
       </Container>
    )
}

export default City