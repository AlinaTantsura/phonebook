import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { selectContacts } from "reduxToolkit/contacts/selectors";
import { Notify } from "notiflix";
import { addContactBase } from "reduxToolkit/contacts/operations";

const ContactsForm = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        const name = form.elements.name.value;
        const number = form.elements.number.value;
        const obj = { name, number };
        if (contacts.find(contact => contact.name === name)) {
            Notify.warning(`${name} is already in your contacts`)
            
        }
        else {
            dispatch(addContactBase(obj));
            Notify.success(`New contact '${name}' is successfully created`)
        }
        form.reset();
    }

    return (
        <form onSubmit={handleSubmit}>
            <FormControl outline='solid 1px lightgrey' borderRadius={10} m={6} p={6} w={500}>
                <FormLabel htmlFor='name' >Name</FormLabel>
                    <Input
                        type="text"
                        name="name"
                        required
                        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name must contain only letters"
                    marginBottom={3} w={250}
                _focus={{border:'solid 1px teal',boxShadow:'0 0 0 1px teal'}}/>
        
               
                    <FormLabel htmlFor='number' >Number</FormLabel>
            
                    <Input
                        type="tel"
                        name="number"
                        required
                        pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
                    title="'123-45-67'   Number must contain only numbers"
                    marginBottom={3} w={250}
                _focus={{border:'solid 1px teal',boxShadow:'0 0 0 1px teal'}}/>
                <br/>
                <Button colorScheme='teal'
                    variant='outline'
                    type="submit"
                    _hover={{
                        backgroundColor: 'teal',
                        color: 'white'}}>Add contact</Button>
            </FormControl>
            </form>
    )

}

export default ContactsForm;