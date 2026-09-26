


import { businessData } from '../data/business-data';
 
function Footer() {
  return (
    <footer id="contact" className="px-6 py-12 bg-brand-text text-white/80">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
        <div className="font-display text-xl font-semibold text-white">{businessData.name}</div>
 
        <div className="flex gap-6 font-body">
          <a href={`https://wa.me/${businessData.whatsapp}`} className="hover:text-brand-gold">
            WhatsApp
          </a>
          <a href={`https://instagram.com/${businessData.instagram}`} className="hover:text-brand-gold">
            Instagram
          </a>
        </div>
      </div>
 
      <p className="font-body text-center text-sm text-white/60 mt-6">
        {businessData.address}
      </p>
      <p className="font-body text-center text-sm text-white/40 mt-2">
        © 2026 {businessData.name}. All rights reserved.
      </p>
    </footer>
  );
}
 
export default Footer;
 
