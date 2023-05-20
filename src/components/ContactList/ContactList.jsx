import React from 'react';
import { StyledList } from './styled';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <StyledList>
      {contacts
        .map((contact) => (
          <li className='list-item' key={contact.id}>
            <p>{contact.name}</p>
            <span>{contact.number}</span>
            <button
              type='button'
              className='delete-button'
              onClick={() => onDelete(contact.id)}
            >
              Delete
            </button>
          </li>
        ))}
    </StyledList>
  );
};

