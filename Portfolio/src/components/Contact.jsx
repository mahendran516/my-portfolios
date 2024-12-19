import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-r from-gray-700 via-gray-900 to-black text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">Contact</h2>
        <p className="text-lg mb-2">Email: <a href="mailto:mahi87331@gmail.com" className="text-blue-400 hover:text-blue-600 transition-colors duration-300">mahi87331@gmail.com</a></p>
        <p className="text-lg mb-6">Phone: <a href="tel:+1234567890" className="text-blue-400 hover:text-blue-600 transition-colors duration-300">9791193280</a></p>
        <div className="flex justify-center space-x-6">
          <a href="https://www.linkedin.com/in/mahendran7/" target="_blank" rel="noopener noreferrer" className="transition-transform duration-300 transform hover:scale-110">
            <FaLinkedin size={40} className="text-blue-400 hover:text-blue-600"/>
          </a>
          <a href="https://github.com/mahendran516" target="_blank" rel="noopener noreferrer" className="transition-transform duration-300 transform hover:scale-110">
            <FaGithub size={40} className="text-white hover:text-gray-400"/>
          </a>
          <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="transition-transform duration-300 transform hover:scale-110">
            <FaTwitter size={40} className="text-blue-400 hover:text-blue-600"/>
          </a>
          <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="transition-transform duration-300 transform hover:scale-110">
            <FaInstagram size={40} className="text-pink-500 hover:text-pink-700"/>
          </a>
          <a href="https://wa.me/9791193280" target="_blank" rel="noopener noreferrer" className="transition-transform duration-300 transform hover:scale-110">
            <FaWhatsapp size={40} className="text-green-400 hover:text-green-600"/>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
