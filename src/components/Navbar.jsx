import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-orange-700 text-white shadow-md mt-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo / Brand */}
          <div className="flex-shrink-0">
            <a href="/" className="text-xl font-bold">
              American Harvest
            </a>
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex space-x-8">
            <a href="/" className="hover:text-yellow-200">
              Home
            </a>
            <a href="/about" className="hover:text-yellow-200">
              About
            </a>
            <a href="/give-back" className="hover:text-yellow-200">
              Give Back
            </a>
            <a href="/register" className="hover:text-yellow-200">
              Register
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-yellow-200 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 8h16M4 16h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile links */}
        {isOpen && (
          <div className="md:hidden mt-2 space-y-1 px-2 pb-3">
            <a
              href="/"
              className="block px-3 py-2 rounded-md hover:bg-orange-600"
            >
              Home
            </a>
            <a
              href="/register"
              className="block px-3 py-2 rounded-md hover:bg-orange-600"
            >
              Register
            </a>
            <a
              href="/give-back"
              className="block px-3 py-2 rounded-md hover:bg-orange-600"
            >
              Give Back
            </a>
            <a
              href="/about"
              className="block px-3 py-2 rounded-md hover:bg-orange-600"
            >
              About
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
