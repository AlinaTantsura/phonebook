import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Avatar, Button, Flex, Text } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { logOut, verify} from 'reduxToolkit/auth/operations';
import { selectUser } from 'reduxToolkit/auth/selectors';

const UserMenu = () => {
  const { name, email, verify, avatarURL } = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleClick = () => {
    return dispatch(logOut());
  };

  const handleClickVerify = () => {
    return dispatch(verify({ email: email }));
  };
  return (
    <Flex content="center" direction="column" align="end">
          <Flex gap={5} align="center">
              <Avatar name={name} src={avatarURL} />
        <p>Hello, {name}</p>
        <Button
          rightIcon={<ArrowForwardIcon />}
          colorScheme="teal"
          variant="outline"
          type="button"
          onClick={handleClick}
          _hover={{
            backgroundColor: 'teal',
            color: 'white',
          }}
        >
          Log out
        </Button>
      </Flex>
      {!verify && (
        <Text fontSize="sm" color="tomato">
          Please, verify your email. If you have no letters, click for a new one
          <Button
            ml="4px"
            size="sm"
            variant="link"
            type="button"
            padding={0}
            onClick={handleClickVerify}
            _hover={{
              backgroundColor: 'teal',
              color: 'white',
            }}
          >
            HERE
          </Button>
        </Text>
      )}
    </Flex>
  );
};

export default UserMenu;
