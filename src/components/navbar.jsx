


import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import menu icons
import logo from '../assets/stay/log.png'; 

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className='relative z-50'>
      {/* Navbar container */}
      <div className='flex items-center justify-between p-4 lg:mt-2 mb-10 lg:mr-10  text-white'>
        {/* Logo */}
        <div className='flex items-center '>
          <img 
            src={logo} // Use the imported logo here
            alt='Logo'
            className=' h-12 lg:h-20 ml-6 mt-4 rounded-full' // Adjust the height as needed
          />
        
        </div>

        {/* Menu icon for small screens */}
        <button 
          className='lg:hidden p-2' 
          onClick={toggleMenu}
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Navbar links */}
        <ul className={`lg:flex lg:text-xl lg:space-x-6 ${isMenuOpen ? 'flex flex-col absolute top-full left-0 w-full bg-gray-600 lg:relative lg:top-auto' : 'hidden'}`}>
          <li className='p-4 lg:p-0'>
            <a href='/' className='hover:text-gray-400'>Home</a>
          </li>
          <li className='p-4 lg:p-0'>
            <a href='/gallaryimage' className='hover:text-gray-400'>Gallery</a>
          </li>
          <li className='p-4 lg:p-0'>
            <a href='/Places' className='hover:text-gray-400'>Places</a>
          </li>
          <li className='p-4 lg:p-0'>
            <a href='/contact' className='hover:text-gray-400'>Contact</a>
          </li>
          <li className='p-4 lg:p-0'>
            <a href='/map' className='hover:text-gray-400'>Map</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
