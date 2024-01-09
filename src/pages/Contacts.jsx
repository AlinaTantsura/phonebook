import { Box, Heading } from "@chakra-ui/react";
import ContactsList from "components/ContactsList/ContactsList";
import Filter from "components/Filter/Filter";
import Form from "components/Form/Form";

const Contacts= () => {
    return (
        <Box as='div' padding={6}>
                <Heading>Phonebook</Heading>
                <Form />
            
            {/* {(isLoad && !error) && <Loader />}
           {     (contacts.length !== 0) && ( */}
                <>
                    <Heading>Contacts</Heading>
                    <Filter />
                    <ContactsList />
                </>
            {/* )} */}
        </Box>
    )
};
export default Contacts;