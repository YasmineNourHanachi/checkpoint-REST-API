import axios from 'axios'
import { ADD_CONTACT_FAIL, ADD_CONTACT_SUCCES, DELETE_CONTACT_FAIL, 
        DELETE_CONTACT_SUCCES, EDIT_CONTACT_FAIL, EDIT_CONTACT_SUCCES, GET_CONTACTS_FAIL, GET_CONTACTS_LOAD, 
        GET_CONTACTS_SUCC, 
        GET_CONTACT_FAIL, 
        GET_CONTACT_LOAD, 
        GET_CONTACT_SUCC, 
        TOGGLE_FALSE, 
        TOGGLE_TRUE} from '../actionsType/contact'

//Affichage liste des contacts , GET_Contacts
export const getContacts = () => async(dispatch) => {
    dispatch({type:GET_CONTACTS_LOAD})
    try {
        let result= await axios.get('/api/contacts')
        dispatch({type: GET_CONTACTS_SUCC,payload : result.data.listContacts })
    } catch (error) {
        dispatch ({type:GET_CONTACTS_FAIL, payload: error.response.data})
        
    }

}
//delete contact 
export const deleteContact = (contactID) => async(dispatch) => {
    try {
        await axios.delete(`/api/contacts/${contactID}`)
        dispatch({type: DELETE_CONTACT_SUCCES})
        dispatch(getContacts())
    } catch (error) {
        dispatch ({type: DELETE_CONTACT_FAIL, payload: error.response.data})
        
    }
}

//Add new Contact

export const addContact = (newContact) => async(dispatch) => {
   try {
       await axios.post('/api/contacts', newContact)
       dispatch({type: ADD_CONTACT_SUCCES})
       dispatch(getContacts())
   } catch (error) {
    dispatch ({type:  ADD_CONTACT_FAIL, payload: error.response.data})

       
   }

}

//toggle true
export const toggleTrue =() =>{
return { type : TOGGLE_TRUE}

}

//toggle False
export const toggleFalse =() =>{
    return { type : TOGGLE_FALSE}
    
    }
//get Contact
export const getContact=(contactId) =>async(dispatch) =>{
    dispatch({type : GET_CONTACT_LOAD})
    try {
       let result= await axios.get(`/api/contacts/${contactId}`)
       dispatch({type: GET_CONTACT_SUCC, payload: result.data.contactToFind})
    } catch (error) {
        dispatch({type: GET_CONTACT_FAIL, payload:error.response.data})
        
    }
}
//Edit Contact
export const editContact=(contactId,newContact) =>async(dispatch)=>{
    try {
        await axios.put(`/api/contacts/${contactId}`,newContact)
        dispatch({type:EDIT_CONTACT_SUCCES})
        dispatch(getContacts())
    } catch (error) {
        dispatch({type:EDIT_CONTACT_FAIL, payload:error.response.data})
        
    }

}