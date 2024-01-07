
import { Flex} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { selectIsLogIn } from "reduxToolkit/auth/selectors";
import { Link as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink} from '@chakra-ui/react'

const Navigation = () => {
    const isLogIn = useSelector(selectIsLogIn);

    return (<nav>
        <Flex gap={6}>
            <ChakraLink as={ReactRouterLink} to='/'>Home</ChakraLink>
            {!isLogIn ? (
                <>
                    <ChakraLink as={ReactRouterLink} to='/register'>Register</ChakraLink>
                    <ChakraLink as={ReactRouterLink} to='/login'>Log in</ChakraLink>
                </>
            ) : (<ChakraLink as={ReactRouterLink} to='/contacts'>Contacts</ChakraLink>)}
        </Flex>    
    </nav>)
};

export default Navigation;