import './index.css';
import Navbar from './components/Navbar/Navbar';
import Shop from './components/Shop/Shop';
import TheWork from './components/TheWork/TheWork';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';
import Coaching from './components/Coaching/Coaching';
import heroBg from '/src/assets/LP-Logo-bg.png';

function App() {
  return (
    <div className="min-h-screen text-white">
      {/* Top area: background image that covers navbar + hero */}
      <div
        className="relative bg-cover bg-top bg-no-repeat min-h-[60vh] md:min-h-screen"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundPosition: 'top center',
        }}
      >
        {/* gradient overlay: darker at the top for navbar readability, lighter toward hero */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-transparent" />

        <div className="relative">
          <Navbar />
          <Hero />
        </div>
      </div>

      {/* Rest of the site on a solid background */}
      <div className="bg-black">
        <Shop />
        <TheWork />
        <Coaching />
        <Footer />
      </div>
    </div>
  );
}

export default App;
