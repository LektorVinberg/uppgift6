import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { useState } from 'react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import AddMovieForm from './components/AddMovieForm';
import Movie from './components/Movie';

function App() {
  const [movies, setMovies] = useState([]);
  const addMovieToList = (title, rating) => {
    console.log(`Lägger till ${title} med betyget ${rating}...`);
    const newMovie = (
      <Movie
        key={title}
        title={title}
        rating={rating}
        deleteMovie={deleteMovie}
      />
    );
    setMovies([...movies, newMovie]);
  };

  const deleteMovie = () => {
    console.log('nu slänger vi en film!!');
  };

  return (
    <ChakraProvider theme={theme}>
      <AddMovieForm addMovie={addMovieToList} />

      {/* <Movie title="apornas plan" rating={5} deleteMovie={deleteMovie} /> */}

      {movies}

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
