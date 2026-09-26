import { businessData } from '../data/business-data';

function Footer() {
  return (
    <footer id="contact" className="px-6 py-12 bg-gray-900 text-gray-300">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-xl font-bold text-white">{businessData.name}</div>

        <div className="flex gap-6">
          <a href={`https://wa.me/${businessData.whatsapp}`} className="hover:text-white">
            WhatsApp
          </a>
          <a href={`https://instagram.com/${businessData.instagram}`} className="hover:text-white">
            Instagram
          </a>
        </div>
      </div>

      <p className="text-center text-sm text-gray-500 mt-6">
        {businessData.address}
      </p>

      <p className="text-center text-sm text-gray-600 mt-2">
        © 2026 {businessData.name}. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;