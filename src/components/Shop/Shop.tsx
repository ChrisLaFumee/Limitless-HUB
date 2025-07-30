import React from 'react';
import DeskAthleteImg from '/src/assets/The-Desk-Athlete.jpg';
import GymPlanImg from '/src/assets/No-Guess-Gym_Plan.png';
import CoachingImg from '/src/assets/LP-Headshot.png';

const Shop = () => {
  return (
    <section id="shop" className="bg-black text-white py-16 px-6">
      <div className="max-w-full mx-auto">
        <h2 className="text-4xl font-bold text-orange-500 text-center mb-12">
          Featured Products
        </h2>

        {/* 🧱 Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Product Card 1 */}
          <div
            onClick={() =>
              window.open(
                'https://tq16ru-iw.myshopify.com/products/the-desk-athlete-5-day-posture-and-mobility-fix',
                '_blank'
              )
            }
            className="cursor-pointer bg-gray-900 rounded-xl overflow-hidden shadow-lg p-4 hover:shadow-xl hover:ring-2 hover:ring-brand-orange transition"
          >
            <img
              src={DeskAthleteImg}
              alt="Desk Athlete"
              className="w-full h-96 object-cover rounded-md"
            />
            <h3 className="text-xl font-semibold mt-4">The Desk Athlete</h3>
            <p className="text-brand-gray mt-2">
              5-Day Posture & Mobility Fix for desk-bound pros and anyone who
              sits a lot.
            </p>
            <a
              href="https://tq16ru-iw.myshopify.com/products/the-desk-athlete-5-day-posture-and-mobility-fix"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-4 py-2 bg-brand-orange text-white rounded hover:bg-orange-600"
              onClick={(e) => e.stopPropagation()}
            >
              View Product
            </a>
          </div>

          {/* Product Card 2 */}
          <div
            onClick={() =>
              window.open(
                'https://tq16ru-iw.myshopify.com/products/the-no-guess-gym-plan-for-the-lost-or-bored-gym-goer',
                '_blank'
              )
            }
            className="cursor-pointer bg-gray-900 rounded-xl overflow-hidden shadow-lg p-4 hover:shadow-xl hover:ring-2 hover:ring-brand-orange transition"
          >
            <img
              src={GymPlanImg}
              alt="30-Day Gym Plan"
              className="w-full h-96 object-cover rounded-md"
            />
            <h3 className="text-xl font-semibold mt-4">No Guess Gym Plan</h3>
            <p className="text-brand-gray mt-2">
              30-Day adaptable plan to build strength & confidence in the gym.
            </p>
            <a
              href="https://tq16ru-iw.myshopify.com/products/the-no-guess-gym-plan-for-the-lost-or-bored-gym-goer"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-4 py-2 bg-brand-orange text-white rounded hover:bg-orange-600"
              onClick={(e) => e.stopPropagation()}
            >
              View Product
            </a>
          </div>

          {/* Product Card 3 */}
          <div
            onClick={() =>
              window.open(
                'https://tq16ru-iw.myshopify.com/products/limitless-coaching-blueprint',
                '_blank'
              )
            }
            className="cursor-pointer bg-gray-900 rounded-xl overflow-hidden shadow-lg p-4 hover:shadow-xl hover:ring-2 hover:ring-brand-orange transition"
          >
            <img
              src={CoachingImg}
              alt="Limitless Coaching Blueprint"
              className="w-full h-96 object-cover rounded-md"
            />
            <h3 className="text-xl font-semibold mt-4">
              Limitless Coaching Blueprint
            </h3>
            <p className="text-brand-gray mt-2">
              The Coaching Blueprint for trainers who want to elevate their
              coaching skills.
            </p>
            <a
              href="https://tq16ru-iw.myshopify.com/products/limitless-coaching-blueprint"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-4 py-2 bg-brand-orange text-white rounded hover:bg-orange-600"
              onClick={(e) => e.stopPropagation()}
            >
              View Product
            </a>
          </div>
        </div>

        {/* 🛒 Button to Shopify Store */}
        <div className="flex justify-center mt-12">
          <a
            href="https://tq16ru-iw.myshopify.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-gray-500 text-white font-semibold rounded-lg hover:border-orange-500 hover:text-orange-500 transition"
          >
            Shop the Limitless Collection
          </a>
        </div>
      </div>
    </section>
  );
};

export default Shop;
