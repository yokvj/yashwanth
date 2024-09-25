// import React from 'react'

// const bookshop = () => {
//   return (
//     <div>bookshop</div>
//   )
// }

// export default bookshop



import React from 'react';
import { BOOKIMAGES } from '../constants';



const bookshop = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <h2 className='my-20 text-center text-4xl'>User Interface Of BookShop Project</h2>
      <div>
        {BOOKIMAGES.map((project, index) => (
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

export default bookshop;