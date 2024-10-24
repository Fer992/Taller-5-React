import React from 'react';

const Header = () => {
  return (
    <header className="bg-violet-600 text-white p-4 w-full">
      <div className="container mx-auto flex justify-center items-center">
        <h1 className="text-3xl font-bold text-black">Taller de React 5</h1>
        <nav className="ml-8">
          <ul className="flex space-x-4">
            <li>
              <a href="/" className="hover:text-blue-400">Home</a>
            </li>
            <li>
              <a href="/about" className="hover:text-blue-400">Acerca de Fernanda</a>
            </li>
            <li>
              <a href="/services" className="hover:text-blue-400">Servicios</a>
            </li>
            <li>
              <a href="/contact" className="hover:text-blue-400">Contacto</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
