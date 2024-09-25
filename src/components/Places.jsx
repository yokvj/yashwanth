
// import React from 'react';
// import coffeePlantation from '../assets/places/coffe.jpeg';
// import abbeyFalls from '../assets/places/abbey.jpeg';
// import madikeriFort from '../assets/places/fort.jpeg';
// import dubareElephantCamp from '../assets/places/dubare.jpeg';
// import talacauvery from '../assets/places/talacavery.jpeg';
// import mallaiWaterfall from '../assets/places/mallali.jpeg';
// import tibetanCamp from '../assets/places/tibet.jpeg';
// import kotebetta from '../assets/places/kotebetta.jpeg';
// import lake from '../assets/places/lake.jpeg';
// import madalpatti from '../assets/places/kotebetta.jpeg'; // Assuming this is correct
// import rajaseat from '../assets/places/rajaseat.jpeg';
// import riverRafting from '../assets/places/rfarting.jpeg'; // Updated for River Rafting

// const places = [
//   {
//     name: 'Coffee Plantation',
//     image: coffeePlantation,
//     description: 'Experience the lush coffee estates and learn about coffee production.',
//     mapUrl: 'https://maps.google.com/?q=Coffee+Plantation,+Coorg'
//   },
//   {
//     name: 'Abbey Falls',
//     image: abbeyFalls,
//     description: 'A beautiful waterfall located amidst coffee plantations.',
//     mapUrl: 'https://maps.google.com/?q=Abbey+Falls,+Coorg'
//   },
//   {
//     name: 'Madikeri Fort',
//     image: madikeriFort,
//     description: 'Historic fort offering a glimpse into the region’s rich history.',
//     mapUrl: 'https://maps.google.com/?q=Madikeri+Fort,+Coorg'
//   },
//   {
//     name: 'Dubare Elephant Camp',
//     image: dubareElephantCamp,
//     description: 'Interact with elephants and enjoy a memorable experience.',
//     mapUrl: 'https://maps.google.com/?q=Dubare+Elephant+Camp,+Coorg'
//   },
//   {
//     name: 'Talacauvery',
//     image: talacauvery,
//     description: 'The origin of the river Cauvery with panoramic views and a sacred site.',
//     mapUrl: 'https://maps.google.com/?q=Talacauvery,+Coorg'
//   },
//   {
//     name: 'Mallai Waterfall',
//     image: mallaiWaterfall,
//     description: 'A serene waterfall located in a beautiful setting.',
//     mapUrl: 'https://maps.google.com/?q=Mallai+Waterfall,+Coorg'
//   },
//   {
//     name: 'Tibetan Camp',
//     image: tibetanCamp,
//     description: 'A cultural experience in the Tibetan settlement.',
//     mapUrl: 'https://maps.google.com/?q=Tibetan+Camp,+Coorg'
//   },
//   {
//     name: 'Kotebetta',
//     image: kotebetta,
//     description: 'The third highest peak in Coorg offering breathtaking views.',
//     mapUrl: 'https://maps.google.com/?q=Kotebetta,+Coorg'
//   },
//   {
//     name: 'Lake',
//     image: lake,
//     description: 'A picturesque lake surrounded by natural beauty.',
//     mapUrl: 'https://maps.google.com/?q=Lake,+Coorg'
//   },
//   {
//     name: 'Madalpatti',
//     image: madalpatti,
//     description: 'A scenic spot known for its panoramic views.',
//     mapUrl: 'https://maps.google.com/?q=Madalpatti,+Coorg'
//   },
//   {
//     name: 'Rajaseat',
//     image: rajaseat,
//     description: 'A historical viewpoint offering stunning views of the sunset.',
//     mapUrl: 'https://maps.google.com/?q=Rajaseat,+Coorg'
//   },
//   {
//     name: 'River Rafting',
//     image: riverRafting,
//     description: 'An adventurous activity through the rivers of Coorg.',
//     mapUrl: 'https://maps.google.com/?q=River+Rafting,+Coorg'
//   }
// ];

// const Places = () => {
//   return (
//     <div className="p-4">
//       <h2 className="text-2xl font-bold mb-4">Popular Places in Coorg</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
//         {places.map((place, index) => (
//           <div key={index} className="relative overflow-hidden rounded-lg shadow-lg">
//             <img
//               src={place.image}
//               alt={place.name}
//               className="object-cover w-full h-48"
//             />
//             <div className="p-4">
//               <h3 className="text-xl font-semibold mb-2">{place.name}</h3>
//               <p className="text-gray-200 mb-2">{place.description}</p>
//               <a
//                 href={place.mapUrl}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-blue-500 hover:underline"
//               >
//                 View on Map
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Places;


// import React from 'react';
// import coffeePlantation from '../assets/places/coffe.jpeg';
// import abbeyFalls from '../assets/places/abbey.jpeg';
// import madikeriFort from '../assets/places/fort.jpeg';
// import dubareElephantCamp from '../assets/places/dubare.jpeg';
// import talacauvery from '../assets/places/talacavery.jpeg';
// import mallaiWaterfall from '../assets/places/mallali.jpeg';
// import tibetanCamp from '../assets/places/tibet.jpeg';
// import kotebetta from '../assets/places/kotebetta.jpeg';
// import lake from '../assets/places/lake.jpeg';
// import madalpatti from '../assets/places/kotebetta.jpeg'; // Assuming this is correct
// import rajaseat from '../assets/places/rajaseat.jpeg';
// import riverRafting from '../assets/places/rfarting.jpeg'; // Updated for River Rafting

// const fromAddress = 'Aigoor,+Somavarpet,+Coorg'; // Default from address

// const places = [
//   {
//     name: 'Coffee Plantation',
//     image: coffeePlantation,
//     description: 'Experience the lush coffee estates and learn about coffee production.',
//     mapUrl: `https://www.google.com/maps/dir/?api=1&origin=${fromAddress}&destination=Coffee+Plantation,+Coorg`
//   },
//   {
//     name: 'Abbey Falls',
//     image: abbeyFalls,
//     description: 'A beautiful waterfall located amidst coffee plantations.',
//     mapUrl: `https://www.google.com/maps/dir/?api=1&origin=${fromAddress}&destination=Abbey+Falls,+Coorg`
//   },
//   {
//     name: 'Madikeri Fort',
//     image: madikeriFort,
//     description: 'Historic fort offering a glimpse into the region’s rich history.',
//     mapUrl: `https://www.google.com/maps/dir/?api=1&origin=${fromAddress}&destination=Madikeri+Fort,+Coorg`
//   },
//   {
//     name: 'Dubare Elephant Camp',
//     image: dubareElephantCamp,
//     description: 'Interact with elephants and enjoy a memorable experience.',
//     mapUrl: `https://www.google.com/maps/dir/?api=1&origin=${fromAddress}&destination=Dubare+Elephant+Camp,+Coorg`
//   },
//   {
//     name: 'Talacauvery',
//     image: talacauvery,
//     description: 'The origin of the river Cauvery with panoramic views and a sacred site.',
//     mapUrl: `https://www.google.com/maps/dir/?api=1&origin=${fromAddress}&destination=Talacauvery,+Coorg`
//   },
//   {
//     name: 'Mallai Waterfall',
//     image: mallaiWaterfall,
//     description: 'A serene waterfall located in a beautiful setting.',
//     mapUrl: `https://www.google.com/maps/dir/?api=1&origin=${fromAddress}&destination=Mallai+Waterfall,+Coorg`
//   },
//   {
//     name: 'Tibetan Camp',
//     image: tibetanCamp,
//     description: 'A cultural experience in the Tibetan settlement.',
//     mapUrl: `https://www.google.com/maps/dir/?api=1&origin=${fromAddress}&destination=Tibetan+Camp,+Coorg`
//   },
//   {
//     name: 'Kotebetta',
//     image: kotebetta,
//     description: 'The third highest peak in Coorg offering breathtaking views.',
//     mapUrl: `https://www.google.com/maps/dir/?api=1&origin=${fromAddress}&destination=Kotebetta,+Coorg`
//   },
//   {
//     name: 'Lake',
//     image: lake,
//     description: 'A picturesque lake surrounded by natural beauty.',
//     mapUrl: `https://www.google.com/maps/dir/?api=1&origin=${fromAddress}&destination=Honnamalake,+Somavarpet`
//   },
//   {
//     name: 'Madalpatti',
//     image: madalpatti,
//     description: 'A scenic spot known for its panoramic views.',
//     mapUrl: `https://www.google.com/maps/dir/?api=1&origin=${fromAddress}&destination=Madalpatti,+Coorg`
//   },
//   {
//     name: 'Rajaseat',
//     image: rajaseat,
//     description: 'A historical viewpoint offering stunning views of the sunset.',
//     mapUrl: `https://www.google.com/maps/dir/?api=1&origin=${fromAddress}&destination=Rajaseat,+Coorg`
//   },
//   {
//     name: 'River Rafting',
//     image: riverRafting,
//     description: 'An adventurous activity through the rivers of Coorg.',
//     mapUrl: `https://www.google.com/maps/dir/?api=1&origin=${fromAddress}&destination=River+Rafting,+Coorg`
//   }
// ];

// const Places = () => {
//   return (
//     <div className="p-4">
//       <h2 className="text-2xl font-bold mb-4">Popular Places in Coorg</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
//         {places.map((place, index) => (
//           <div key={index} className="relative overflow-hidden rounded-lg shadow-lg">
//             <img
//               src={place.image}
//               alt={place.name}
//               className="object-cover w-full h-48"
//             />
//             <div className="p-4">
//               <h3 className="text-xl font-semibold mb-2">{place.name}</h3>
//               <p className="text-gray-200 mb-2">{place.description}</p>
//               <a
//                 href={place.mapUrl}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-blue-500 hover:underline  pl-16 lg:pl-32 py-10"
//               >
//                 View on Map
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Places;

import React from 'react';
import coffeePlantation from '../assets/places/coffe.jpeg';
import abbeyFalls from '../assets/places/abbey.jpeg';
import madikeriFort from '../assets/places/fort.jpeg';
import dubareElephantCamp from '../assets/places/dubare.jpeg';
import talacauvery from '../assets/places/talacavery.jpeg';
import mallaiWaterfall from '../assets/places/mallali.jpeg';
import tibetanCamp from '../assets/places/tibet.jpeg';
import kotebetta from '../assets/places/kotebetta.jpeg';
import lake from '../assets/places/lake.jpeg';
import madalpatti from '../assets/places/madalpatti.jpeg'; // Assuming this is correct
import rajaseat from '../assets/places/rajaseat.jpeg';
import riverRafting from '../assets/places/rfarting.jpeg'; // Updated for River Rafting

const fromAddress = 'Cozy Nest Backwater Home Stay, Coorg'; // Updated from address

const places = [
  {
    name: 'Coffee Plantation',
    image: coffeePlantation,
    description: 'Experience the lush coffee estates and learn about coffee production.',
    mapUrl: `https://www.google.com/maps/dir/?api=1&origin=${fromAddress}&destination=Coffee+Plantation,+Coorg`
  },
  {
    name: 'Abbey Falls',
    image: abbeyFalls,
  description: 'A stunning waterfall surrounded by lush greenery and coffee plantations, perfect for nature lovers.',
    mapUrl: `https://www.google.com/maps/dir/?api=1&origin=${fromAddress}&destination=Abbey+Falls,+Coorg`
  },
  {
    name: 'Madikeri Fort',
    image: madikeriFort,
    description: 'Historic fort offering a glimpse into the region’s rich history.',
    mapUrl: `https://www.google.com/maps/dir/?api=1&origin=${fromAddress}&destination=Madikeri+Fort,+Coorg`
  },
  
  {
    name: 'Dubare Elephant Camp',
    image: dubareElephantCamp,
    description: 'Interact with elephants and enjoy a memorable experience.',
    mapUrl: `https://www.google.com/maps/dir/?api=1&origin=${fromAddress}&destination=12.371514950473236,75.9056302720184`
  },
  {
    name: 'Talacauvery',
    image: talacauvery,
    description: 'The origin of the river Cauvery with panoramic views and a sacred site.',
    mapUrl: `https://www.google.com/maps/dir/?api=1&origin=${fromAddress}&destination=Talacauvery,+Coorg`
  },
  {
    name: 'Mallai Waterfall',
    image: mallaiWaterfall,
    description: 'A serene waterfall located in a beautiful setting.',
    mapUrl: `https://www.google.com/maps/dir/?api=1&origin=${fromAddress}&destination=Mallai+Waterfall,+Coorg`
  },
  {
    name: 'Tibetan Camp',
    image: tibetanCamp,
    description: 'A cultural experience in the Tibetan settlement.',
    mapUrl: `https://www.google.com/maps/dir/?api=1&origin=${fromAddress}&destination=Tibetan+Camp,+Coorg`
  },
  {
    name: 'Kotebetta',
    image: kotebetta,
    description: 'The third highest peak in Coorg offering breathtaking views.',
    mapUrl: `https://www.google.com/maps/dir/?api=1&origin=${fromAddress}&destination=Kotebetta,+Coorg`
  },
  {
    name: 'Honnamana Kere',
    image: lake,
    description: 'A picturesque lake surrounded by natural beauty.',
    mapUrl: `https://www.google.com/maps/dir/?api=1&origin=${fromAddress}&destination=Honnamalake,+Somavarpet`
  },
  {
    name: 'Madalpatti',
    image: madalpatti,
    description: 'A scenic spot known for its panoramic views.',
    mapUrl: `https://www.google.com/maps/dir/?api=1&origin=${fromAddress}&destination=12.545492344778992,75.70109408465882`
  },
  {
    name: 'Rajaseat',
    image: rajaseat,
    description: 'A historical viewpoint offering stunning views of the sunset.',
    mapUrl: `https://www.google.com/maps/dir/?api=1&origin=${fromAddress}&destination=Rajaseat,+Coorg`
  },
  {
    name: 'River Rafting',
    image: riverRafting,
    description: 'An adventurous activity through the rivers of Coorg.',
    mapUrl: `https://www.google.com/maps/dir/?api=1&origin=${fromAddress}&destination=River+Rafting,+Coorg`
  }
];

const Places = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Popular Places in Coorg</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {places.map((place, index) => (
          <div key={index} className="relative overflow-hidden rounded-lg shadow-lg">
            <img
              src={place.image}
              alt={place.name}
              className="object-cover w-full h-48"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{place.name}</h3>
              <p className="text-gray-200 mb-2">{place.description}</p>
              <a
                href={place.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline pl-16 lg:pl-32 py-10"
              >
                View on Map
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Places;
