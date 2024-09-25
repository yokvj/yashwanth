import React from 'react';
import Aboutme from "../assets/preview.jpg";
import { ABOUT_TEXT } from '../constants';

const About = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <h1 className='my-20 text-center text-4xl'>About Me</h1>
      <div className='flex flex-wrap'>
        {/* Image Container */}
        <div className='w-full lg:w-1/2 flex justify-center'>
          <img 
            className="rounded-2xl w-3/4 h-auto" 
            src={Aboutme} 
            alt="About Me" 
          />
        </div>
        
        {/* Text Container */}
        <div className='w-full lg:w-1/2 p-8'>
          <p className='text-justify'>{ABOUT_TEXT}</p>
        </div>
      </div>
    </div>
  );
}

export default About;
