import React from "react";
import {
  FaHtml5,
  FaCss3,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaFire,
  FaGitAlt,
  FaNpm,
} from "react-icons/fa";
import {
  SiTypescript,
  SiMongodb,
  SiMysql,
  SiFlutter,
  SiDart,
  SiExpress,
  SiVite,
  SiVisualstudiocode,
  SiPostman,
  SiAndroidstudio,
} from "react-icons/si";
import { TbSql } from "react-icons/tb";

interface SkillsProps {
  id: string;
}

interface Skill {
  name: string;
  icon: JSX.Element;
  color: string;
}

interface SkillCategory {
  name: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    skills: [
      {
        name: "HTML5",
        icon: <FaHtml5 className="text-[#E34F26]" />,
        color: "hover:text-[#E34F26]",
      },
      {
        name: "CSS3",
        icon: <FaCss3 className="text-[#1572B6]" />,
        color: "hover:text-[#1572B6]",
      },
      {
        name: "JavaScript",
        icon: <FaJsSquare className="text-[#F7DF1E]" />,
        color: "hover:text-[#F7DF1E]",
      },
      {
        name: "TypeScript",
        icon: <SiTypescript className="text-[#3178C6]" />,
        color: "hover:text-[#3178C6]",
      },
      {
        name: "Dart",
        icon: <SiDart className="text-[#0175C2]" />,
        color: "hover:text-[#0175C2]",
      },
    ],
  },
  {
    name: "Databases",
    skills: [
      {
        name: "MongoDB",
        icon: <SiMongodb className="text-[#47A248]" />,
        color: "hover:text-[#47A248]",
      },
      {
        name: "MySQL",
        icon: <SiMysql className="text-[#4479A1]" />,
        color: "hover:text-[#4479A1]",
      },
      {
        name: "SQL",
        icon: <TbSql className="text-[#FFD700]" />,
        color: "hover:text-[#FFD700]",
      },
      {
        name: "Firebase",
        icon: <FaFire className="text-[#FFCA28]" />,
        color: "hover:text-[#FFCA28]",
      },
    ],
  },
  {
    name: "Frameworks & Libraries",
    skills: [
      {
        name: "React",
        icon: <FaReact className="text-[#61DAFB]" />,
        color: "hover:text-[#61DAFB]",
      },
      {
        name: "Node.js",
        icon: <FaNodeJs className="text-[#339933]" />,
        color: "hover:text-[#339933]",
      },
      {
        name: "Express.js",
        icon: <SiExpress className="text-black" />,
        color: "hover:text-black",
      },
      {
        name: "Flutter",
        icon: <SiFlutter className="text-[#02569B]" />,
        color: "hover:text-[#02569B]",
      },
    ],
  },
  {
    name: "Tools",
    skills: [
      {
        name: "Git",
        icon: <FaGitAlt className="text-[#F05032]" />,
        color: "hover:text-[#F05032]",
      },
      {
        name: "npm",
        icon: <FaNpm className="text-[#CB3837]" />,
        color: "hover:text-[#CB3837]",
      },
      {
        name: "Vite",
        icon: <SiVite className="text-[#646CFF]" />,
        color: "hover:text-[#646CFF]",
      },
      {
        name: "VS Code",
        icon: <SiVisualstudiocode className="text-[#007ACC]" />,
        color: "hover:text-[#007ACC]",
      },
      {
        name: "Postman",
        icon: <SiPostman className="text-[#FF6C37]" />,
        color: "hover:text-[#FF6C37]",
      },
      {
        name: "Android Studio",
        icon: <SiAndroidstudio className="text-[#3DDC84]" />,
        color: "hover:text-[#3DDC84]",
      },
    ],
  },
];

const Skills: React.FC<SkillsProps> = ({ id }) => (
  <div id={id} className="p-12 rounded-xl shadow-xl">
    <h2 className="text-4xl font-extrabold  mb-12 text-center tracking-wide">
      My Skills
    </h2>
    {skillCategories.map((category) => (
      <div key={category.name} className="mb-12">
        <h3 className="text-2xl gray-700 mb-8 text-center">{category.name}</h3>
        <ul className="flex flex-wrap gap-8 justify-center">
          {category.skills.map(({ name, icon, color }) => (
            <li
              key={name}
              className={`flex flex-col items-center w-32 h-32 p-6 bg-white rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl ${color}`}
            >
              <div className="text-5xl mb-4">{icon}</div>
              <span className="text-md font-semibold text-gray-700 text-center">
                {name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

export default Skills;
