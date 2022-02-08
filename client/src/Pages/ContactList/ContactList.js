import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getContacts } from '../../JS/actions/contact'
import ContactCard from '../../Components/ContactCard/ContactCard'

import './ContactList.css'

const ContactList =() =>{
    const listContacts=useSelector(state=> state.contactReducer.listContacts)
    const load=useSelector(state=> state.contactReducer.load)

    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getContacts())
    },[]) ;
    return (
        load ? <h2>waiit</h2>
        : 
    <div className='contactList'>
     {listContacts.map(contact =>
     <ContactCard contact={contact} key={contact._id}></ContactCard>
     
     )}
     {/* testtttttttttttttttttttttttttttt */}
     
     </div>
     )
}
export default ContactList