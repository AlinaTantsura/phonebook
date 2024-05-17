
import { Flex} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { selectIsLogIn } from "reduxToolkit/auth/selectors";
import { NavLink as ReactRouterLink } from 'react-router-dom'
import { Link as ChakraLink} from '@chakra-ui/react'

const Navigation = () => {
    const isLogIn = useSelector(selectIsLogIn);
    const activeStyles = {
        padding: '4px',
        backgroundColor: 'teal',
        borderRadius: '4px',
        color: 'white'
    }

    return (<nav>
        <Flex gap={6} direction={{base: 'column', sm: 'row' }}>
            <ChakraLink as={ReactRouterLink} to='/' _activeLink={activeStyles}>Home</ChakraLink>
            {!isLogIn ? (
                <>
                    <ChakraLink as={ReactRouterLink} to='/register' _activeLink={activeStyles}>Register</ChakraLink>
                    <ChakraLink as={ReactRouterLink} to='/login' _activeLink={activeStyles}>Log in</ChakraLink>
                </>
            ) : (<ChakraLink as={ReactRouterLink} to='/contacts' _activeLink={activeStyles}>Contacts</ChakraLink>)}
        </Flex>    
    </nav>)
};

export default Navigation;