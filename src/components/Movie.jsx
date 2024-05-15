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
      <Box bg={'gray.200'} width={'80%'} borderRadius={5}>
        <HStack justifyContent="space-between" paddingLeft={5}>
          <>
            <Text>{title}</Text>
            <HStack>
              {addStars()}
              <IconButton
                icon={<DeleteIcon />}
                onClick={() => deleteMovie(id)}
                colorScheme="red"
              ></IconButton>
            </HStack>
          </>
        </HStack>
      </Box>
    </>
  );
}
