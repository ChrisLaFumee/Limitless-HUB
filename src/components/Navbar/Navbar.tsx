import { useEffect, useState } from 'react';

const Navbar = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleContactModal = () => setIsContactOpen((v) => !v);
  const toggleMenu = () => setIsMenuOpen((v) => !v);

  // On scroll, swap to solid background for readability
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu when navigating
  useEffect(() => {
    const close = () => setIsMenuOpen(false);
    window.addEventListener('hashchange', close);
    return () => window.removeEventListener('hashchange', close);
  }, []);

  // Close modal on ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsContactOpen(false);
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <header className="relative z-50">
      {/* NAVBAR */}
      <nav
        className={[
          'fixed top-0 inset-x-0',
          'transition-colors duration-300',
          scrolled
            ? 'bg-black/80 backdrop-blur-sm border-b border-white/10'
            : 'bg-black/20 backdrop-blur-sm',
        ].join(' ')}
        aria-label="Primary"
      >
        <div className="max-w-full w-full mx-auto px-6 py-4 flex items-center justify-between">
          {/* Brand */}
          <a
            href="/#hero"
            className="text-xl md:text-2xl font-extrabold tracking-wide text-white"
            aria-label="Limitless Hub Home"
          >
            <span className="text-orange-500">Limitless</span> Hub
          </a>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-6 lg:gap-8 text-white/90">
            <li>
              <a href="#hero" className="hover:text-orange-500 transition">
                Hub
              </a>
            </li>
            <li>
              <a href="#coaching" className="hover:text-orange-500 transition">
                Coaching
              </a>
            </li>
            <li>
              <a href="#thework" className="hover:text-orange-500 transition">
                Work
              </a>
            </li>

            <li>
              <a href="#shop" className="hover:text-orange-500 transition">
                Shop
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

          {/* Mobile menu button */}
          <button
            className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg text-white/90 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-orange-500"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
          >
            {/* simple hamburger / close */}
            {isMenuOpen ? (
              <span className="text-2xl">&times;</span>
            ) : (
              <div className="space-y-1.5">
                <span className="block w-6 h-0.5 bg-current"></span>
                <span className="block w-6 h-0.5 bg-current"></span>
                <span className="block w-6 h-0.5 bg-current"></span>
              </div>
            )}
          </button>
        </div>

        {/* Mobile Menu Panel */}
        {isMenuOpen && (
          <div
            id="mobile-menu"
            className="md:hidden border-t border-white/10 bg-black/90 backdrop-blur-sm"
          >
            <ul className="px-4 py-3 space-y-2 text-white/90">
              <li>
                <a href="#hero" className="block py-2 hover:text-orange-500">
                  Hub
                </a>
              </li>
              <li>
                <a href="#shop" className="block py-2 hover:text-orange-500">
                  Shop
                </a>
              </li>
              <li>
                <a href="#thework" className="block py-2 hover:text-orange-500">
                  Work
                </a>
              </li>
              <li>
                <a
                  href="#coaching"
                  className="block py-2 hover:text-orange-500"
                >
                  Coaching
                </a>
              </li>
              <li>
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    toggleContactModal();
                  }}
                  className="w-full text-left py-2 hover:text-orange-500"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>

      {/* CONTACT MODAL */}
      {isContactOpen && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-[60]"
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-title"
          onClick={() => setIsContactOpen(false)}
        >
          <div
            className="bg-gray-900 p-8 rounded-xl shadow-2xl max-w-md w-[92%] sm:w-full relative border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsContactOpen(false)}
              className="absolute top-2 right-2 text-gray-400 hover:text-white text-2xl"
              aria-label="Close contact modal"
            >
              &times;
            </button>
            <h2
              id="contact-title"
              className="text-3xl font-bold text-orange-500 mb-4 text-center"
            >
              Let’s Connect
            </h2>
            <p className="text-white mb-3">
              <strong>Name:</strong> Christopher LaFumee
            </p>
            <p className="text-white mb-3">
              <strong>Phone:</strong>{' '}
              <a
                href="tel:+13524548059"
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
    </header>
  );
};

export default Navbar;
