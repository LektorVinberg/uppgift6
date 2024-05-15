import { Box, HStack, Text, IconButton } from '@chakra-ui/react';
import { StarIcon, DeleteIcon } from '@chakra-ui/icons';

export default function Movie({ id, title, rating, deleteMovie }) {
  const addStars = () => {
    return (
      <HStack>
        {[...Array(rating)].map((x, i) => (
          <StarIcon key={i} />
        ))}
      </HStack>
    );
  };
  return (
    <>
      <Box bg={'gray.200'}>
        <HStack alignContent="stretch">
          <>
            <Text>{title}</Text>
            {addStars()}
            <IconButton
              icon={<DeleteIcon />}
              onClick={() => deleteMovie(id)}
            ></IconButton>
          </>
        </HStack>
      </Box>
    </>
  );
}
