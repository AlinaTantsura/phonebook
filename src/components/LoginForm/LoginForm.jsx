import { Button, FormControl, FormLabel, Input, useToast } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "reduxToolkit/auth/operations";
import { selectToken } from "reduxToolkit/auth/selectors";

const LoginForm = () => {
    const dispatch = useDispatch();
    const toast = useToast();
    const token = useSelector(selectToken);
    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        dispatch(logIn({ email: form.elements.email.value, password: form.elements.password.value }));
        console.log(token)
        if (!token) {
            toast({
                position: 'top-right',
                title: 'Wrong e-mail or password.',
                description: "Maybe you are not registered)",
                status: 'error',
                duration: 4000,
            })
        }
        form.reset();
        }

    return (
        <form onSubmit={handleLogin}>
            <FormControl  margin={6}>
                <FormLabel htmlFor='email'>Email</FormLabel>
                <Input
                    type='email'
                    name='email'
                    id='email'
                    required
                    marginBottom={3}
                    w={250}
                    _focus={{
                        border: 'solid 1px teal',
                        boxShadow: '0 0 0 1px teal'
                    }} />
            
                <FormLabel htmlFor="password">Password</FormLabel>
                <Input
                    type='password'
                    name='password'
                    id='password'
                    required
                    pattern=".{7,}"
                    title="Seven or more characters"
                    marginBottom={3}
                    w={250} _focus={{
                        border: 'solid 1px teal',
                        boxShadow: '0 0 0 1px teal'
                    }} />
                <br/>
                <Button colorScheme='teal'
                    variant='outline'
                    type='submit'
                    _hover={{
                        backgroundColor: 'teal',
                        color: 'white'}}>Log in</Button>
            </FormControl>
        </form>
    )
};

export default LoginForm;