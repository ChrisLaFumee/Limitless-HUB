import React, { useState } from 'react';

const Navbar = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const toggleContactModal = () => setIsContactOpen(!isContactOpen);

  return (
    <nav className="bg-black text-white py-4 px-6 flex justify-between items-center shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="text-xl font-bold text-orange-500">Limitless Hub</div>
      <ul className="flex space-x-2 sm:space-x-4 lg:space-x-6">
        <li>
          <a href="#hero" className="hover:text-orange-500 transition">
            Home
          </a>
        </li>
        <li>
          <a href="#shop" className="hover:text-orange-500 transition">
            Shop
          </a>
        </li>
        <li>
          <a href="#thework" className="hover:text-orange-500 transition">
            Work
          </a>
        </li>
        <li>
          <a href="#coaching" className="hover:text-orange-500 transition">
            Coaching
          </a>
        </li>
        <li>
          <button
            onClick={toggleContactModal}
            className="hover:text-orange-500 transition"
          >
            Contact
          </button>
        </li>
      </ul>

      {/* Contact Modal */}
      {isContactOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="bg-gray-900 p-8 rounded-xl shadow-lg max-w-md w-full relative">
            <button
              onClick={toggleContactModal}
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
                (352) 454-8059
              </a>
            </p>
            <p className="text-white">
              <strong>Email:</strong>{' '}
              <a
                href="mailto:limitlessprogressions@gmail.com"
                className="text-orange-500 hover:underline"
              >
                limitlessprogressions@gmail.com
              </a>
            </p>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
