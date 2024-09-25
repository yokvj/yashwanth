
import React from 'react';

const contact = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <h2 className='my-20 text-center text-4xl'>Contact Me</h2>
      <h2 className='my-10 text-center underline text-3xl'>E-Mail:   yashwanthcoorg123@gmail.com</h2>
      <form
        action="https://formspree.io/f/mqazppwr"
        method="POST"
        className='max-w-md mx-auto'
      >
        <label className='block mb-2 text-lg'>
          Your email:
          <input
            type="email"
            name="email"
            className='w-full p-2 border border-gray-300 rounded'
            required
          />
        </label>
        <label className='block mt-4 mb-2 text-lg'>
          Your message:
          <textarea
            name="message"
            className='w-full p-2 border border-gray-300 rounded text-black '
            rows="4"
          ></textarea>
        </label>
        <button
          type="submit"
          className='mt-4 bg-black  text-white py-2 px-4 rounded hover:bg-purple-900'
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default contact;
