import { ADD_CONTACT_FAIL, DELETE_CONTACT_FAIL, EDIT_CONTACT_FAIL, EDIT_CONTACT_SUCCES, GET_CONTACTS_FAIL, GET_CONTACTS_LOAD, GET_CONTACTS_SUCC, GET_CONTACT_FAIL, GET_CONTACT_LOAD, GET_CONTACT_SUCC, TOGGLE_FALSE, TOGGLE_TRUE } from "../actionsType/contact"

const initState = {
    listContacts:[],
    load : false,
    errors: null,
    editt:false,
    contact:{},
    msg:""
}

 const contactReducer = (state=initState,{type,payload}) => {
    switch (type) {
     case GET_CONTACTS_LOAD : return {...state, load:true}
     case GET_CONTACTS_SUCC : return {...state,load:false,listContacts: payload}
     case GET_CONTACTS_FAIL : return {...state,load:false, errors:payload}

     case DELETE_CONTACT_FAIL : return {...state,errors:payload}
     case ADD_CONTACT_FAIL    : return {...state,errors:payload}

     case TOGGLE_TRUE: return {...state, editt:true}
     case TOGGLE_FALSE: return {...state, editt:false}
     
     case GET_CONTACT_LOAD : return {...state, load: true }
     case GET_CONTACT_SUCC : return {...state, load: false ,contact:payload}
     case GET_CONTACT_FAIL : return {...state, load: false ,contact:payload}

     case EDIT_CONTACT_FAIL : return {...state ,msg: payload.msg}

     

     default: return state

    } 


}

export default contactReducer