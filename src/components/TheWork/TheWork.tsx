import React from 'react';

const TheWork = () => {
  return (
    <section id="the-work" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-orange-500 text-center mb-4">
          The Work
        </h2>
        <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto mb-12">
          Real clients. Real effort. No shortcuts. This is where the sweat
          happens, the limits get pushed, and the transformations are earned—not
          given.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Example Card 1 */}
          <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg p-4 text-center">
            <img
              src="src/assets/client1.jpg"
              alt="Client Transformation"
              className="w-full h-64 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold text-orange-500"></h3>
            <p className="text-gray-400 mt-2"></p>
          </div>

          {/* Example Card 2 */}
          <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg p-4 text-center">
            <img
              src="src/assets/client2.jpg"
              alt="Client in training"
              className="w-full h-64 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold text-orange-500"></h3>
            <p className="text-gray-400 mt-2"></p>
          </div>

          {/* Example Card 3 */}
          <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg p-4 text-center">
            <img
              src="src/assets/client3.jpg"
              alt="Coach Chris in action"
              className="w-full h-64 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold text-orange-500">
              Coach Chris – Leading By Example
            </h3>
            <p className="text-gray-400 mt-2">
              Training hard, teaching harder. Every session filmed is proof we
              practice what we preach.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="#coaching"
            className="inline-block px-6 py-3 bg-brand-orange text-white font-semibold rounded-lg hover:bg-orange-600 transition"
          >
            Start Your Own Journey
          </a>
        </div>
      </div>
    </section>
  );
};

export default TheWork;
