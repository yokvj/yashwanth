

import React from 'react';
import c1 from '../assets/stay/gal2.jpg';
import c2 from '../assets/stay/gal1.jpg';
import c3 from '../assets/stay/gal3.jpg';
import c4 from '../assets/stay/gal4.jpg';
import c5 from '../assets/stay/gal5.jpg';
import c6 from '../assets/stay/gal6.jpg';
import c7 from '../assets/stay/sl1.jpg';
import c8 from '../assets/stay/sl4.jpg';
import c9 from '../assets/stay/sl2.jpg';
import c10 from '../assets/stay/s1.jpg';
import c11 from '../assets/stay/s3.jpg';
import c12 from '../assets/stay/plant.jpg';

const images = [
  c1, c2, c3, c4, c5, c6, c7, c8, c9, c10,c11,c12
];

const GalleryImages = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((src, index) => (
          <div key={index} className="relative overflow-hidden rounded-lg shadow-lg w-full h-64">
            <img
              src={src}
              alt={`Gallery Image ${index + 1}`}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryImages;
