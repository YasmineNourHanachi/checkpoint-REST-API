import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { addContact, editContact } from '../../JS/actions/contact'
import add_btn from '../../assets/add.jpg'
import edit_btn from '../../assets/edit.jpg'

//import fichier from '../../assets/lien.txt'

import {Form} from 'react-bootstrap'
import './AddEditContact.css'

const AddEditContact =() =>{
   const [contact,setContact]=useState({name:"" , email:"",phone:""})
 
  const edit=useSelector(state=>state.contactReducer.editt)
  const contactUpdate=useSelector(state=>state.contactReducer.contact)
  

   const dispatch=useDispatch()

   useEffect(()=>{
 edit ? setContact(contactUpdate) : setContact({name:"",email:"",phone:""})

   },[edit,contactUpdate])

   const handleChange=(e)=> {
     setContact({...contact,[e.target.name]:e.target.value})
   }


    return <div className='AddEditContact'>
    
     <Form>
    <div  className="inputname"><Form.Group>
      <Form.Label >Name</Form.Label>
      <Form.Control type="text" 
                    placeholder="Enter Name Contact..." 
                    name="name"
                    value={contact.name} 
                    onChange={handleChange}/>
    </Form.Group>
    </div>
    
    <Form.Group className="mb-3">
      <Form.Label >Email</Form.Label>
      <Form.Control type="text" 
                    placeholder="Enter Email Contact..." 
                    name="email"
                    value={contact.email}
                    onChange={handleChange}/>
    </Form.Group>
    <Form.Group className="mb-3">
      <Form.Label >Phone</Form.Label>
      <Form.Control type="text" 
                    placeholder="Enter Phone Contact..." 
                    name="phone"
                    value={contact.phone}
                    onChange={handleChange}/>
    </Form.Group>
    {/* Add or Edit button */}
    {edit ?
    <Link to="/"><img src={edit_btn} alt="edit_btn" className="edit_btn" 
    onClick={()=>dispatch(editContact(contact._id,contact))}></img></Link>
    
    :
    <Link to="/"><img src={add_btn} alt="add_btn" className="add_btn" 
    onClick={()=> dispatch(addContact(contact))}></img></Link>
       
  } 
  {/* <a href={fichier} download>Cliquez pour télécharger</a>   */}
   </Form>
   {/* <form method="post" enctype="multipart/form-data">
 <div>
   <label for="file">Sélectionner le fichier à envoyer</label>
   <input type="file" id="file" name="file" multiple></input>
 </div>
 <div>
   <button>Envoyer</button>
 </div>
</form> */}
    </div>
}
export default AddEditContact