// import Container from "./Container.styled";
// import Contacts from "./Contacts/Contacts";
// import Form from "./Form/Form";
// import Filter from "./Filter/Filter";
// import { useDispatch, useSelector } from "react-redux";
// import { selectContacts, selectError, selectIsLoading } from "reduxToolkit/selectors";
// import { fetchContacts } from "reduxToolkit/operations";
// import { useEffect } from "react";
// import { Loader } from "./Loader/Loader.styled";

// import Contacts from "pages/Contacts"
// import Home from "pages/Home"
// import Login from "pages/Login"
// import Register from "pages/Register"
import { Route, Routes } from "react-router-dom"
import Layout from "./Layout/Layout"
import { lazy, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { refreshUser } from "reduxToolkit/auth/operations"
import { selectIsRefresh } from "reduxToolkit/auth/selectors"
import RedirectRoute from "./RedirectRoute"
import PrivateRoute from "./PrivateRoute"

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

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts'));

export const App = () => {
    const dispatch = useDispatch();
    const isRefresh = useSelector(selectIsRefresh);

    useEffect(() => {
        dispatch(refreshUser())
    }, [dispatch]);

    return !isRefresh && (
        <Routes>
            <Route path='/' element={<Layout />} >
                <Route index element={<HomePage />} />
                {/* <Route path='/register' element={<RegisterPage />} /> */}
                <Route path='/register' element={<RedirectRoute component={RegisterPage} redirectTo='/contacts'/>} />
                {/* <Route path='/login' element={<LoginPage />} /> */}
                <Route path='/login' element={<RedirectRoute component={LoginPage} redirectTo="/contacts" />} />
                {/* <Route path='/contacts' element={<ContactsPage />} /> */}
                <Route path='/contacts' element={<PrivateRoute component={ContactsPage} redirectTo="/login" />} />
                <Route path='*' element={<HomePage />} />
            </Route>
        </Routes>
    )
}