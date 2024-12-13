import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import ChatProvider from './Context/ChatProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  
  <React.StrictMode>
    <BrowserRouter>
    <ChatProvider>
    <ChakraProvider value={defaultSystem}>
    <App />
    </ChakraProvider>
    </ChatProvider>
    </BrowserRouter>
  </React.StrictMode>
);


