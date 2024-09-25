import React from 'react';
import BackgroundImage from '../assets/stay/sl1.jpg'; // Replace with your image path

const GalleryPage = () => {
  return (
    <div 
      className='relative w-full lg:mt-10 h-[40vh] lg:w-full lg:h-[80vh] flex items-center justify-center bg-cover bg-center rounded-lg'
      style={{ backgroundImage: `url(${BackgroundImage})`, backgroundPosition: 'center center' }}
    >
      <div className='absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
        <div className='text-center px-4 lg:px-8'>
          <h1 className='text-white text-2xl lg:text-4xl font-bold mb-6'>
            Welcome to Our Gallery
          </h1>
          <a 
            href='/gallaryimage' 
            className='inline-block lg:px-6 lg:py-3 px-4 py-2  lg:text-lg font-semibold text-white bg-blue-800 rounded-lg shadow-md hover:bg-blue-600'
          >
            View Gallery
          </a>
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
