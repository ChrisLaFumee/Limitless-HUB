import './index.css';
import Navbar from './components/Navbar/Navbar';
import Shop from './components/Shop/Shop';
import TheWork from './components/TheWork/TheWork';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />
      <Hero />    
      <Shop />
      <TheWork />
      <Footer />
    </div>
  );
}

export default App;