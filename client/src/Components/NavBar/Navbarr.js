import React from 'react'
import {Button} from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { toggleFalse } from '../../JS/actions/contact'

import './Navbarr.css'

const Navbarr = () => {
    const dispatch=useDispatch()
    return (
        <header className='buttons'>
            <Link to="/"><Button variant="secondary" className="addbutton">Contact List</Button></Link>
            
           <Link to="/addcontact"><Button variant="secondary" className="editbutton"
           onClick={()=> dispatch(toggleFalse())}>ADD Contact</Button></Link> 
        </header>
    )
}

export default Navbarr
