import { NavLink } from "react-router-dom";

const Header = () => {
    return (<header>
            <nav>
            <NavLink to='/register'>Register</NavLink>
            <NavLink to='/login'>Log in</NavLink>
            <NavLink to='/contacts'>Contacts</NavLink>
            </nav>
    </header>)
}

export default Header;