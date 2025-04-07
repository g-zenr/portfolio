import React from "react";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaDownload,
  FaGraduationCap,
  FaBriefcase,
} from "react-icons/fa";

interface AboutProps {
  id: string;
}

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  type: "education" | "work";
}

const experiences: Experience[] = [
  {
    title: "Computer Science Degree",
    company: "University of Technology",
    period: "2018 - 2022",
    description:
      "Studied computer science with a focus on software engineering and web development.",
    type: "education",
  },
  {
    title: "Frontend Developer",
    company: "Tech Solutions Inc.",
    period: "2022 - 2023",
    description:
      "Developed responsive web applications using React, TypeScript, and modern CSS frameworks.",
    type: "work",
  },
  {
    title: "Full Stack Developer",
    company: "Digital Innovations",
    period: "2023 - Present",
    description:
      "Building full-stack web applications with React, Node.js, and MongoDB. Leading frontend architecture decisions and mentoring junior developers.",
    type: "work",
  },
];

const About: React.FC<AboutProps> = ({ id }) => {
  return (
    <section id={id} className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-800 inline-block relative">
            About Me
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -mb-2 w-24 h-1 bg-blue-600"></span>
          </h2>
          <p className="text-xl text-gray-600 mt-6 max-w-2xl mx-auto">
            Here's a little background about who I am and what I do.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-12 mb-16">
          {/* Left Column: Personal Info */}
          <div className="md:w-2/5">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {/* Profile Image */}
              <div className="h-64 bg-gradient-to-r from-blue-400 to-blue-600 relative">
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                  <div className="w-36 h-36 rounded-full border-4 border-white overflow-hidden bg-white">
                    {/* Replace with your image */}
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-700">
                      Your Photo
                    </div>
                  </div>
                </div>
              </div>

              {/* Profile Details */}
              <div className="pt-20 px-6 pb-8">
                <h3 className="text-2xl font-bold text-center text-gray-800">
                  John Doe
                </h3>
                <p className="text-blue-600 font-medium text-center mb-6">
                  Full Stack Developer
                </p>

                <ul className="space-y-4">
                  <li className="flex items-center text-gray-700">
                    <FaMapMarkerAlt className="text-blue-600 mr-3" />
                    <span>San Francisco, CA</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaCalendarAlt className="text-blue-600 mr-3" />
                    <span>Born April 12, 1997</span>
                  </li>
                  <li className="flex items-center text-gray-700">
                    <FaGraduationCap className="text-blue-600 mr-3" />
                    <span>B.S. in Computer Science</span>
                  </li>
                </ul>
              </div>

              {/* Resume Download Button */}
              <div className="px-6 pb-8">
                <a
                  href="#"
                  className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg transition w-full"
                >
                  <FaDownload className="mr-2" />
                  Download CV
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Experience */}
          <div className="md:w-3/5">
            <div className="bg-white rounded-2xl p-6 mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                My Journey
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                I'm a passionate full-stack developer based in San Francisco,
                with over 3 years of professional experience building web and
                mobile applications. I specialize in JavaScript technologies,
                particularly React, Node.js, and TypeScript.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                My journey into development began during college where I
                discovered my passion for creating software solutions. Since
                then, I've been consistently improving my skills and staying
                up-to-date with emerging technologies and best practices.
              </p>
              <p className="text-gray-600 leading-relaxed">
                When I'm not coding, you can find me hiking, reading about new
                technologies, or contributing to open-source projects. I'm
                always eager to take on new challenges and collaborate on
                exciting projects.
              </p>
            </div>

            {/* Experience Timeline */}
            <div className="bg-white rounded-2xl p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Experience & Education
              </h3>

              <div className="space-y-8 relative">
                {/* Timeline Line */}
                <div className="absolute top-0 left-6 bottom-0 w-0.5 bg-gray-200 transform -translate-x-1/2"></div>

                {experiences.map((exp, index) => (
                  <div key={index} className="relative pl-12">
                    {/* Timeline Dot */}
                    <div className="absolute left-0 top-1 w-6 h-6 rounded-full border-4 border-white bg-blue-600 shadow-md transform -translate-x-1/2"></div>

                    {/* Content */}
                    <h4 className="text-lg font-bold text-gray-800">
                      {exp.title}
                    </h4>
                    <div className="flex items-center text-blue-600 mb-2">
                      {exp.type === "education" ? (
                        <FaGraduationCap className="mr-2" />
                      ) : (
                        <FaBriefcase className="mr-2" />
                      )}
                      <span>{exp.company}</span>
                    </div>
                    <p className="text-sm text-gray-500 mb-3">{exp.period}</p>
                    <p className="text-gray-600">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
