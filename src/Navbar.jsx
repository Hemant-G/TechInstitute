import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isCoursesDropdownOpen, setIsCoursesDropdownOpen] = useState(false);
  const [isTrainingDropdownOpen, setIsTrainingDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navbarClasses = `shadow-md py-4 px-20 font-bold text-lg sticky top-0 z-50 ${
    isSticky ? 'bg-blue-900/70 backdrop-blur-sm text-white' : 'bg-white/70 backdrop-blur-md text-gray-700'
  }`;

  const linkHoverClass = isSticky ? 'hover:text-blue-300' : 'hover:text-blue-700';
  const dropdownLinkHoverClass = 'hover:bg-gray-100 rounded-sm hover:text-gray-900';
  const dropdownBgClass = 'bg-blue-900 shadow-lg text-white rounded-lg overflow-hidden grid grid-cols-1 w-80 absolute left-0 top-full';

  const mainNavOptions = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    {
      label: 'Courses',
      dropdown: [
        { label: 'Autocad', href: '/courses/autocad' },
        { label: 'Catia', href: '/courses/catia' },
        { label: 'Solidworks', href: '/courses/solidworks' },
        { label: 'Autodesk Fusion', href: '/courses/autodesk-fusion' },
        { label: 'Digital Marketing', href: '/courses/digital-marketing' },
        { label: 'IT related courses', href: '/courses/it-related' },
      ],
    },
    { label: 'Our Team', href: '/team' },
    { label: 'Contact Us', href: '/contact' },
    {label: 'Gallery', href: '/gallery'},
  ];

  return (
    <nav className={navbarClasses}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center">
          <img src="../logo.jpg" alt="Logo" className="h-16 mr-2" />
        </div>

        <div className="hidden md:flex space-x-6">
          {mainNavOptions.map((option) => {
            if (option.label === 'Courses') {
              return (
                <div
                  key={option.label}
                  className="relative group"
                  onMouseEnter={() => {
                    setIsCoursesDropdownOpen(true);
                    setIsTrainingDropdownOpen(false);
                  }}
                  onMouseLeave={() => setIsCoursesDropdownOpen(false)}
                >
                  <span className={`${linkHoverClass} cursor-pointer`}>
                    {option.label}
                  </span>
                  {option.dropdown && (
                    <div
                      className={`${dropdownBgClass}
                        opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100
                        transition-all duration-200 ease-out pointer-events-none group-hover:pointer-events-auto`}
                    >
                      {option.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.label}
                          to={dropdownItem.href}
                          className={`${dropdownLinkHoverClass} block px-4 py-2 text-sm`}
                        >
                          {dropdownItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            if (option.label === 'Training Programs') {
              return (
                <div
                  key={option.label}
                  className="relative group"
                  onMouseEnter={() => {
                    setIsTrainingDropdownOpen(true);
                    setIsCoursesDropdownOpen(false);
                  }}
                  onMouseLeave={() => setIsTrainingDropdownOpen(false)}
                >
                  <Link to={option.href} className={`${linkHoverClass} cursor-pointer`}>
                    {option.label}
                  </Link>
                  {option.dropdown && (
                    <div
                      className={`${dropdownBgClass}
                        opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100
                        transition-all duration-300 ease-out pointer-events-none group-hover:pointer-events-auto`}
                    >
                      {option.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.label}
                          to={dropdownItem.href}
                          className={`${dropdownLinkHoverClass} block px-4 py-2 text-sm`}
                        >
                          {dropdownItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link key={option.label} to={option.href} className={linkHoverClass}>
                {option.label}
              </Link>
            );
          })}
        </div>

        <div className="md:hidden">
          <button className="focus:outline-none">
            <svg
              className={`h-6 w-6 ${isSticky ? 'text-white' : 'text-gray-600'}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
