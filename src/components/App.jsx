// import Container from "./Container.styled";
// import Contacts from "./Contacts/Contacts";
// import Form from "./Form/Form";
// import Filter from "./Filter/Filter";
// import { useDispatch, useSelector } from "react-redux";
// import { selectContacts, selectError, selectIsLoading } from "reduxToolkit/selectors";
// import { fetchContacts } from "reduxToolkit/operations";
// import { useEffect } from "react";
// import { Loader } from "./Loader/Loader.styled";

import Contacts from "pages/Contacts"
import Home from "pages/Home"
import Login from "pages/Login"
import Register from "pages/Register"
import { Route, Routes } from "react-router-dom"
import Layout from "./Layout/Layout"

// export const App = () => {
//     const isLoad = useSelector(selectIsLoading);
//     const error = useSelector(selectError);
//     const dispatch = useDispatch();
//     const contacts = useSelector(selectContacts);
//     useEffect(() => {
//         dispatch(fetchContacts())
//     }, [dispatch])

//     return(
//             <Container>
//                 <h1>Phonebook</h1>
//                 <Form />
            
//             {(isLoad && !error) && <Loader />}
//            {     (contacts.length !== 0) && (
//                 <>
//                     <h2>Contacts</h2>
//                     <Filter />
//                     <Contacts />
//                 </>
//             )}
            
                
//             </Container>
//         )
// }

export const App = () => {
    return (
        <Routes>
            <Route path='/' element={<Layout />} >
                <Route index element={<Home />} />
                <Route path='/register' element={<Register />} />
                <Route path='/login' element={<Login />} />
                <Route path='/contacts' element={<Contacts />} />
                <Route path='*' element={<Home />} />
            </Route>
        </Routes>
    )
}