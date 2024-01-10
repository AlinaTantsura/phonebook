import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { register } from "reduxToolkit/auth/operations";

const RegisterForm = () => {
    const dispatch = useDispatch();
    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        dispatch(register({
            name: form.elements.name.value,
            email: form.elements.email.value,
            password: form.elements.password.value,
        }));
        form.reset();
    }
    return (
        <form onSubmit={handleRegister}>
            <FormControl margin={6}>
                <FormLabel htmlFor='name' >Username</FormLabel>
                    <Input type='text' name='name' id='name' marginBottom={3} w={250} _focus={{border:'solid 1px teal', boxShadow:'0 0 0 1px teal'}}/>
            
                <FormLabel htmlFor='email'>E-mail </FormLabel>
                    <Input type='email' name='email' id='email' marginBottom={3} w={250} _focus={{border:'solid 1px teal', boxShadow:'0 0 0 1px teal'}} />
           
                <FormLabel htmlFor='password'>Password</FormLabel>
                    <Input type='password' name='password' id='password' marginBottom={3} w={250} _focus={{border:'solid 1px teal', boxShadow:'0 0 0 1px teal'}} />
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