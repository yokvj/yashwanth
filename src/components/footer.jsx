


import React from 'react';
import { FaInstagram, FaFacebook } from 'react-icons/fa'; // Importing social media icons
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'; // Importing contact icons

const Footer = () => {
  return (
    <footer className=' text-white py-8 lg:mt-10'>
      <div className='container mx-auto px-4'>
        {/* Social Media Section */}
        <div className='flex flex-col lg:flex-row justify-between mb-8'>
          <div className='mb-8 lg:mb-0'>
            <h2 className='text-xl font-semibold mb-4'>Cozy Nest Backwater Homestay</h2>
            <div className='flex space-x-4'>
              <a
                href='https://www.instagram.com/'
                target='_blank'
                rel='noopener noreferrer'
                className='text-white hover:text-gray-400'
              >
                <FaInstagram size={24} />
              </a>
              <a
                href='https://www.facebook.com/'
                target='_blank'
                rel='noopener noreferrer'
                className='text-white hover:text-gray-400'
              >
                <FaFacebook size={24} />
              </a>
            </div>
          </div>
          
          {/* Contact and Address Section */}
          <div className='mb-8 lg:mb-0'>
            <h2 className='text-xl font-semibold mb-4'>Contact & Address</h2>
            <div className='flex items-center mb-2'>
              <FaMapMarkerAlt size={20} className='mr-1 lg:mt-2 lg:mr-2  ' />
              <p>Cozy nest backwater homestay, Garagandur B, Somvarpet Taluk</p>
            </div>
            <div className='flex items-center mb-2'>
              <FaEnvelope size={20} className='mr-2' />
              <p>milangowda143@gmail.com</p>
            </div>
            <div className='flex items-center'>
              <FaPhoneAlt size={20} className='mr-2' />
              <p>+91 9591301703</p>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className='w-full'>
  <h2 className='text-xl font-semibold mb-4'>Find Us Here</h2>
  <div className='relative'>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.8535614405716!2d75.844989!3d12.503987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba507002c905763%3A0x85922e09ecdccea9!2sCozy%20Nest%20Backwater%20Home%20Stay!5e0!3m2!1sen!2sin!4v1679285593644!5m2!1sen!2sin"
      width="100%"
      height="300"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Map"
    ></iframe>
  </div>
</div>



        {/* Copyright Section */}
        <div className='text-center text-gray-400 mt-8'>
          <p className='text-sm'>
            &copy; {new Date().getFullYear()} Yokvj. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
