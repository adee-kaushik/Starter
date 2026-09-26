import { useState } from 'react';
import { businessData } from '../data/business-data';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="px-6 py-4 bg-brand-bg border-b border-brand-maroon/15">
      <div className="flex items-center justify-between">
        <div className="font-display text-2xl font-semibold text-brand-maroon">
          {businessData.name}
        </div>

        <ul className="hidden md:flex gap-6 font-body text-brand-text font-medium">
          <li><a href="#showcase" className="hover:text-brand-maroon">Collections</a></li>
          <li><a href="#about" className="hover:text-brand-maroon">About</a></li>
          <li><a href="#contact" className="hover:text-brand-maroon">Contact</a></li>
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={`https://wa.me/${businessData.whatsapp}`}
            className="hidden md:inline-block px-4 py-2 bg-brand-maroon text-white rounded-full text-sm font-body font-medium hover:bg-brand-maroon/90"
          >
            WhatsApp
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
          >
            <span className="w-6 h-0.5 bg-brand-text"></span>
            <span className="w-6 h-0.5 bg-brand-text"></span>
            <span className="w-6 h-0.5 bg-brand-text"></span>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4">
          <ul className="flex flex-col gap-4 font-body text-brand-text font-medium">
            <li><a href="#showcase" onClick={() => setIsOpen(false)} className="hover:text-brand-maroon">Collections</a></li>
            <li><a href="#about" onClick={() => setIsOpen(false)} className="hover:text-brand-maroon">About</a></li>
            <li><a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-brand-maroon">Contact</a></li>
          </ul>
          <a
            href={`https://wa.me/${businessData.whatsapp}`}
            className="text-center px-4 py-2 bg-brand-maroon text-white rounded-full text-sm font-body font-medium"
          >
            WhatsApp
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;