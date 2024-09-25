

// import React from 'react'
// import { RESEARCHPROJECTS } from '../constants'

// const research = () => {
//   return (
//     <div className='border-b border-netural-900 pb-4'>
//         <h2 className='my-20 text-center text-4xl'>Know More About Coorg</h2>
//         <div>
//             {RESEARCHPROJECTS.map((project, index)=>(
//               <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
//                 <div className='w-full lg:w-1/4'>
//                 <img src={project.image}
//                 width={150}
//                 height={150}
//                 alt={project.title}
//                 className='mb-6 rounded'
//                 />

//                 </div>
// <div className='w-full max-w-xl lg:w-3/4'>
// <h6 className='mb-2 font-semibold'>
    
//     {project.title}
//     </h6>
//     <p className='mb-4 text-neutral-400'>{project.description}</p>
//     {project.technologies.map((tech,index)=>(
//         <spam key={index} className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-500">{tech}</spam>
//     ))}
//     </div>
//               </div>
//             ))}
//         </div>
//     </div>

//   )
// }

// export default research

// import React from 'react';
// import { RESEARCHPROJECTS } from '../constants';

// const Research = () => {
//   return (
//     <div className='border-b border-neutral-900 pb-4'>
//         <h2 className='my-20 text-center text-4xl'>Know More About Coorg</h2>
//         <div>
//             {RESEARCHPROJECTS.map((project, index) => (
//               <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
//                 <div className='w-full lg:w-1/4 flex justify-center'>
//                   <img 
//                     src={project.image}
//                     width={200}
//                     height={200}
//                     alt={project.title}
//                     className='mb-6   lg:mr-14 rounded-lg lg:w-full lg:h-auto lg:max-w-xs' // Responsive image sizing
//                   />
//                 </div>
//                 <div className='w-full lg:ml-14 max-w-xl lg:w-3/4 lg:pl-6'>
//                   <h6 className='mb-2 font-semibold text-xl lg:text-2xl'>
//                     {project.title}
//                   </h6>
//                   <p className='mb-4 text-neutral-400'>{project.description}</p>
//                   {project.technologies.map((tech, index) => (
//                     <span key={index} className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-500">
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             ))}
//         </div>
//     </div>
//   );
// }

// export default Research;
import React from 'react';
import { RESEARCHPROJECTS } from '../constants';

const Research = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <h2 className='my-10 lg:my-20 text-center text-2xl lg:text-4xl'>Know More About Coorg</h2>
        <div>
            {RESEARCHPROJECTS.map((project, index) => (
              <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                <div className='w-full lg:w-1/5 flex justify-center '> {/* Reduced width */}
                  <img 
                    src={project.image}
                    width={200}
                    height={200}
                    alt={project.title}
                    className='mb-6 lg:mr-10 rounded-lg lg:w-full lg:h-auto lg:max-w-xs' // Reduced width and margin
                  />
                </div>
                <div className='w-full lg:ml-10  lg:w-3/5 lg:pl-4'> {/* Reduced width and padding */}
                  <h6 className='mb-2 font-semibold text-xl lg:text-2xl'>
                    {project.title}
                  </h6>
                  <p className=' text-justify mb-4 text-neutral-400'>
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
