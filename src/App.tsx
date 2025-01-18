import React from 'react';
import { AboutSection } from './section/AboutSection';
import './App.css';

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <>
      <AboutSection />
    </>
  );
};

export default App;
