// import Button from "components/Form/Button.styled";
import { Button, ListItem, UnorderedList, flexbox } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { selectFiltredContacts } from "reduxToolkit/contacts/selectors";
import { Notify } from "notiflix";
import { deleteContacts } from "reduxToolkit/contacts/operations";

const ContactsList = () => {
    const dispatch = useDispatch()
    const filtredContacts = useSelector(selectFiltredContacts);

    return (
            <UnorderedList styleType="none" ml={6}>
            {filtredContacts.map(({name, number, id}) => {
                const handleClick = () => {
                    Notify.success(`The contact '${name}' is successfully deleted`);
                    return dispatch(deleteContacts(id))
                }
                return <ListItem key={id} fontSize={18} mb={3}>{name}: {number}
                    <Button colorScheme='teal' variant='outline' ml={3} type='button'
                        onClick={handleClick}>Delete</Button> </ListItem>
            })}
            </UnorderedList>
    )
}

export default ContactsList;