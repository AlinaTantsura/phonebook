import { UnorderedList, useToast } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFiltredContacts } from 'reduxToolkit/contacts/selectors';
import ContactsItem from './ContactsItem';
import { deleteContacts } from 'reduxToolkit/contacts/operations';

const ContactsList = () => {
  const filtredContacts = useSelector(selectFiltredContacts);
  const toast = useToast();
  const dispatch = useDispatch();

  return (
    <UnorderedList styleType="none" margin={0}>
      {filtredContacts.map(contact => {
        const handleClick = () => {
          toast({
            position: 'top-right',
            title: `The contact '${contact.name}' is successfully deleted`,
            status: 'success',
            duration: 4000,
          });
          return dispatch(deleteContacts(contact.id));
        };
        return (
          <ContactsItem
            key={contact.id}
            contactsInfo={contact}
            handleClick={handleClick}
          />
        );
      })}
    </UnorderedList>
  );
};

export default ContactsList;
