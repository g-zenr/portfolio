import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-center py-6 bg-white shadow-md">
      <ul className="flex space-x-10">
        <li>
          <a
            href="#home"
            className="text-gray-800 hover:text-blue-600 hover:underline transition"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            className="text-gray-800 hover:text-blue-600 hover:underline transition"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#skills"
            className="text-gray-800 hover:text-blue-600 hover:underline transition"
          >
            Skills
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className="text-gray-800 hover:text-blue-600 hover:underline transition"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="text-gray-800 hover:text-blue-600 hover:underline transition"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
