

import React from 'react';
import { FaWhatsapp } from 'react-icons/fa'; // Import WhatsApp icon from react-icons

const WhatsAppButton = () => {
  const phoneNumber = "9591301703";
  const message = "Welcome to River View Homestay. How can I help you?"; // Default message for the chat

  const encodedMessage = encodeURIComponent(message);
  const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`; // Corrected URL format

  return (
    <div className="fixed bottom-4 right-4 md:bottom-4 md:right-4">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white p-3 rounded-full shadow-lg flex items-center justify-center hover:bg-green-600 transition-all duration-200"
        aria-label="Chat with us on WhatsApp"
      >
        <FaWhatsapp className="text-3xl" />
      </a>
    </div>
  );
};

export default WhatsAppButton;


// import React from 'react';
// import { FaWhatsapp } from 'react-icons/fa'; // Import WhatsApp icon from react-icons

// const WhatsAppButton = () => {
//   const phoneNumber = "9591301703"; // This is the number users will chat with
//   const message = ""; // Predefined message

//   const encodedMessage = encodeURIComponent(message);
//   const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`; // Corrected URL format

//   return (
//     <div className="fixed bottom-4 right-4">
//       <a
//         href={url}
//         target="_blank"
//         rel="noopener noreferrer"
//         className="bg-green-500 text-white p-3 rounded-full shadow-lg flex items-center justify-center hover:bg-green-600 transition-all duration-200"
//         aria-label="Chat with us on WhatsApp"
//       >
//         <FaWhatsapp className="text-3xl" />
//       </a>
//     </div>
//   );
// };

// export default WhatsAppButton;
