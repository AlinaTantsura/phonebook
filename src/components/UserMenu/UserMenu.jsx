import { useDispatch, useSelector } from "react-redux";
import { logOut } from "reduxToolkit/auth/operations";
import { selectUser } from "reduxToolkit/auth/selectors";

const UserMenu = () => {
    const { name } = useSelector(selectUser);
    const dispatch = useDispatch();

    const handleClick = () => {
        return dispatch(logOut());
    }
    return (
        <div>
            <p>{name}</p>
            <button type='button' onClick={handleClick}>Log out</button>
        </div>
    );
};

export default UserMenu;