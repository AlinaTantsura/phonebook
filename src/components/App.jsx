import { Route, Routes } from "react-router-dom"
import Layout from "./Layout/Layout"
import { lazy, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { refreshUser } from "reduxToolkit/auth/operations"
import { selectIsRefresh } from "reduxToolkit/auth/selectors"
import RedirectRoute from "./RedirectRoute"
import PrivateRoute from "./PrivateRoute"

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