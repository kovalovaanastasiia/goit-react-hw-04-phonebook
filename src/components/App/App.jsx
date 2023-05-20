import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Form } from '../Form/Form';
import { Filter } from '../Filter/Filter';
import { ContactList } from '../ContactList/ContactList';


export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('')

  const onAddContact = contact => {
    const finalContact = {
      id: nanoid(),
      ...contact,
    };
    if (contacts.some(el => el.name === contact.name)) {
      toast.error(`${contact.name} is already exist!`, {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
      return;
    }

    setContacts((prevContacts) => [...prevContacts, finalContact]);
  };

  const onDeleteContact = (contactId) => {
    setContacts((prevContacts) =>
      prevContacts.filter((element) => element.id !== contactId)
    );
  };
  useEffect(()=> {
    const storageContacts = localStorage.getItem('contacts');
      const parsedContacts = JSON.parse(storageContacts);

    if (parsedContacts) {
      setContacts(parsedContacts);
    }
  }, [])
  useEffect(()=>{
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts])

    return (
      <div>
        <h1 style={{ marginLeft: 20 }}>Phonebook</h1>
        <Form onAddContact={onAddContact} />
        <h2 style={{ marginLeft: 20 }}>Contacts</h2>
        <Filter onFilter={setFilter} />
        <ContactList contacts={contacts.filter(({ name }) =>
          name.toLowerCase().includes(filter.toLowerCase()),
        )} filter={filter} onDelete={onDeleteContact} />
        <ToastContainer />
      </div>

    );
}
