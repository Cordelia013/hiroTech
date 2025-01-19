import React from "react";
import { AboutSection } from "./section/AboutSection";
import "./App.css";
import HeroSection from "./section/HeroSection";
import InstaSection from "./section/InstaSection";
import ContactSection from "./section/ContactSection";
import { NavBar } from "./section/components/NavBar";

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <>
      <NavBar />
      <HeroSection />
      <AboutSection />
      <InstaSection />
      <ContactSection />
    </>
  );
};

export default App;
