import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and About */}
          <div className="mb-6 md:mb-0">
            <div className="flex items-center justify-center md:justify-start mb-4">
              <h3 className="text-2xl font-bold">
                <a
                  href="#home"
                  className="text-white hover:text-blue-400 transition"
                >
                  Portfolio<span className="text-blue-500">.</span>
                </a>
              </h3>
            </div>
            <p className="text-gray-400 text-center md:text-left">
              A showcase of my projects, skills, and experience as a full-stack
              developer. Built with React, TypeScript, and Tailwind CSS.
            </p>
          </div>

          {/* Quick Links */}
          <div className="mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4 text-center md:text-left">
              Quick Links
            </h4>
            <nav>
              <ul className="flex flex-col gap-2 text-center md:text-left">
                <li>
                  <a
                    href="#home"
                    className="text-gray-400 hover:text-blue-400 transition"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-gray-400 hover:text-blue-400 transition"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#skills"
                    className="text-gray-400 hover:text-blue-400 transition"
                  >
                    Skills
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="text-gray-400 hover:text-blue-400 transition"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-gray-400 hover:text-blue-400 transition"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-center md:text-left">
              Connect
            </h4>
            <div className="flex justify-center md:justify-start gap-4 mb-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center text-white transition-colors duration-300"
                aria-label="GitHub"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center text-white transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center text-white transition-colors duration-300"
                aria-label="Twitter"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="mailto:contact@example.com"
                className="bg-gray-800 hover:bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center text-white transition-colors duration-300"
                aria-label="Email"
              >
                <FaEnvelope size={20} />
              </a>
            </div>
            <p className="text-gray-400 text-center md:text-left">
              Feel free to reach out for collaborations or just a friendly
              hello!
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-sm text-gray-400 text-center">
          <p>&copy; {currentYear} John Doe. All rights reserved.</p>
          <p className="mt-2">
            Designed & Built with <span className="text-red-500">♥</span> by
            John Doe
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
