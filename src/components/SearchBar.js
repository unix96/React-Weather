import React from 'react'
import {Button} from 'react-bootstrap'
import '../style/searchBar.css'

function SearchBar(props) {
    return (
    <div className="d-inline w-25 text-center">        
        <input className="w-75 search-bar" value={props.value} placeholder="Enter the name of the city" onChange={props.onChange}/>
        <Button className="p-5 m-0" disabled={!props.value} onClick={props.onClick} className='m-3' variant="primary">Search</Button>
    </div>        
    )
}

export default SearchBar
