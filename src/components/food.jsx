import React from 'react';
import { Food } from '../constants';

const Research = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <h2 className=' my-10 lg:my-20 text-center text-2xl lg:text-4xl'>Coorgi Cuisine</h2>
        <div>
            {Food.map((project, index) => (
              <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                <div className='w-full lg:w-1/5 flex justify-center'> {/* Adjusted width */}
                  <img 
                    src={project.image}
                    width={180}
                    height={120} 
                    alt={project.title}
                    className='mb-6 lg:mr-10 rounded-lg lg:w-full lg:h-auto lg:max-w-xs' // Adjusted width and margin
                  />
                </div>
                <div className='w-full lg:ml-10 lg:w-3/5 lg:pl-4'> {/* Adjusted width and padding */}
                  <h6 className='mb-2 font-semibold text-xl lg:text-2xl'>
                    {project.title}
                  </h6>
                  <p className='text-justify mb-4 text-neutral-400'>
                    {project.description}
                  </p>
                  <div className='mt-2'>
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-500">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
        </div>
    </div>
  );
}

export default Research;
