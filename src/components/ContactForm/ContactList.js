import React from 'react';
import PropTypes from 'prop-types';
import s from "./contactForm.module.css"
import { useDispatch, } from 'react-redux';
import { deleteContact} from '../../redux/contactSlice'



const ContactList =({contacts})=>{
  const dispatch = useDispatch();
  return (


<ul className={s.contactList}>
  
   {
    contacts.map(({id,name, number})=>{
      return(
        <li key={id}
        className={s.contactList_item}>
        <p className={s.contactList__text}>{name}</p>
        <p className={s.contactList__text}>{number}</p>
        <button onClick={() => dispatch(deleteContact(id))}>delete</button>
      </li>
      )
    
    })
  }
    
  </ul>

 )}

 ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
};

 export default ContactList

