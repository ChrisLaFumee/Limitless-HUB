import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-black p-4 shadow-md">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <h2 className="text-xl font-bold text-orange-400">Limitless</h2>
        <nav className="space-x-4 text-sm">
          <Link to="/" className="hover:text-orange-300">Dashboard</Link>
          <Link to="/habits" className="hover:text-orange-300">Habits</Link>
          <Link to="/rewards" className="hover:text-orange-300">Rewards</Link>
        </nav>
      </div>
    </header>
  );
}