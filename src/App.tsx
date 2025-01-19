import React from "react";
import { AboutSection } from "./section/AboutSection";
import "./App.css";
import HeroSection from "./section/HeroSection";
import InstaSection from "./section/InstaSection";

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <>
   
      <HeroSection />
      <AboutSection />
      <InstaSection />
    </>
  );
};

export default App;
