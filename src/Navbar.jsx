import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) { // Adjust scroll threshold as needed
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navbarClasses = `shadow-md py-4 px-20 font-bold text-lg sticky top-0 z-50 ${
    isSticky
      ? 'bg-blue-900/70 backdrop-blur-sm text-white'
      : 'bg-white/70 backdrop-blur-md text-gray-700'
  }`;

  const linkHoverClass = isSticky ? 'hover:text-blue-300' : 'hover:text-blue-700';

  return (
    <nav className={navbarClasses}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center">
          <img
            src="../src/assets/logo.jpg"
            alt="Logo"
            className="h-16 mr-2"
          />
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="/" className={linkHoverClass}>
            Home
          </a>
          <a href="/about" className={linkHoverClass}>
            About Us
          </a>
          <a href="/courses" className={linkHoverClass}>
            Our Courses
          </a>
          <a href="/training" className={linkHoverClass}>
            Training Programs
          </a>
          <a href="/team" className={linkHoverClass}>
            Our Team
          </a>
          <a href="/contact" className={linkHoverClass}>
            Contact Us
          </a>
          <a href="/blog" className={linkHoverClass}>
            Blog
          </a>
          <a href="/career" className={linkHoverClass}>
            Careers
          </a>
        </div>
        <div className="md:hidden">
          {/* Mobile Menu Icon */}
          <button className="focus:outline-none">
            <svg
              className={`h-6 w-6 ${isSticky ? 'text-white' : 'text-gray-600'}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          {/* Implement actual mobile menu */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;