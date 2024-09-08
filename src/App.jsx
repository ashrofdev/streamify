import './App.css';

import { ChakraProvider } from '@chakra-ui/react'

import Dashboard from './Dashboard';

function App() {
  return (
    <ChakraProvider>
      <Dashboard/>
    </ChakraProvider>
  );
}

export default App;
