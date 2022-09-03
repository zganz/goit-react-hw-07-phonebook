import { useSelector } from 'react-redux';
import css from './Contact.module.css';
import {
  useGetContactsQuery,
  useDeleteContactMutation,
} from '../../redux/contactsApi';

export const ContactList = () => {
  const { data, error, isLoading } = useGetContactsQuery();
  const [deleteContact, result] = useDeleteContactMutation();
  const filter = useSelector(state => state.filter);

  const contacts =
    data && filter
      ? data.filter(({ name }) =>
          name.toLowerCase().includes(filter.toLowerCase())
        )
      : data
      ? data
      : [];

  return (
    <>
      {error ? (
        <>Oops, Something Went Wrong</>
      ) : isLoading ? (
        <>Loading Contacts...</>
      ) : data ? (
        <ul>
          {contacts.map(({ name, phone, id }) => (
            <li key={id}>
              <span>{`${name}: ${phone}`}</span>
              <span>
                <button
                  className={css.contact}
                  disabled={result.isLoading}
                  onClick={() => deleteContact(id)}
                >
                  delete
                </button>
              </span>
            </li>
          ))}
        </ul>
      ) : null}
    </>
  );
};
