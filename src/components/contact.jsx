// src/Contact.js
import React from 'react';

const Contact = () => {
  return (
    <div className="mt-20 flex items-center justify-center">
      <div className="p-6 rounded-lg shadow-lg max-w-4xl w-full">
        <h1 className="text-2xl font-bold text-gray-100 mb-12">Contact Information</h1>
        <div className="flex flex-col md:flex-row md:space-x-8">
          {/* Address Section */}
          <div className="flex-1 mb-6 md:mb-0">
            <h2 className="text-xl font-semibold text-gray-100 mb-4"><u>Address</u></h2>
            <p className="text-gray-100">
              Cozy nest backwater homestay<br />
              Garagandur B, Somvarpet Taluk
            </p>
          </div>
          {/* Contact Info Section */}
          <div className="flex-1">
            <h2 className="text-xl font-semibold text-gray-100 mb-4"><u>Contact Info</u></h2>
            <p className="text-gray-100">
              <strong>Phone:</strong><br />
              <a href="tel:+919591301703" className="hover:text-gray-400">+91 9591301703</a><br />
        
              <strong>Email:</strong><br />
              <a href="mailto:contact@example.com" className="hover:text-gray-400">milangowda143@gmail.com</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
