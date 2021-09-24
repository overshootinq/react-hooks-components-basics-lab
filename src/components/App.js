import React from "react";

const NavBar = () => {
  return (
    <nav>
      <a href="#home">I'm a link!</a>
    </nav>
  );
}

const Home = () => {
  return (
    <div id="home">
      <h1>Home</h1>
    </div>
  );
}

const About = () => {
  return (
    <div id="about">
      <h1>About</h1>
    </div>
  )
}


function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
    </div>
  );
}

export default App;
