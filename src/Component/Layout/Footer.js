import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-pink-700 text-white p-8">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <div className="w-full sm:w-1/2 lg:w-1/4 bg-pink-700 p-4 rounded-lg mb-4 sm:mb-0">
          <h2 className="text-4xl font-bold hover:text-blue-600">Quick Links</h2>
          <ul className="mt-2">
            <li>
              <Link to="/" className="text-gray-400 hover:text-blue-600">
                Home
              </Link>
            </li>
            <li>
              <Link to="/services" className="text-gray-400 hover:text-blue-600">
                Products
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-gray-400 hover:text-blue-600">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/4 bg-pink-700 p-4 rounded-lg mb-4 sm:mb-0">
          <h2 className="text-4xl font-bold hover:text-blue-600">Contact Us</h2>
          <p className="mt-2">AL-NISA Shopping near Airport, Rawalpindi</p>
          <p>Email: AlNisa123@gmail.com</p>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/4 bg-pink-700 p-4 rounded-lg mb-4 sm:mb-0">
          <h2 className="text-4xl font-bold hover:text-blue-600">Follow Us</h2>
          <div className="flex space-x-6 mt-2">
            <a href="#" className="text-gray-400 hover:text-blue-600">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-600">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-600">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 sm:mt-16 text-center bg-gray-900 p-4 rounded-lg">
        <p className="text-sm">&copy; 2023 My React App. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
