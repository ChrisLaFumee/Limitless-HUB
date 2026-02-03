import lpAppPic from '../../assets/LP-app-pic.jpeg';

const Coaching = () => {
  return (
    <section
      id="coaching"
      className="bg-black text-white py-20 px-6 border-t border-gray-800"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-orange-500 mb-6">
          Train with Coach Chris
        </h2>
        <p className="text-lg text-gray-300 mb-12">
          Whether you're local or across the country, get expert-level coaching
          tailored to your goals, lifestyle, and hustle.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Virtual Coaching */}
          <div
            onClick={() =>
              window.open(
                'https://calendly.com/limitlessprogressions',
                '_blank'
              )
            }
            className="cursor-pointer bg-gray-900 rounded-xl p-6 hover:shadow-xl hover:ring-2 hover:ring-orange-500 transition text-left"
          >
            <h3 className="text-2xl font-semibold text-white mb-2">
              Limitless Virtual Coaching
            </h3>
            <p className="text-gray-400 mb-4">
              Custom training programs, weekly check-ins for accountability and
              progress, and full support — all on the Limitless app.
            </p>
            <button className="px-5 py-2 border border-gray-500 text-white rounded-lg font-semibold hover:border-orange-500 hover:text-orange-500 transition">
              Schedule Call
            </button>
          </div>

          {/* In-Person Coaching */}
          <div
            onClick={() =>
              window.open(
                'https://calendly.com/limitlessprogressions',
                '_blank'
              )
            }
            className="cursor-pointer bg-gray-900 rounded-xl p-6 hover:shadow-xl hover:ring-2 hover:ring-orange-500 transition text-left"
          >
            <h3 className="text-2xl font-semibold text-white mb-2">
              Live Remote Coaching
            </h3>
            <p className="text-gray-400 mb-4">
              One-on-one training sessions available via video call for live
              coaching anywhere in the world.
            </p>
            <button className="px-5 py-2 border border-gray-500 text-white rounded-lg font-semibold hover:border-orange-500 hover:text-orange-500 transition">
              Schedule Call
            </button>
          </div>

          {/* VIP Coaching */}
          <div
            onClick={() =>
              window.open(
                'https://calendly.com/limitlessprogressions',
                '_blank'
              )
            }
            className="cursor-pointer bg-gray-900 rounded-xl p-6 hover:shadow-xl hover:ring-2 hover:ring-orange-500 transition text-left"
          >
            <h3 className="text-2xl font-semibold text-white mb-2">
              Limitless VIP Coaching
            </h3>
            <p className="text-gray-400 mb-4">
              One-on-one training sessions in person available within the
              Orlando area. Limited availability!
            </p>
            <button className="px-5 py-2 border border-gray-500 text-white rounded-lg font-semibold hover:border-orange-500 hover:text-orange-500 transition">
              Schedule Call
            </button>
          </div>

          {/* Trainer Blueprint */}
          <div
            onClick={() =>
              window.open(
                'https://calendly.com/limitlessprogressions',
                '_blank'
              )
            }
            className="cursor-pointer bg-gray-900 rounded-xl p-6 hover:shadow-xl hover:ring-2 hover:ring-orange-500 transition text-left"
          >
            <h3 className="text-2xl font-semibold text-white mb-2">
              Trainer Blueprint Access
            </h3>
            <p className="text-gray-400 mb-4">
              Learn my system, build your coaching skills, and grow your
              business.
            </p>
            <button className="px-5 py-2 border border-gray-500 text-white rounded-lg font-semibold hover:border-orange-500 hover:text-orange-500 transition">
              Schedule Call
            </button>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-6">
          <p className="text-lg text-white mb-4">
            Ready to work together? Book your intro session now.
          </p>
          <h2 className="text-4xl font-bold text-orange-500 mb-6">
            Limitless Training App
          </h2>
          <img
            src={lpAppPic}
            alt="Limitless Training App"
            className="mx-auto rounded-lg shadow-lg mb-8 max-w-2xl"
          />
          <a
            href="https://calendly.com/limitlessprogressions"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-gray-500 text-white font-semibold rounded-lg hover:border-orange-500 hover:text-orange-500 transition"
          >
            Schedule a Call with Coach Chris
          </a>
        </div>
      </div>
    </section>
  );
};

export default Coaching;
