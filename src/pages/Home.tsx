import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

interface HomeProps {
  id: string;
}

const Home: React.FC<HomeProps> = ({ id }) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section
      id={id}
      className={`min-h-screen flex items-center justify-center ${
        isDark
          ? "bg-gradient-to-br from-gray-900 to-gray-800"
          : "bg-gradient-to-br from-blue-50 to-gray-100"
      } pt-20 transition-colors duration-300`}
    >
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="md:w-1/2 space-y-6 text-center md:text-left">
            <span
              className={`inline-block px-3 py-1 ${
                isDark
                  ? "bg-blue-900/30 text-blue-400"
                  : "bg-blue-100 text-blue-600"
              } rounded-full text-sm font-medium`}
            >
              Full Stack Developer
            </span>

            <h1
              className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight ${
                isDark ? "text-white" : "text-gray-800"
              }`}
            >
              Hi, I'm <span className="text-blue-600">John Doe</span>
            </h1>

            <p
              className={`text-xl ${
                isDark ? "text-gray-300" : "text-gray-600"
              } max-w-2xl`}
            >
              I build responsive web applications and mobile apps with modern
              technologies. Passionate about creating clean, efficient, and
              user-friendly experiences.
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a
                href="#projects"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className={`px-6 py-3 border-2 rounded-lg font-medium transition ${
                  isDark
                    ? "border-gray-600 text-gray-300 hover:border-blue-500 hover:text-blue-400"
                    : "border-gray-300 text-gray-800 hover:border-blue-600 hover:text-blue-600"
                }`}
              >
                Contact Me
              </a>
            </div>

            <div className="flex gap-6 justify-center md:justify-start pt-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`${
                  isDark
                    ? "text-gray-400 hover:text-blue-400"
                    : "text-gray-600 hover:text-blue-600"
                } transition`}
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`${
                  isDark
                    ? "text-gray-400 hover:text-blue-400"
                    : "text-gray-600 hover:text-blue-600"
                } transition`}
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`${
                  isDark
                    ? "text-gray-400 hover:text-blue-400"
                    : "text-gray-600 hover:text-blue-600"
                } transition`}
              >
                <FaTwitter size={24} />
              </a>
            </div>
          </div>

          {/* Hero Image or Avatar */}
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-r from-blue-400 to-blue-600 shadow-2xl p-1">
                <div
                  className={`w-full h-full rounded-full ${
                    isDark ? "bg-gray-800" : "bg-white"
                  } overflow-hidden`}
                >
                  {/* Replace with your own image */}
                  <div
                    className={`w-full h-full ${
                      isDark
                        ? "bg-gray-700 text-gray-300"
                        : "bg-gray-200 text-gray-600"
                    } flex items-center justify-center text-4xl`}
                  >
                    Your Photo
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div
                className={`absolute top-0 -right-8 w-32 h-32 ${
                  isDark ? "bg-blue-900/20" : "bg-blue-100"
                } rounded-full opacity-60 -z-10`}
              ></div>
              <div
                className={`absolute -bottom-10 -left-10 w-40 h-40 ${
                  isDark ? "bg-blue-800/20" : "bg-blue-200"
                } rounded-full opacity-60 -z-10`}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
