import React from "react";
import { AboutSection } from "./section/AboutSection";
import "./App.css";
import HeroSection from "./section/HeroSection";

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <>
   
      <HeroSection />
      <AboutSection />
    </>
  );
};

export default App;
