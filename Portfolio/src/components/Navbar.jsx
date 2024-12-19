// components/Header.js
import React from 'react';

const Header = () => {
  return (
    <header className="bg-gradient-to-b from-green-400 to-blue-500 text-white py-4 fixed w-full z-10 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6">
        <h1 className="text-3xl font-semibold tracking-wide">MAHENDRAN</h1>
        <nav>
          <ul className="flex space-x-6 text-lg">
            <li><a href="#about" className="hover:text-yellow-400 transition-colors duration-300">About</a></li>
            <li><a href="#projects" className="hover:text-yellow-400 transition-colors duration-300">Projects</a></li>
            <li><a href="#contact" className="hover:text-yellow-400 transition-colors duration-300">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;