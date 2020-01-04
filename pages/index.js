import { Box, Text } from '@chakra-ui/core';
import Head from 'next/head';
import React from 'react';

const Home = () => (
  <Box bg="gray.900" h="inherit">
    <Head>
      <title>Elixir Lou</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Box>
      <Text color="white">Elixir Lou coming soon...</Text>
    </Box>
  </Box>
);

export default Home;
