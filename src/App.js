import React from 'react';
import Header from './Components/Header.js';
import About from './Components/About.js';
import Services from './Components/Services.js';
import './App.scss';

function App() {
  return (
    <div className="App">
        <Header />
        <About />
        <Services />
    </div>
  );
}

export default App;
