import './index.css';

import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Dashboard from './pages/Dashboard/Dashboard';
import Habits from './pages/Habits/Habits';
import Rewards from './pages/Rewards/Rewards';

function App() {
  return (
    <div className="min-h-screen bg-black text-gray-200">
      <Header />
      <main className="p-6 text-center">
             <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/habits" element={<Habits />} />
          <Route path="/rewards" element={<Rewards />} />
        </Routes>
        <h1 className="text-4xl font-bold mb-4 py-4">Limitless Progressions</h1>
        <p className="text-gray-400 mt-2">Track habits. Stay consistent. Earn rewards.</p>
      </main>
    </div>
  );
}

export default App;
