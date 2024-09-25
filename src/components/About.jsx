
import React, { useRef } from 'react';
import Room1 from '../assets/stay/31.jpg';
import Room2 from '../assets/stay/32.jpg';
import Room3 from '../assets/stay/33.jpg';
import Room4 from '../assets/stay/r1.jpg';
import Room5 from '../assets/stay/r2.jpg';
import Room6 from '../assets/stay/r3.jpg';

const About = () => {
  const scrollContainerRef = useRef(null);

  const handlePrevClick = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -scrollContainerRef.current.clientWidth,
        behavior: 'smooth',
      });
    }
  };

  const handleNextClick = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: scrollContainerRef.current.clientWidth,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative flex items-center justify-center my-12 mt-26">
      <button
        onClick={handlePrevClick}
        className="absolute left-0 w-12 h-12 bg-gray-400 text-white rounded-lg flex items-center justify-center z-10"
        aria-label="Previous"
      >
        &lt;
      </button>

      <div
        ref={scrollContainerRef}
        className="relative overflow-hidden w-full max-w-[800px] h-[240px] flex"
      >
        <div className="flex flex-nowrap w-full">
         
          <div className="flex flex-nowrap w-full lg:w-[2400px]">
            {[Room1, Room2, Room3, Room4, Room5, Room6].map((image, index) => (
              <div key={index} className="relative p-2 flex-none w-full lg:w-1/3">
                <img
                  src={image}
                  alt={`Room ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 transform hover:scale-110 hover:translate-x-2 hover:translate-y-2 rounded-sm"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={handleNextClick}
        className="absolute right-0 w-12 h-12 bg-gray-400 text-white rounded-lg flex items-center justify-center z-10"
        aria-label="Next"
      >
        &gt;
      </button>
    </div>
  );
};

export default About;
