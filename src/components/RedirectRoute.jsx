import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsLogIn } from "reduxToolkit/auth/selectors";

const RedirectRoute = ({ component: Component, redirectTo = '/' }) => {
    const isLogIn = useSelector(selectIsLogIn);
    return isLogIn ? <Navigate to={redirectTo} /> : <Component />;
};

export default RedirectRoute;