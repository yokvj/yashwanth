


import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import Image1 from '../assets/stay/sl1.jpg'
import Image2 from '../assets/stay/sl2.jpg';
import Image3 from '../assets/stay/sl3.jpg';
import Image4 from '../assets/stay/sl4.jpg'; // Corrected the path for Image4

const images = [Image1, Image2, Image3, Image4];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 4000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
      <div className='relative flex justify-center'>
        <div className='relative w-full lg:w-[100%]'> {/* Adjust width here */}
          <motion.img
            key={currentImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }} // Fade transition duration
            className='w-full h-[25vh] object-cover rounded-lg lg:h-[70vh] lg:w-full' // Adjust height here
            src={images[currentImage]}
            alt={`Slide ${currentImage + 1}`}
          />
        </div>
      </div>

      {/* Paragraph section */}
      <div className='flex justify-center ml-0 mt-8 lg:mt-12'>
      <p className=' lg:text-lg xl:text-xl text-1xl font-small text-justify  text-neutral-400 bg-opacity-70 p-4 lg:p-6 rounded-xl max-w-4xl lg:max-w-5xl xl:max-w-6xl  lg:mx-auto'>
  Discover the serene beauty of Cozy Nest Backwater Homestay, a charming retreat nestled in the picturesque Garagandur B area, near the  backwaters of Hargani Dam. Located in Garagandur B village Somvarpet Taluk, our homestay offers a peaceful escape from the hustle and bustle of city life. Enjoy breathtaking views and explore the lush surroundings, with convenient access to local attractions. Situated just 13 km from Somvarpet and 26 km from Madikeri, we provide the perfect blend of comfort and nature for a memorable stay.
</p>

      </div>

      {/* Text gradient style */}
      <style jsx>{`
        .text-gradient {
          background: linear-gradient(to right, #02105a, #bfdbfe); 
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          color: transparent;
        }
      `}</style>
    </div>
  );
}

export default Hero;
