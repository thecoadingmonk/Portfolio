import React, { useState } from "react";
import "./App.css";
import Home from "./containers/Home/Home";
import Navigator from "./containers/Navigator/Navigator";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Home
        isMenuClicked={() => setIsMenuOpen(!isMenuOpen)}
        isMenuOpen={isMenuOpen}
      />
      <Navigator isOpen={isMenuOpen} />
    </>
  );
}

export default App;
