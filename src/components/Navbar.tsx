import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: "Home", url: "#home" },
    { name: "About", url: "#about" },
    { name: "Skills", url: "#skills" },
    { name: "Projects", url: "#projects" },
    { name: "Contact", url: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? isDark
            ? "bg-gray-900/95 shadow-lg backdrop-blur-sm"
            : "bg-white/95 shadow-lg backdrop-blur-sm"
          : isDark
          ? "bg-transparent"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <a
              href="#home"
              className={`${isDark ? "text-white" : "text-gray-900"}`}
            >
              <span className="text-blue-600">Dev</span>Portfolio
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                className={`${
                  isDark
                    ? "text-gray-200 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                } transition-colors duration-300`}
              >
                {link.name}
              </a>
            ))}

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className={`p-2.5 rounded-full ${
                isDark
                  ? "bg-gray-800 text-yellow-400 hover:bg-gray-700"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200"
              } transition-colors duration-300`}
              aria-label="Toggle dark/light mode"
            >
              {isDark ? <FaSun size={18} /> : <FaMoon size={18} />}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
            {/* Theme Toggle Button (Mobile) */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full ${
                isDark
                  ? "bg-gray-800 text-yellow-400"
                  : "bg-gray-100 text-gray-800"
              }`}
              aria-label="Toggle dark/light mode"
            >
              {isDark ? <FaSun size={16} /> : <FaMoon size={16} />}
            </button>

            <button
              onClick={toggleMenu}
              className={`p-2 rounded-lg ${
                isDark ? "text-white bg-gray-800" : "text-gray-900 bg-gray-100"
              }`}
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div
          className={`md:hidden ${
            isDark ? "bg-gray-900" : "bg-white"
          } shadow-lg`}
        >
          <div className="flex flex-col space-y-3 px-4 pt-2 pb-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                className={`py-2 px-1 ${
                  isDark
                    ? "text-gray-200 hover:text-white"
                    : "text-gray-800 hover:text-gray-900"
                } border-b ${isDark ? "border-gray-800" : "border-gray-100"}`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
