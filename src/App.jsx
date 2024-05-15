import React from 'react';
import {
  ChakraProvider,
  Card,
  Button,
  VStack,
  theme,
  HStack,
  Heading,
} from '@chakra-ui/react';
import { useState } from 'react';
import AddMovieForm from './components/AddMovieForm';
import Movie from './components/Movie';

function App() {
  const [movies, setMovies] = useState([]);
  const [movieId, setMovieId] = useState(0);

  const addMovieToList = (title, rating) => {
    const newMovie = {
      id: movieId,
      title: title,
      rating: rating,
    };
    setMovieId(movieId + 1);
    setMovies([...movies, newMovie]);
  };

  const deleteMovie = id => {
    setMovies(() => {
      return movies.filter(movie => movie.id !== id);
    });
  };

  const sortByTitle = () => {
    setMovies(() => {
      return [...movies].sort((a, b) => a.title.localeCompare(b.title));
    });
  };

  const sortByRating = () => {
    setMovies(() => {
      return [...movies].sort((a, b) => a.rating - b.rating);
    });
  };

  return (
    <ChakraProvider theme={theme}>
      <AddMovieForm addMovie={addMovieToList} />

      {movies.length > 0 && (
        <>
          <Card margin={'3%'} padding={'2%'}>
            <VStack>
              <Heading>Min filmlista</Heading>
              {movies.map((movie, index) => (
                <Movie
                  key={index}
                  id={movie.id}
                  title={movie.title}
                  rating={movie.rating}
                  deleteMovie={deleteMovie}
                />
              ))}

              <HStack>
                <Button onClick={sortByTitle}>Alfabetisk ordning</Button>
                <Button onClick={sortByRating}>Betygsordning</Button>
              </HStack>
            </VStack>
          </Card>
        </>
      )}
    </ChakraProvider>
  );
}

export default App;
