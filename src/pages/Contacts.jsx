import ContactsList from "components/ContactsList/ContactsList";
import Filter from "components/Filter/Filter";
import Form from "components/Form/Form";

const Contacts= () => {
    return (
            <div>
                <h1>Phonebook</h1>
                <Form />
            
            {/* {(isLoad && !error) && <Loader />}
           {     (contacts.length !== 0) && ( */}
                <>
                    <h2>Contacts</h2>
                    <Filter />
                    <ContactsList />
                </>
            {/* )} */}
    </div>
    )
};
export default Contacts;