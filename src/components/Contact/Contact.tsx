import React, { useState } from 'react';

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <div>
      {/* Trigger Button */}
      <button
        onClick={toggleModal}
        className="text-white border border-orange-500 px-4 py-2 rounded hover:bg-orange-500 transition"
      >
        Contact Me
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="bg-gray-900 p-8 rounded-xl shadow-lg max-w-md w-full relative">
            <button
              onClick={toggleModal}
              className="absolute top-2 right-2 text-gray-400 hover:text-white text-2xl"
            >
              &times;
            </button>
            <h2 className="text-3xl font-bold text-orange-500 mb-4 text-center">
              Let’s Connect
            </h2>
            <p className="text-white mb-4">
              <strong>Name:</strong> Christopher LaFumee
            </p>
            <p className="text-white mb-4">
              <strong>Phone:</strong>{' '}
              <a
                href="tel:+1XXXXXXXXXX"
                className="text-orange-500 hover:underline"
              >
                (XXX) XXX-XXXX
              </a>
            </p>
            <p className="text-white">
              <strong>Email:</strong>{' '}
              <a
                href="mailto:chrislafumee@gmail.com"
                className="text-orange-500 hover:underline"
              >
                chrislafumee@gmail.com
              </a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
