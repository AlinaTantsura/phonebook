import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLogIn } from "reduxToolkit/auth/selectors";

const Navigation = () => {
    const isLogIn = useSelector(selectIsLogIn);

    return (<nav>
        <NavLink to='/'>Home</NavLink>
        {!isLogIn ? (
            <>
            <NavLink to='/register'>Register</NavLink>
                <NavLink to='/login'>Log in</NavLink>
            </>
            ) : (<NavLink to='/contacts'>Contacts</NavLink>)}
            
            </nav>)
};

export default Navigation;