import React from 'react';

const Hero = () => {
  return (
    <section
      id="hero"
      className="bg-black text-white pt-32 pb-28 px-4 flex flex-col md:flex-row items-center justify-between max-w-full mx-auto"
    >
      {/* Text Section */}
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-5xl font-bold text-orange-500 leading-tight">
          One Hub. <br className="hidden md:block" /> Limitless Progress.
        </h1>
        <p className="mt-6 text-lg text-gray-300">
          Built for fitness enthusiasts, trainers, desk athletes, and anyone
          chasing their next level. Explore plans, tools, and coaching all in
          one place.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-wrap justify-center md:justify-start gap-4 max-w-xl">
          <a
            href="https://calendly.com/limitlessprogressions"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-brand-orange bg-brand-orange text-white rounded-lg font-semibold hover:bg-orange-600 transition flex items-center justify-center"
          >
            Book a Call
          </a>
          <a
            href="https://tally.so/r/meWEQO"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-brand-orange bg-brand-orange text-white rounded-lg font-semibold hover:bg-orange-600 transition flex items-center justify-center"
          >
            Join the Squad
          </a>
        </div>
      </div>

      {/* Headshot Section */}
      <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
        <img
          src="/Headshot.jpeg"
          alt="Coach Chris"
          className="w-64 h-64 rounded-full border-4 border-orange-500 shadow-lg object-cover object-center"
        />
      </div>
    </section>
  );
};

export default Hero;
