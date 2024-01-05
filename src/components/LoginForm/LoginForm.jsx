import { useDispatch } from "react-redux";
import { logIn } from "reduxToolkit/auth/operations";

const LoginForm = () => {
   const dispatch = useDispatch();
    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        dispatch(logIn({ email: form.elements.email.value, password: form.elements.password.value }));
        form.reset();
        }

    return (
        <form onSubmit={handleLogin}>
            <label>
                Email
                <input type='text' name='email' />
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