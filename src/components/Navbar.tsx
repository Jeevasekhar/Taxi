
import React, { useState } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <NavLink to="/" className="flex items-center">
              <img src="/Gemini_Generated_Image_57zttx57zttx57zt.png" alt="Taxi Logo" className="h-19 w-20 mr-2  shadow" />
              <div className="bg-yellow-400 text-black px-3 py-2 rounded-lg font-bold text-xl">
                TAXI
              </div>
              <span className="ml-2 text-xl font-bold text-gray-800">Tirupati</span>
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-yellow-400 text-black'
                      : 'text-gray-700 hover:bg-yellow-100 hover:text-black'
                  }`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-yellow-400 text-black'
                      : 'text-gray-700 hover:bg-yellow-100 hover:text-black'
                  }`
                }
              >
                About Us
              </NavLink>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-yellow-400 text-black'
                      : 'text-gray-700 hover:bg-yellow-100 hover:text-black'
                  }`
                }
              >
                Services
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-yellow-400 text-black'
                      : 'text-gray-700 hover:bg-yellow-100 hover:text-black'
                  }`
                }
              >
                Contact
              </NavLink>
            </div>
          </div>

          {/* Contact Actions */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href="tel:+918801838383"
              className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-600 transition-colors flex items-center"
            >
              <Phone size={16} className="mr-1" />
              Call Now
            </a>
            <a
              href="https://wa.me/918801838383"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors flex items-center"
            >
              <MessageCircle size={16} className="mr-1" />
              WhatsApp
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-black focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50">
              <NavLink
                to="/"
                onClick={toggleMenu}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-yellow-400 text-black'
                      : 'text-gray-700 hover:bg-yellow-100'
                  }`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                onClick={toggleMenu}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-yellow-400 text-black'
                      : 'text-gray-700 hover:bg-yellow-100'
                  }`
                }
              >
                About Us
              </NavLink>
              <NavLink
                to="/services"
                onClick={toggleMenu}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-yellow-400 text-black'
                      : 'text-gray-700 hover:bg-yellow-100'
                  }`
                }
              >
                Services
              </NavLink>
              <NavLink
                to="/contact"
                onClick={toggleMenu}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-yellow-400 text-black'
                      : 'text-gray-700 hover:bg-yellow-100'
                  }`
                }
              >
                Contact
              </NavLink>
              <div className="flex space-x-2 px-3 pt-2">
                <a
                  href="tel:+918801838383"
                  className="bg-green-500 text-white px-3 py-2 rounded text-sm font-medium hover:bg-green-600 transition-colors flex items-center"
                >
                  <Phone size={14} className="mr-1" />
                  Call
                </a>
                <a
                  href="https://wa.me/918801838383"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 text-white px-3 py-2 rounded text-sm font-medium hover:bg-green-700 transition-colors flex items-center"
                >
                  <MessageCircle size={14} className="mr-1" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
