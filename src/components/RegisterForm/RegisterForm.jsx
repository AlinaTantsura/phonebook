import { Button, FormControl, FormLabel, Input, useToast } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "reduxToolkit/auth/operations";
import { selectToken } from "reduxToolkit/auth/selectors";

const RegisterForm = () => {
    const dispatch = useDispatch();
    const token = useSelector(selectToken);
    const toast = useToast();

    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        dispatch(register({
            name: form.elements.name.value,
            email: form.elements.email.value,
            password: form.elements.password.value,
        }));
        if (!token) {
            toast({
                position: 'top-right',
                title: 'E-mail is already used.',
                description: "Please, log in or use another e-mail.",
                status: 'error',
                duration: 4000,
            })
        }
        form.reset();
    }
    return (
        <form onSubmit={handleRegister}>
            <FormControl margin={6}>
                <FormLabel htmlFor='name' >Username</FormLabel>
                    <Input
                        type='text'
                        name='name'
                        id='name'
                        required
                        marginBottom={3}
                        w={250}
                        _focus={{
                            border: 'solid 1px teal',
                            boxShadow: '0 0 0 1px teal'
                        }} />
            
                <FormLabel htmlFor='email'>E-mail </FormLabel>
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
           
                <FormLabel htmlFor='password'>Password</FormLabel>
                    <Input
                        type='password'
                        name='password'
                        id='password'
                        required
                        marginBottom={3}
                        w={250}
                        pattern=".{7,}"
                        title="Seven or more characters"
                        _focus={{
                            border: 'solid 1px teal',
                            boxShadow: '0 0 0 1px teal'
                        }} />
                <br/>
                <Button colorScheme='teal'
                    variant='outline'
                    type='submit'
                    _hover={{
                        backgroundColor: 'teal',
                        color: 'white'}}>Register</Button>
            </FormControl>
        </form>
    )
};

export default RegisterForm;