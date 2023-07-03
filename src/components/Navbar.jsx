import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleSetActive = (to) => {
    setActiveLink(to);
  };

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "skills", label: "Skills" },
    { to: "education", label: "Education" },
    { to: "projects", label: "Projects" },
    { to: "contact", label: "Contact Me" },
  ];

  return (
    <nav className="fixed w-full bg-black z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link
                to="/"
                spy={true}
                smooth={true}
                offset={-60}
                duration={500}
                className="font-montserrat text-white font-bold text-xl"
              >
                ROBIN SALAZAR
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-60}
                  duration={500}
                  className={`hover:bg-red-600 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${
                    activeLink === link.to ? "text-red-500" : "text-white"
                  }`}
                  onSetActive={handleSetActive}
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="block md:hidden">
            <button
              className="text-white hover:text-red-600 focus:outline-none focus:text-red-600"
              onClick={toggleMenu}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-60}
                duration={500}
                className={`hover:bg-red-600 hover:text-white block px-3 py-2 rounded-md text-base font-medium ${
                  activeLink === link.to ? "text-red-500" : "text-white"
                }`}
                onSetActive={handleSetActive}
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
