import React from 'react';
import PropTypes from 'prop-types';
import s from "./contactForm.module.css"
import { useDispatch, useSelector} from 'react-redux';
import { deleteContact} from '../../redux/contactSlice'



const ContactList =()=>{
  const dispatch = useDispatch();
  
  const filters = useSelector(state => state.filter);
  const contacts = useSelector(state => state.contact);
const normalizeFilter = filters.toLowerCase();
const filterContacts = contacts.filter(contact => contact.name.toLowerCase().includes(normalizeFilter));
  return (


<ul className={s.contactList}>
  
   {
    filterContacts.map(({id,name, number})=>{
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

