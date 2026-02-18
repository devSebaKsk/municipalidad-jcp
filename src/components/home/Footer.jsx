import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <p className="font-bold text-jcp text-lg mb-1">Municipalidad de José C. Paz</p>
          <p>Intendencia Mario Ishii. Gestión y Transparencia.</p>
        </div>
        <div className="flex space-x-6">
          <Link to="/" className="hover:text-jcp transition-colors">Privacidad</Link>
          <Link to="/" className="hover:text-jcp transition-colors">Contacto</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
