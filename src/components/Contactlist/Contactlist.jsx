import { useSelector, useDispatch } from 'react-redux';
import css from './Contact.module.css';
import { deleteContact } from '../../redux/store';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contactsFromState = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const contacts = filter
    ? contactsFromState.filter(({ name }) =>
        name.toLowerCase().includes(filter.toLowerCase())
      )
    : contactsFromState;

  return (
    <ul>
      {contacts.map(({ name, number, id }) => (
        <li key={id}>
          <span>{`${name}: ${number}`}</span>
          <span>
            <button
              className={css.contact}
              onClick={() => dispatch(deleteContact(id))}
            >
              delete
            </button>
          </span>
        </li>
      ))}
    </ul>
  );
};
