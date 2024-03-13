import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.css';


const Hero = () => {
  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const backgrounds = ['./Assets/1.jpg', './Assets/2.jpg', './Assets/3.jpg','./Assets/34.jpg'];


  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div
        className="relative bg-cover bg-center h-screen flex items-center justify-center"
        style={{ backgroundImage: `url('${backgrounds[backgroundIndex]}')` }}
      >
        <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className="text-center text-black relative z-10">
          <h1  className="text-6xl font-bold mb-4 text-pink-900">
            Welcome to Our Website
          </h1>
          <h1 className="text-3xl font-bold mb-4 text-pink-600">AL-NISA</h1>
          <p className="text-lg mb-8">Discover amazing products and more...</p>
          <div className="flex space-x-4 ml-64">
            <Link to="/login">
              <button data-aos="zoom-in-up" className="bg-red-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-xl">
                Login
              </button>
            </Link>
            <Link to="/register">
              <button data-aos="zoom-in-up" className="bg-red-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-xl">
                Register
              </button>
              
            </Link>
          </div>
        </div>
      </div>

    </>
  );
};

export default Hero;
