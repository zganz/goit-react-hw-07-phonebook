import { useState } from 'react';
import css from './phonebookForm.module.css';
import {
  useGetContactsQuery,
  useAddContactMutation,
} from '../../redux/contactsApi';

export const PhonebookForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const { data } = useGetContactsQuery();
  const [addContact] = useAddContactMutation();

  const handleSubmit = evt => {
    evt.preventDefault();
    const contact = {
      name: name,
      phone: number,
    };

    if (data && data.some(contact => contact.name === name)) {
      return alert(`${name} is already in contacts`);
    }

    addContact(contact);

    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <label className={css.label}>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={evt => setName(evt.target.value)}
          value={name}
        />
      </label>
      <label className={css.label}>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={evt => setNumber(evt.target.value)}
          value={number}
        />
      </label>

      <button type="submit">Добавить контакт</button>
    </form>
  );
};
