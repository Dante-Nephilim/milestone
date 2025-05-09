const Navbar = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-semibold text-green-900">
          <span className="text-black">Milestone</span>
          <span className="text-green-700"> | Learning</span>
        </div>

        {/* Nav Links */}
        <nav className="hidden md:flex space-x-6 text-sm text-gray-700">
          <a href="#about" className="hover:text-green-600">
            About Us
          </a>
          <a href="#what-we-do" className="hover:text-green-600">
            What We Do
          </a>
          <a href="#resources" className="hover:text-green-600">
            Resources
          </a>
          <a href="#contact" className="hover:text-green-600">
            Contact Us
          </a>
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          <button className="text-xs flex items-center border border-gray-300 px-3 py-1 rounded-full hover:bg-gray-100">
            📞 <span className="ml-1">000-000-0000</span>
          </button>
          <button className="bg-green-900 text-white text-sm px-4 py-1.5 rounded-md hover:bg-green-800">Login</button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
