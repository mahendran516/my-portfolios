import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-700 via-gray-900 to-black text-white py-5">
      <div className="container mx-auto text-center px-5">
        <p>&copy; {new Date().getFullYear()} My Portfolio. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
