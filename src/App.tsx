<<<<<<< HEAD
import React from 'react';
import { AboutSection } from './components/AboutSection';
import { NavBar } from './components/NavBar';

import './App.css';
=======
import React from "react";
import { AboutSection } from "./section/AboutSection";
import "./App.css";
import HeroSection from "./section/HeroSection";
import InstaSection from "./section/InstaSection";
import ContactSection from "./section/ContactSection";
>>>>>>> 812702d6d263e9c5a7c82712935be6fb10ca6460

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <>
<<<<<<< HEAD
      <NavBar />
=======
      <HeroSection />
>>>>>>> 812702d6d263e9c5a7c82712935be6fb10ca6460
      <AboutSection />
      <InstaSection />
      <ContactSection />
    </>
  );
};

export default App;
