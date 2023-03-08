import css from './contact-list.module.css';
import { useSelector } from 'react-redux';
import { filtredContacts } from '../../redux/selectors';
import { useDispatch } from 'react-redux';
import { fetchContacts, deleteContact } from '../../redux/operations';
import { useEffect } from 'react';

const ContactList = () => {
  const contacts = useSelector(filtredContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ul className={css.list_contact}>
      {contacts.length !== 0 ? (
        contacts.map(contact => (
          <li className={css.listItem_contact} key={contact.id}>            
              <p><span className={css.name}>{contact.name}: </span>{contact.phone} </p>             
            
            <button
              className={css.bttn_contactList}
              type="button"
              onClick={() => dispatch(deleteContact(contact.id))}
            >
              Delete
            </button>
          </li>
        ))
      ) : (
        <p>No data to display :(</p>
      )}
    </ul>
  );
};

export default ContactList;
