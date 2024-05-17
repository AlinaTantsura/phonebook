import { Container, Heading, Text } from "@chakra-ui/react";
import { Link as ReactRouterLink, useLocation, useNavigate} from "react-router-dom";
import { Link as ChakraLink} from '@chakra-ui/react'
import { useEffect } from "react";
import { selectIsLogIn, selectUser } from "reduxToolkit/auth/selectors";
import { useSelector } from "react-redux";
import { selectIsLoading } from "reduxToolkit/contacts/selectors";

const Home = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const isLogIn = useSelector(selectIsLogIn);
    const isLoading = useSelector(selectIsLoading)
    const userName = useSelector(selectUser).name;

    useEffect(() => {
        if (location.pathname !== '/') navigate('/');
    }, [location, navigate])
    
    return (
        <Container p={6}>
            {isLoading && (<h2>Please wait)) Our app is connecting with server. It might takes some time at the first time. Thanks for you patience)))</h2>)}
            {   !isLogIn ?
                (<>
                    <Heading mb={6}>Hello! Use me for your contacts list)))</Heading>
                    <Text fontSize='2xl'>
                        <ChakraLink as={ReactRouterLink} to='/login' fontWeight={700} textDecoration='underline' _hover={{ fontWeight: 700, color: 'teal' }}>Log in</ChakraLink> if you already have an account or 
                        <ChakraLink as={ReactRouterLink} to='/register' fontWeight={700} textDecoration='underline' _hover={{ fontWeight: 700, color: 'teal' }}> register</ChakraLink> if you don't</Text>
                </>)
                : (<>
                    <Heading mb={6}>Hello, {userName}! How are you doing?)))</Heading>
                    <Text fontSize='2xl'> Your contacts are  
                        <ChakraLink as={ReactRouterLink} to='/contacts' fontWeight={700} textDecoration='underline' _hover={{ fontWeight: 700, color: 'teal' }} ml={1}>HERE</ChakraLink></Text>
                </>)}
        </Container>
    )
}

export default Home;