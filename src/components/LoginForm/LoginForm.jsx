import { useDispatch } from "react-redux";
import { logIn } from "reduxToolkit/auth/operations";

const LoginForm = () => {
   const dispatch = useDispatch();
    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        dispatch(logIn({ name: form.elements.name.value, password: form.elements.password.value }));
        form.reset();
        }

    return (
        <form onSubmit={handleLogin}>
            <label>
                Username
                <input type='text' name='name' />
            </label>
            <label>
                Password
                <input type='password' name='password' />
            </label>
            <button type='submit'>Log in</button>
        </form>
    )
};

export default LoginForm;