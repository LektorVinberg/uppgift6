import React from 'react';
import {
  ChakraProvider,
  Card,
  Button,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  HStack,
  Heading,
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import AddMovieForm from './components/AddMovieForm';
import Movie from './components/Movie';

function App() {
  const [movies, setMovies] = useState([]);
  const [movieId, setMovieId] = useState(0);
  useEffect(() => {
    console.log('ngt har ändrats i movies...');
    console.log(movies);
  }, [movies]);

  const addMovieToList = (title, rating) => {
    console.log(`Lägger till ${title} med betyget ${rating}...`);
    const newMovie = {
      id: movieId,
      title: title,
      rating: rating,
    };
    setMovieId(movieId + 1);
    setMovies([...movies, newMovie]);
  };

  const deleteMovie = id => {
    console.log('nu slänger vi en film!!', id);
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

      {/* <Movie title="apornas plan" rating={5} deleteMovie={deleteMovie} /> */}
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

      {/* <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <Logo h="40vmin" pointerEvents="none" />
            <Text>
              Edit <Code fontSize="xl">src/App.js</Code> and save to relöd.
            </Text>
            <Link
              color="teal.500"
              href="https://chakra-ui.com"
              fontSize="2xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn Chakra
            </Link>
          </VStack>
        </Grid>
      </Box> */}
    </ChakraProvider>
  );
}

export default App;
