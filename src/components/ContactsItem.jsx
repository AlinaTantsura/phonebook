import { Button, ListItem, Text } from '@chakra-ui/react';
import React from 'react';
import sprite from '../sprite.svg';
import { useDispatch } from 'react-redux';
import { handleFavorite } from 'reduxToolkit/contacts/operations';

const ContactsItem = ({ contactsInfo, handleClick }) => {
    const { id, name, phone, email, favorite } = contactsInfo;
    const dispatch = useDispatch()
    const fav = favorite ? false : true;
  return (
    <ListItem
      minWidth="320px"
      maxWidth="400px"
      display="flex"
      position="relative"
      flexDirection="column"
      alignItems="center"
      gap="10px"
      key={id}
      fontSize={16}
      mb={3}
      p={3}
      border="solid 1px lightgrey"
      borderRadius="10px"
      boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
      _hover={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}
    >
      <Text fontWeight="700" fontSize="18px">
        {name}
      </Text>
      <Button colorScheme="none" position="absolute" right="8px" top="8px" onClick={() => dispatch(handleFavorite({"contactId": id, "favorite": fav}))}>
        <svg width="24px" height="24px">
          <use
            href={
              favorite
                ? sprite + '#icon-Property-1pressed'
                : sprite + '#icon-Property-1Default'
            }
          />
        </svg>
      </Button>
      <Text>
        <b>Phone number:</b> {phone}
      </Text>
      <Text>
        <b>Email:</b> {email}
      </Text>
      <Button
        maxWidth="100px"
        colorScheme="teal"
        variant="outline"
        ml={3}
        type="button"
        _hover={{
          backgroundColor: 'teal',
          color: 'white',
        }}
        onClick={handleClick}
      >
        Delete
      </Button>{' '}
    </ListItem>
  );
};

export default ContactsItem;
