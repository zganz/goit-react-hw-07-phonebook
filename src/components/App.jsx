import { PhonebookForm } from './PhonebookForm/PhonebookForm';
import { ContactList } from './Contactlist/Contactlist';
import { Filter } from './Filter/Filter';

export const App = () => {
  return (
    <div
      style={{
        marginLeft: '60px',
      }}
    >
      <h1 style={{ marginLeft: '60px' }}>Phonebook</h1>
      <PhonebookForm />
      <h3 style={{ marginLeft: '120px' }}>Search</h3>
      <Filter />
      <h1 style={{ marginLeft: '70px' }}>Contacts</h1>
      <ContactList />
    </div>
  );
};
