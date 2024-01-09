import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
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
            <FormControl  margin={6}>
                <FormLabel htmlFor='email'>Email</FormLabel>
                    <Input type='text' name='email' id='email' marginBottom={3} w={250}/>
            
                <FormLabel htmlFor="password">Password</FormLabel>
                    <Input type='password' name='password' id='password' marginBottom={3} w={250}/>
                <br/>
                <Button colorScheme='teal' variant='outline' type='submit'>Log in</Button>
            </FormControl>
        </form>
    )
};

export default LoginForm;