import React, { useState } from "react";
import "alpinejs";
import logo from "../assets/viaLogo.png";
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const location = useLocation();

  const getNavbarBg = () => {
    switch (location.pathname) {
      case '/consulting':
        return 'bg-custom'; // Custom background for About page
      case '/contact':
        return 'bg-custom'; // Custom background for Contact page
        case '/training':
        return 'bg-custom'; // Custom background for Contact page
        case '/faq':
        return 'bg-custom'; // Custom background for Contact page
      default:
        return 'bg-transparent'; // Default background for other pages
    }
  };

  return (
    <nav className={`p-5 text-white ${getNavbarBg()}`}>
      <div className="container px-6 py-4 mx-auto">
        <div className="flex items-center justify-between">
          <a>
            <img
              className="w-auto h-6 sm:h-7"
              src="https://merakiui.com/images/full-logo.svg"
              alt="Logo"
            />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            type="button"
            className="text-gray-500 dark:text-gray-200 lg:hidden hover:text-gray-200 dark:hover:text-gray-400 focus:outline-none focus:text-gray-200 dark:focus:text-gray-400"
            aria-label="toggle menu"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 8h16M4 16h16"
                />
              </svg>
            )}
          </button>

          {/* Desktop Menu */}
          <div className="hidden lg:flex lg:items-center lg:space-x-4">
            <NavLink
              to="/"
              className="mt-2 transition-colors duration-300 transform lg:mt-0 hover:text-gray-400 dark:hover:text-gray-200"
            >
              Home
            </NavLink>
            <NavLink
              to="/consulting"
              className="mt-2 transition-colors duration-300 transform lg:mt-0 hover:text-gray-400 dark:hover:text-gray-200"
            >
              Consulting
            </NavLink>
            <NavLink
              to="/training"
              className="mt-2 transition-colors duration-300 transform lg:mt-0 hover:text-gray-400 dark:hover:text-gray-200"
            >
              Training
            </NavLink>
            <NavLink
              to="/faq"
              className="mt-2 transition-colors duration-300 transform lg:mt-0 hover:text-gray-400 dark:hover:text-gray-200"
            >
              FAQ
            </NavLink>
            <NavLink
              to="/contact"
              className="mt-2 transition-colors duration-300 transform lg:mt-0 hover:text-gray-400 dark:hover:text-gray-200"
            >
              Contact
            </NavLink>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden pt-2 bg-indigo-500 text-center w-full rounded">
            <div className="flex flex-col space-y-2 text-gray-200 capitalize dark:text-gray-300 p-5">
              <NavLink
                to="/"
                className="mt-2 transition-colors duration-300 transform lg:mt-0 hover:text-gray-400 dark:hover:text-gray-200"
              >
                Home
              </NavLink>
              <NavLink
                to="/consulting"
                className="mt-2 transition-colors duration-300 transform lg:mt-0 hover:text-gray-400 dark:hover:text-gray-200"
              >
                Consulting
              </NavLink>
              <NavLink
                to="/training"
                className="mt-2 transition-colors duration-300 transform lg:mt-0 hover:text-gray-400 dark:hover:text-gray-200"
              >
                Training
              </NavLink>
              <NavLink
                to="/faq"
                className="mt-2 transition-colors duration-300 transform lg:mt-0 hover:text-gray-400 dark:hover:text-gray-200"
              >
                FAQ
              </NavLink>
              <NavLink
                to="/contact"
                className="mt-2 transition-colors duration-300 transform lg:mt-0 hover:text-gray-400 dark:hover:text-gray-200"
              >
                Contact
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
