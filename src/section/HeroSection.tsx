import React, { useState, useEffect } from "react";

const HeroSection: React.FC = () => {
  const [visibleLines, setVisibleLines] = useState<number>(0); // Tracks the number of lines visible

  // Lines to display
  const lines = [". ECOLOGY", ". INNOVATION", ". FUNGI"];
  useEffect(() => {
    // Gradually display each line one by one in a loop
    const interval = setInterval(() => {
      setVisibleLines((prev) => {
        if (prev < lines.length) {
          return prev + 1; // Affiche la ligne suivante
        } else {
          return 0; // Réinitialise à 0 une fois toutes les lignes affichées
        }
      });
    }, 1500); // Change line every 1 second

    return () => clearInterval(interval); // Nettoyage de l'intervalle
  }, [lines.length]);

  return (
    <div className="relative min-h-screen font-biryani bg-orangeC flex items-center justify-center flex-col z-20">
      {/* Logo */}
      <img
        src="/assets/logo-png.png"
        alt="logo hiro"
        className="w-[760px] h-[272px]"
      />

      {/* Main content */}
      <div className="flex justify-center mt-5 ml-20">
        <h1 className="text-4xl font-normal text-whiteC flex">
          Hirotechnologies is shaping the <br />
          future of recycling with a focus on{" "}
          <div className="ml-10">
            <ul className="text-3xl relative top-12">
              {/* Render lines with animation */}
              {lines.map((line, index) => (
                <li
                  key={index}
                  className={`transition-opacity duration-500 ease-in ${
                    index < visibleLines ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </h1>
      </div>
    </div>
  );
};

export default HeroSection;
