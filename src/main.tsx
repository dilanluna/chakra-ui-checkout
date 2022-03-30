import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';
import '@fontsource/inter';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/montserrat/700.css';
import App from './app';
import theme from './theme';

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
