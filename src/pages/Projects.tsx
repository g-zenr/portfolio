import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";

interface ProjectsProps {
  id: string;
}

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string;
  codeUrl: string;
}

const Projects: React.FC<ProjectsProps> = ({ id }) => {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const projects: Project[] = [
    {
      id: 1,
      title: "Portfolio Website",
      description:
        "A personal portfolio website built with React, TypeScript, and Tailwind CSS. Showcases projects and skills.",
      image: "/path/to/image.jpg", // Replace with actual image path
      tags: ["React", "TypeScript", "Tailwind"],
      demoUrl: "#",
      codeUrl: "https://github.com/username/repo",
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      description:
        "An e-commerce platform with user authentication, product management, and payment integration.",
      image: "/path/to/image.jpg", // Replace with actual image path
      tags: ["React", "Node.js", "MongoDB"],
      demoUrl: "#",
      codeUrl: "https://github.com/username/repo",
    },
    {
      id: 3,
      title: "Task Management App",
      description:
        "A task management application with drag and drop functionality, user collaboration, and real-time updates.",
      image: "/path/to/image.jpg", // Replace with actual image path
      tags: ["Flutter", "Firebase"],
      demoUrl: "#",
      codeUrl: "https://github.com/username/repo",
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description:
        "A weather application that shows current conditions and forecasts based on location.",
      image: "/path/to/image.jpg", // Replace with actual image path
      tags: ["JavaScript", "API", "CSS"],
      demoUrl: "#",
      codeUrl: "https://github.com/username/repo",
    },
  ];

  const filters = [
    "all",
    "React",
    "TypeScript",
    "Node.js",
    "Flutter",
    "Firebase",
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.tags.includes(activeFilter));

  return (
    <section
      id={id}
      className={`py-20 px-4 ${
        isDark ? "bg-gray-900" : "bg-gray-50"
      } transition-colors duration-300`}
    >
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2
            className={`text-3xl md:text-4xl font-bold mb-3 ${
              isDark ? "text-white" : "text-gray-800"
            } inline-block relative`}
          >
            My Projects
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -mb-2 w-24 h-1 bg-blue-600"></span>
          </h2>
          <p
            className={`text-xl ${
              isDark ? "text-gray-300" : "text-gray-600"
            } mt-6 max-w-2xl mx-auto`}
          >
            Here are some of my recent works. Take a look around and see what
            I've been building.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === filter
                  ? "bg-blue-600 text-white shadow-md"
                  : isDark
                  ? "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {filter === "all" ? "All Projects" : filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`${
                isDark ? "bg-gray-800" : "bg-white"
              } rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2`}
            >
              {/* Project Image */}
              <div
                className={`h-52 ${
                  isDark ? "bg-gray-700" : "bg-gray-200"
                } overflow-hidden`}
              >
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div
                    className={`w-full h-full flex items-center justify-center ${
                      isDark ? "text-gray-400" : "text-gray-500"
                    } text-xl font-medium`}
                  >
                    Project Image
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3
                  className={`font-bold text-xl mb-2 ${
                    isDark ? "text-white" : "text-gray-800"
                  }`}
                >
                  {project.title}
                </h3>
                <p
                  className={`${
                    isDark ? "text-gray-300" : "text-gray-600"
                  } mb-4`}
                >
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-2 py-1 ${
                        isDark
                          ? "bg-blue-900/30 text-blue-400"
                          : "bg-blue-50 text-blue-600"
                      } text-xs font-medium rounded`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex justify-between">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700 transition flex items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                    Live Demo
                  </a>
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-4 py-2 border text-sm font-medium rounded hover:border-blue-600 hover:text-blue-600 transition flex items-center ${
                      isDark
                        ? "border-gray-600 text-gray-300"
                        : "border-gray-300 text-gray-700"
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
