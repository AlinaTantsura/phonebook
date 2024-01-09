import { Box, Text } from "@chakra-ui/react";
// import Input from "components/Form/Input.styled";
import { Input } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { addFilter } from "reduxToolkit/contacts/filterSlice";
import { selectFilterWord } from "reduxToolkit/contacts/selectors";

const Filter = () => {
    const filter = useSelector(selectFilterWord);
    const dispatch = useDispatch()
    const handleChange = (event) => {
        dispatch(addFilter(event.target.value));
    }

    return (
        <Box pl={6}>
        <Text>Find contacts by name</Text>
            <Input type="text" name="filter" value={filter} onChange={handleChange} marginBottom={3} w={250}/>       
        </Box>
    )
}

export default Filter;