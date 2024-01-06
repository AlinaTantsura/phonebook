import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsLogIn, selectIsRefresh } from "reduxToolkit/auth/selectors";

const PrivateRoute = ({component: Component, redirectTo = '/' }) => {
    const isLogIn = useSelector(selectIsLogIn);
    const isRefresh = useSelector(selectIsRefresh);

    const shouldRedirect = !isLogIn && !isRefresh;

    return shouldRedirect ? <Navigate to={redirectTo} /> : <Component />;
};

export default PrivateRoute;