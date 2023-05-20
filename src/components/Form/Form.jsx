import React, { useState } from 'react';
import { StyledForm } from './styled';

export const Form = ({onAddContact}) =>  {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const changeHandler = event => {
    const { value, name } = event.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };
  const submitHandler = event => {
    event.preventDefault();

    const contactData = {
      name: name,
      number: number,
    };
    onAddContact(contactData);
    setName('');
    setNumber('');
  };
    return (
      <StyledForm onSubmit={submitHandler}>
        <label className='form-label'>
          <span className='label-name'>Name</span>
          <input
            className='form-input'
            type='text'
            value={name}
            name='name'
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={changeHandler}
          />
        </label>
        <label className='form-label'>
          <span className='label-name'>Number</span>
          <input
            className='form-input'
            type='tel'
            value={number}
            name='number'
            pattern='\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}'
            title='Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
            required
            onChange={changeHandler}
          />
        </label>
        <button type='submit' className='form-btn'>
          Add contact
        </button>
      </StyledForm>
    );
}
