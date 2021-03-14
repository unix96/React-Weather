import React from 'react'
import {Button} from 'react-bootstrap'
import '../style/searchBar.css'

function SearchBar(props) {
    return (
    <div className="d-inline w-25 text-center">        
        <input className="w-75 search-bar" value={props.value} placeholder="Enter the name of the city" onChange={props.onChange}/>
        <Button className="p-1 m-2" disabled={!props.value} onClick={props.onClick}  variant="primary">Search</Button>
    </div>        
    )
}

export default SearchBar
