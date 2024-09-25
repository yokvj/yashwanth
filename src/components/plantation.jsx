
import React from 'react';
import { Planation } from '../constants';

const Research = () => {
  return (
    <div className='border-b border-neutral-900 lg:pb-2 pb-4'>
        <h2 className='lg:my-8 my-10 text-center text-2xl lg:text-4xl'>Plantation</h2>
        <div>
            {Planation.map((project, index) => (
              <div key={index} className='flex flex-wrap lg:justify-center'>
                <div className='w-full lg:w-3/5 lg:pl-4 order-2 lg:order-1'> {/* Set order for small and large screens */}
                  <h6 className='mb-2 font-semibold text-xl lg:text-2xl '>
                    {project.title}
                  </h6>
                  <p className=' text-justify mb-4 text-neutral-400'>
                    {project.description}
                  </p>
                </div>
                <div className='w-full lg:w-1/5 flex justify-center order-1 lg:order-2 lg:ml-10'> {/* Set order for small and large screens */}
                  <img 
                    src={project.image}
                    width={200}
                    height={200}
                    alt={project.title}
                    className='mb-6 rounded-lg lg:w-full lg:h-auto lg:max-w-xs'
                  />
                </div>
              </div>
            ))}
        </div>
    </div>
  );
}


export default Research;
