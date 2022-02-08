import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import del from '../../assets/delete.jpg'
import edit from '../../assets/edit.jpg'
import icon from '../../assets/icon.jpg'

import {Card} from 'react-bootstrap'
import './contactCard.css'
import { deleteContact, getContact, toggleTrue } from '../../JS/actions/contact'


const ContactCard = ({contact}) => {
  const dispatch=useDispatch()
    return (
        <div>
           <Card style={{ width: '15rem' }} className="cardcontact">
  
  <Card.Body>
    <Card.Img src={icon} className="icon">
    
    </Card.Img>
    <Card.Title>{contact.name} </Card.Title>
    <Card.Title>{contact.email}</Card.Title>
    <Card.Title>{contact.phone}</Card.Title>
  </Card.Body>
  <div className='btns'>
  <img src={del} alt="btn_delete" className='btn_delete' 
  onClick={()=> dispatch(deleteContact(contact._id))}></img>
  <Link to={`/editcontact/${contact._id}`}>
  <img src={edit} alt="btn_edit" className='btn_edit'
  onClick={()=>{dispatch(toggleTrue());dispatch(getContact(contact._id))} }></img>
  </Link>
  
  </div>
  

</Card> 
        </div>
    )
}

export default ContactCard
