import { businessData } from '../data/business-data';
import React from 'react';

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
      <div className="text-2xl font-bold text-gray-900">{businessData.name}</div>
      <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
        <li><a href="#showcase" className="hover:text-blue-600">Collections</a></li>
        <li><a href="#about" className="hover:text-blue-600">About</a></li>
        <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
      </ul>
      
       <a href={`https://wa.me/${businessData.whatsapp}`}
        className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700"
      >
        WhatsApp
      </a>
    </nav>
  );
}

export default Navbar;