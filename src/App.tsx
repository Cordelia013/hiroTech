import React from 'react';
import { ProductSection } from './components/ProductSection';
import { NavBar } from './components/NavBar';

import './App.css';

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <>
      <NavBar />
      <ProductSection />
    </>
  );
};

export default App;
