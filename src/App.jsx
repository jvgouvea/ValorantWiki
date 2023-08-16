import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { ValorantApiProvider } from './context/ValorantApi';
import Rotas from './routes';

import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <ValorantApiProvider>
        <Header />
        <Rotas />
        <Footer />
      </ValorantApiProvider>
    </BrowserRouter>
  );
};

export default App;
