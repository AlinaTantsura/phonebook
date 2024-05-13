import { Box, Flex } from "@chakra-ui/react";
import Navigation from "components/Navigation";
import UserMenu from "components/UserMenu";
import { useSelector } from "react-redux";
import { selectIsLogIn } from "reduxToolkit/auth/selectors";

const Header = () => {
    const isLogIn = useSelector(selectIsLogIn);
    return (<Box as='header' p={6} fontSize={20} shadow='rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;'>
        <Flex align='center' gap={{base: '8px', md: '10px' }} justify={isLogIn ? "space-between" : "center"}>
            <Navigation />  
            {isLogIn && <UserMenu />}
        </Flex>
    </Box>)
}

export default Header;