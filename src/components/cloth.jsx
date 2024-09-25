

import React from 'react';
import { CLOTHIMAGES } from '../constants';

const cloth = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <h2 className='my-20 text-center text-4xl'>User Interface Of FabricClore Project</h2>
      <div>
        {CLOTHIMAGES.map((project, index) => (
           <div key={index} className='mb-5 flex flex-wrap lg:justify-center'>
           <div className='w-full lg:w-2/3 xl:w-1/2'>
             <img 
               src={project.image}
               style={{ width: '100%', maxWidth: '1500px', height: 'auto' }} 
               alt={project.title}
               className='mb-6 rounded'
             />
           </div>
         </div>
        ))}
      </div>
    </div>
  );
};

export default cloth;