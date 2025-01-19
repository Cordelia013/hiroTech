import React from "react";

// Components
import { NavBar } from "./section/components/NavBar";

// Sections
import HeroSection from "./section/HeroSection";
import { AboutSection } from "./section/AboutSection";
import InstaSection from "./section/InstaSection";
import ContactSection from "./section/ContactSection";

// Styles
import "./App.css";

type AppProps = object;

const App: React.FC<AppProps> = () => {
  return (
    <div className="max-w-full overflow-hidden">
      <NavBar />

      <HeroSection />

      <AboutSection />

      <InstaSection />

      <ContactSection />
    </div>
  );
};

export default App;
