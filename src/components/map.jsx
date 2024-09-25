

import React from 'react';

const Map = () => {
  return (
    <div className="flex flex-col md:flex-row p-4 space-y-4 md:space-y-0 md:space-x-4">
      {/* Address Section */}
      <div className="flex-1">
        <h2 className="text-xl font-semibold mb-4">Address</h2>
        <p className="text-lg">
          Cozy Nest Backwater Home Stay<br />
          Garagandur B, Somvarpet Taluk<br />
           Kodagu Karnataka, India
        </p>
      </div>

      {/* Map Section */}
      <div className="flex-1">
        <h2 className="text-xl font-semibold">Find Us Here</h2>
        <div className="relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.8535614405716!2d75.844989!3d12.503987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba507002c905763%3A0x85922e09ecdccea9!2sCozy%20Nest%20Backwater%20Home%20Stay!5e0!3m2!1sen!2sin!4v1679285593644!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Map"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Map;
