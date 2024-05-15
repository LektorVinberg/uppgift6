import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Select,
  VStack,
  Button,
  Box,
  Card,
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';

export default function AddMovieForm({ addMovie }) {
  const [title, setTitle] = useState('');
  const [titleError, setTitleError] = useState(false);
  /* const titleError = title === ''; */
  const [rating, setRating] = useState();
  const [ratingError, setRatingError] = useState(false);
  /* let ratingError = rating === ''; */

  useEffect(() => {
    if (title) {
      console.log(title);
    }
  }, [title]);

  useEffect(() => {
    console.log(rating);
  }, [rating]);

  const validateFields = () => {
    if (!rating) {
      setRatingError(true);
    }
    if (!title) {
      setTitleError(true);
    }

    if (title && rating) {
      addMovie(title, rating);
      setTitle('');
      setRating(0);
    }
  };

  return (
    <Card margin={'3%'} padding={'2%'}>
      <VStack>
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
              setRating(() => {
                return Number.parseInt(e.target.value);
              });
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
