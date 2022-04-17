import  { useState, useEffect } from 'react';
import { nanoid } from 'nanoid'
import ContactList from "./components/ContactForm/ContactList";
import ContactForm  from './components/ContactForm/ContactForm';
import ContactFilter  from './components/ContactForm/ContactFilter';
import s from "./components/ContactForm/contactForm.module.css"
import { useSelector, useDispatch } from 'react-redux'
import { addContact} from './redux/contactSlice'

function App () {
  const filters = useSelector(state => state.filter);
  const contacts = useSelector(state => state.contact);

  const dispatch = useDispatch();

  const onSaveContactClicked = (data) => {
  const message = `${data.name} is alredy in contacts`;
  const findName = contacts.find(contact => contact.name.toLowerCase() === data.name.toLowerCase());
  const findNumber = contacts.find(contact => contact.number === data.number);

  if (findName || findNumber !== undefined) {
    alert(message);
    return
  };
  
  if (contacts) {
    dispatch(
      addContact({
          id: nanoid(),
          name: data.name,
          number: data.number
      }))
     
  }
}

const normalizeFilter = filters.toLowerCase();
const filterContacts = contacts.filter(contact => contact.name.toLowerCase().includes(normalizeFilter));
 // console.log(filterContacts)
            return (
                <div className={s.container}>
                <h2>Phonebook</h2>
                <ContactForm  onSubmitAdd={onSaveContactClicked}/>
                <h2>Contacts</h2>
                <ContactFilter/>  
                <ContactList contacts={filterContacts}/> 
                </div>
            )
        }
export default App