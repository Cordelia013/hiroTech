import React from 'react';
import './App.css';

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <>
      <div className="p-4 bg-gray-100">
        <h1 className="text-xl font-bold">Bienvenue dans mon application</h1>
      </div>
    </>
  );
};

export default App;
