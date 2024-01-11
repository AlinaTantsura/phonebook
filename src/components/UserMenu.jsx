import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Button, Flex } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "reduxToolkit/auth/operations";
import { selectUser } from "reduxToolkit/auth/selectors";

const UserMenu = () => {
    const { name } = useSelector(selectUser);
    const dispatch = useDispatch();

    const handleClick = () => {
        return dispatch(logOut());
    }
    return (
        <Flex gap={6} align='center'>
            <p>Hello, {name}</p>
            <Button
                rightIcon={<ArrowForwardIcon />}
                colorScheme='teal'
                variant='outline'
                type='button'
                onClick={handleClick}
                _hover={{
                        backgroundColor: 'teal',
                        color: 'white'}}>Log out</Button>
        </Flex>
    );
};

export default UserMenu;