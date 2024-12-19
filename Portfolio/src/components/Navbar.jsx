import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gradient-to-b from-green-400 to-blue-500 text-white py-4 fixed w-full z-10 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6">
        <h1 className="text-3xl font-semibold tracking-wide">MAHENDRAN</h1>
        <nav className="hidden lg:flex space-x-6 text-lg">
          <li className="list-none"><a href="#about" className="hover:text-yellow-400 transition-colors duration-300">About</a></li>
          <li className="list-none"><a href="#projects" className="hover:text-yellow-400 transition-colors duration-300">Projects</a></li>
          <li className="list-none"><a href="#contact" className="hover:text-yellow-400 transition-colors duration-300">Contact</a></li>
        </nav>
        <button className="lg:hidden text-2xl" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      {isOpen && (
        <nav className="lg:hidden flex flex-col items-center bg-gradient-to-b from-green-400 to-blue-500 space-y-4 mt-4 p-4">
          <li className="list-none"><a href="#about" className="hover:text-yellow-400 transition-colors duration-300">About</a></li>
          <li className="list-none"><a href="#projects" className="hover:text-yellow-400 transition-colors duration-300">Projects</a></li>
          <li className="list-none"><a href="#contact" className="hover:text-yellow-400 transition-colors duration-300">Contact</a></li>
        </nav>
      )}
    </header>
  );
};

export default Header;
