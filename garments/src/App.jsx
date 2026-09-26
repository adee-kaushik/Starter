import React from 'react';

import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Showcase from './Components/Showcase';
import About from './Components/About';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Hero/>
      <Showcase/>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;