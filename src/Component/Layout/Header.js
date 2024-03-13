import React, { useState } from 'react';


const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="flex justify-between items-center bg-pink-500 text-white">
      <div className="pl-4 rounded">
        <img src="./Assets/logo.jpg" alt="Logo" className="h-8 w-8 mr-2" />
      </div>
      <div>
        <nav>
          <ul className="flex space-x-24 pr-48">
            <li><a href="/" className="hover:underline font-bold">Home</a></li>
            <li><a href="/about" className="hover:underline font-bold">About</a></li>
            <li><a href="/contact" className="hover:underline font-bold">Contact</a></li>
            <li className="relative" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
              <a href="/services" className="hover:underline font-bold">Products</a>
              {isDropdownOpen && (
                <ul className="absolute z-50 bg-pink-500 border rounded-md py-4 mt-2 space-y-2">
                  <li><a href="hotdeals" className="block px-4 py-2 text-white hover:bg-pink-400">Hot Deals</a></li>
                  <li><a href="topsellings" className="block px-4 py-2 text-white hover:bg-pink-400">New Arrivals</a></li>
                  <li><a href="order" className="block px-4 py-2 text-white hover:bg-pink-400">Our Brands</a></li>
                  <li><a href="/services" className="block px-4 py-2 text-white hover:bg-pink-400">Accessories</a></li>
                </ul>
              )}
            </li>
            <li><a href="/dashboard" className="hover:underline font-bold">Dashboard</a></li>
          </ul>
        </nav>
      </div>
      <div className="flex items-center pr-10 pt-3">
        <input
          type="text"
          placeholder="Search"
          className="border border-black-600 rounded-xl px-2 py-1 mr-2 hover:border-gray-500 mb-2"
        />
        <button className="bg-pink-400 text-white px-3 py-1 rounded-xl hover:bg-pink-900 mb-2">
          Search
        </button>
      </div>
    </div>
  );
};

export default Header;
