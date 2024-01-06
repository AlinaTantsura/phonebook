import Navigation from "components/Navigation";
import UserMenu from "components/UserMenu/UserMenu";
import { useSelector } from "react-redux";
import { selectIsLogIn } from "reduxToolkit/auth/selectors";

const Header = () => {
    const isLogIn = useSelector(selectIsLogIn);
    return (<header>
         <Navigation />   
        {isLogIn &&  <UserMenu/>}
    </header>)
}

export default Header;