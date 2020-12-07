import React, { useState } from 'react';
import './App.css';
import Hero from './components/Hero/Hero';
import Info from './components/Info/Info';
import Home from './containers/Home/Home';
import Navigator from './containers/Navigator/Navigator';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Home
        isMenuClicked={() => setIsMenuOpen(!isMenuOpen)}
        isMenuOpen={isMenuOpen}
      />
      <Navigator isOpen={isMenuOpen} />
      <div className={`${isMenuOpen ? 'move-body' : ''} main`}>
        <Hero />
      </div>
      <Info />
    </>
  );
}

export default App;
