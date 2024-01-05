import UserMenu from "components/UserMenu/UserMenu";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLogIn } from "reduxToolkit/auth/selectors";

const Header = () => {
    const isLogIn = useSelector(selectIsLogIn);
    return (<header>
            <nav>
            <NavLink to='/register'>Register</NavLink>
            <NavLink to='/login'>Log in</NavLink>
            {isLogIn &&  <NavLink to='/contacts'>Contacts</NavLink>}
            </nav>
        {isLogIn &&  <UserMenu/>}
    </header>)
}

export default Header;