import { useDispatch } from "react-redux";
import { register } from "reduxToolkit/auth/operations";
// import { createUser } from "reduxToolkit/auth/operations";


const RegisterForm = () => {
    const dispatch = useDispatch();
    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        // dispatch(createUser({
        //     name: form.elements.name.value,
        //     email: form.elements.email.value,
        //     password: form.elements.password.value,
        // }));
        dispatch(register({ name:'name', email:'email', password:'password'}));
        form.reset();
    }
    return (
        <form onSubmit={handleRegister}>
            <label>
                Username
                <input type='text' name='name' />
            </label>
            <label>
                E-mail
                <input type='email' name='email' />
            </label>
            <label>
                Password
                <input type='password' name='password' />
            </label>
            <button type='submit'>Register</button>
        </form>
    )
};

export default RegisterForm;