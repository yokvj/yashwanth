import React from 'react';
import { HERO_CONTENT } from "../constants";
import Profile from '../assets/image.jpeg';
import { motion } from "framer-motion";


const Hero = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
      <div className='flex flex-wrap items-center'>
        <div className='w-full lg:w-1/2 lg:pr-8 flex flex-col justify-center'>
          <div className='flex flex-col items-start'>
            <motion.h1
            initial={{x:-100, opacity:0}}
            animate={{x:0,opacity:1}}
            transition={{duration:0.5,delay:0.4}} 
            className='pb-3 text-3xl font-thin tracking-tight lg:mt-5 lg:text-6xl'>
              Yashwanth Kumar K
            </motion.h1>
            <motion.span 
            initial={{x:-100, opacity:0}}
            animate={{x:0,opacity:1}}
            transition={{duration:0.5,delay:1}} 
            className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500
             bg-clip-text text-3xl tracking-tight text-transparent'>
              Full Stack Developer
            </motion.span>
            
            <motion.p 
            
            initial={{x:-100, opacity:0}}
            animate={{x:0,opacity:1}}
            transition={{duration:0.5,delay:1.5}} 
            className='my-2 max-w-xl py-6 font-light tracking-tighter'>
                {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className='w-full lg:w-1/2 flex justify-center pt-8'>
          <div className='relative'>
            <motion.img
            initial={{x:100, opacity:0}}
            animate={{x:0,opacity:1}}
            transition={{duration:1,delay:1.2}}
             className='rounded-2xl' src={Profile} alt="Yashwanth Kumar K" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
