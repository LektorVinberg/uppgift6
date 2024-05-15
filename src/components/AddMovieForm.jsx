import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Select,
  VStack,
  Button,
  Heading,
  Card,
  useToast,
} from '@chakra-ui/react';
import { useState } from 'react';

export default function AddMovieForm({ addMovie }) {
  const [title, setTitle] = useState('');
  const [titleError, setTitleError] = useState(false);
  const [rating, setRating] = useState();
  const [ratingError, setRatingError] = useState(false);

  const toast = useToast();

  const validateFields = () => {
    if (!rating) {
      setRatingError(true);
      toast({
        title: 'Fel',
        description: 'Du har glömt fylla i filmens betyg',
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'top',
      });
    }
    if (!title) {
      setTitleError(true);
      toast({
        title: 'Fel',
        description: 'Du har glömt fylla i filmens titel',
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'top',
      });
    }

    if (title && rating) {
      addMovie(title, Number.parseInt(rating));
      setTitle('');
      setRating(0);
    }
  };

  return (
    <Card margin={'3%'} padding={'2%'}>
      <VStack>
        <Heading>Lägg till en film</Heading>
        <FormControl isRequired isInvalid={titleError}>
          <FormLabel>Titel:</FormLabel>
          <Input
            value={title}
            placeholder="Skriv filmens titel här"
            onChange={e => {
              setTitle(e.target.value);
              if (e.target.value === '') {
                setTitleError(true);
              } else {
                setTitleError(false);
              }
            }}
          />
          {titleError && (
            <FormErrorMessage>Du måste fylla i filmens titel</FormErrorMessage>
          )}
        </FormControl>

        <FormControl isRequired isInvalid={ratingError}>
          <FormLabel>Betyg:</FormLabel>
          <Select
            value={rating}
            placeholder="Sätt betyg på filmen"
            onChange={e => {
              setRating(e.target.value);
              if (e.target.value === '') {
                setRatingError(true);
              } else {
                setRatingError(false);
              }
            }}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Select>
          {ratingError && (
            <FormErrorMessage>
              Du måste fylla i ett betyg för filmen
            </FormErrorMessage>
          )}
        </FormControl>

        <Button onClick={() => validateFields()}>Spara film</Button>
      </VStack>
    </Card>
  );
}
