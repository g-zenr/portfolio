import React from "react";

interface ProjectsProps {
  id: string;
}

const Projects: React.FC<ProjectsProps> = ({ id }) => {
  return (
    <section id={id} className="py-16 px-4 text-center bg-gray-100">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Projects</h2>
      <div className="flex flex-col items-center gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
          <h3 className="text-xl font-semibold mb-2 text-gray-800">
            Portfolio Website
          </h3>
          <p className="text-lg mb-4 text-gray-600">
            A personal portfolio website built with React, TypeScript, and
            Tailwind CSS. Showcases projects and skills.
          </p>
          <a href="#" className="text-blue-400 hover:underline">
            View Project
          </a>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
          <h3 className="text-xl font-semibold mb-2 text-gray-800">
            E-Commerce Platform
          </h3>
          <p className="text-lg mb-4 text-gray-600">
            An e-commerce platform with user authentication, product management,
            and payment integration.
          </p>
          <a href="#" className="text-blue-400 hover:underline">
            View Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
