import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Avatar, Button, Flex, Text, useMediaQuery } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { logOut, verifyFunc } from 'reduxToolkit/auth/operations';
import { selectUser } from 'reduxToolkit/auth/selectors';

const UserMenu = () => {
  const { name, email, verify, avatarURL } = useSelector(selectUser);
  const dispatch = useDispatch();
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)')

  const handleClick = () => {
    return dispatch(logOut());
  };

  const handleClickVerify = () => {
    return dispatch(verifyFunc({ email: email }));
  };
  return (
    <Flex content="center" direction="column" align="end">
      <Flex gap={5} align="center">
        <Avatar name={name} src={avatarURL} size='sm'/>
        <Text fontSize={{base: '15px', md: '20px' }} >Hello, {name}</Text>
        <Button
          rightIcon={<ArrowForwardIcon />}
          colorScheme="teal"
          variant="outline"
          type="button"
          w={{base: '15px', md: '100px' }}
          p={{ base: '5px', md: '10px' }}
          // fontSize={{ base: '15px', md: 'none' }}
          onClick={handleClick}
          _hover={{
            backgroundColor: 'teal',
            color: 'white',
          }}
        >
          {isLargerThan768 && "Log out"}
        </Button>
      </Flex>
      {!verify && (
        <Text fontSize="sm" color="tomato" maxW={{base: '170px', md: '340px', lg: '600px' }}>
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
