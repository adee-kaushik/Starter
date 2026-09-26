import React from 'react';

import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Showcase from './Components/Showcase';
import About from './Components/About';
import Footer from './Components/Footer';
import { businessData } from './data/business-data';

function App() {
  return (
    <div>
      <Navbar />
      <Hero/>
      <Showcase/>
      <About/>
      <Footer/>
      
  <a href={`https://wa.me/${businessData.whatsapp}`}
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 bg-green-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-green-700 z-50"
>
  💬
</a>
    </div>
  );
}

export default App;