import React from 'react';
import { AboutSection } from './components/AboutSection';
import { NavBar } from './components/NavBar';

import './App.css';

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <>
      <NavBar />
      <AboutSection />
    </>
  );
};

export default App;
