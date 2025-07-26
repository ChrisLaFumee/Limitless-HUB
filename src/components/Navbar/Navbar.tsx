const Navbar = () => {
  return (
    <nav className="w-full bg-black border-b border-gray-800 fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <h1 className="text-xl font-bold text-orange-500">Limitless Hub</h1>
        <ul className="flex space-x-6 text-white font-medium">
          <li><a href="#shop" className="hover:text-orange-500">Shop</a></li>
          <li><a href="#videos" className="hover:text-orange-500">The Work</a></li>
          <li><a href="#coaching" className="hover:text-orange-500">Coaching</a></li>
          <li><a href="#contact" className="hover:text-orange-500">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;