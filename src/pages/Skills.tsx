import React, { useState } from "react";
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
  SiPostman,
  SiAndroidstudio,
} from "react-icons/si";
import { TbSql } from "react-icons/tb";
import { useTheme } from "../context/ThemeContext";

interface SkillsProps {
  id: string;
}

interface Skill {
  name: string;
  icon: JSX.Element;
  color: string;
  level: "beginner" | "intermediate" | "advanced" | "expert";
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
        color: "hover:text-[#E34F26] group-hover:bg-[#E34F26]/10",
        level: "expert",
      },
      {
        name: "CSS3",
        icon: <FaCss3 className="text-[#1572B6]" />,
        color: "hover:text-[#1572B6] group-hover:bg-[#1572B6]/10",
        level: "expert",
      },
      {
        name: "JavaScript",
        icon: <FaJsSquare className="text-[#F7DF1E]" />,
        color: "hover:text-[#F7DF1E] group-hover:bg-[#F7DF1E]/10",
        level: "advanced",
      },
      {
        name: "TypeScript",
        icon: <SiTypescript className="text-[#3178C6]" />,
        color: "hover:text-[#3178C6] group-hover:bg-[#3178C6]/10",
        level: "advanced",
      },
      {
        name: "Dart",
        icon: <SiDart className="text-[#0175C2]" />,
        color: "hover:text-[#0175C2] group-hover:bg-[#0175C2]/10",
        level: "intermediate",
      },
    ],
  },
  {
    name: "Databases",
    skills: [
      {
        name: "MongoDB",
        icon: <SiMongodb className="text-[#47A248]" />,
        color: "hover:text-[#47A248] group-hover:bg-[#47A248]/10",
        level: "intermediate",
      },
      {
        name: "MySQL",
        icon: <SiMysql className="text-[#4479A1]" />,
        color: "hover:text-[#4479A1] group-hover:bg-[#4479A1]/10",
        level: "intermediate",
      },
      {
        name: "SQL",
        icon: <TbSql className="text-[#FFD700]" />,
        color: "hover:text-[#FFD700] group-hover:bg-[#FFD700]/10",
        level: "advanced",
      },
      {
        name: "Firebase",
        icon: <FaFire className="text-[#FFCA28]" />,
        color: "hover:text-[#FFCA28] group-hover:bg-[#FFCA28]/10",
        level: "intermediate",
      },
    ],
  },
  {
    name: "Frameworks & Libraries",
    skills: [
      {
        name: "React",
        icon: <FaReact className="text-[#61DAFB]" />,
        color: "hover:text-[#61DAFB] group-hover:bg-[#61DAFB]/10",
        level: "expert",
      },
      {
        name: "Node.js",
        icon: <FaNodeJs className="text-[#339933]" />,
        color: "hover:text-[#339933] group-hover:bg-[#339933]/10",
        level: "advanced",
      },
      {
        name: "Express.js",
        icon: <SiExpress className="text-black" />,
        color: "hover:text-black group-hover:bg-black/10",
        level: "advanced",
      },
      {
        name: "Flutter",
        icon: <SiFlutter className="text-[#02569B]" />,
        color: "hover:text-[#02569B] group-hover:bg-[#02569B]/10",
        level: "intermediate",
      },
    ],
  },
  {
    name: "Tools",
    skills: [
      {
        name: "Git",
        icon: <FaGitAlt className="text-[#F05032]" />,
        color: "hover:text-[#F05032] group-hover:bg-[#F05032]/10",
        level: "advanced",
      },
      {
        name: "npm",
        icon: <FaNpm className="text-[#CB3837]" />,
        color: "hover:text-[#CB3837] group-hover:bg-[#CB3837]/10",
        level: "advanced",
      },
      {
        name: "Vite",
        icon: <SiVite className="text-[#646CFF]" />,
        color: "hover:text-[#646CFF] group-hover:bg-[#646CFF]/10",
        level: "intermediate",
      },
      {
        name: "Postman",
        icon: <SiPostman className="text-[#FF6C37]" />,
        color: "hover:text-[#FF6C37] group-hover:bg-[#FF6C37]/10",
        level: "intermediate",
      },
      {
        name: "Android Studio",
        icon: <SiAndroidstudio className="text-[#3DDC84]" />,
        color: "hover:text-[#3DDC84] group-hover:bg-[#3DDC84]/10",
        level: "beginner",
      },
    ],
  },
];


const Skills: React.FC<SkillsProps> = ({ id }) => {
  const [activeCategory, setActiveCategory] = useState<string>(
    skillCategories[0].name
  );
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section
      id={id}
      className={`py-20 px-4 ${
        isDark ? "bg-gray-900" : "bg-white"
      } transition-colors duration-300`}
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2
            className={`text-3xl md:text-4xl font-bold mb-3 ${
              isDark ? "text-white" : "text-gray-800"
            } inline-block relative`}
          >
            My Skills
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -mb-2 w-24 h-1 bg-blue-600"></span>
          </h2>
          <p
            className={`text-xl ${
              isDark ? "text-gray-300" : "text-gray-600"
            } mt-6 max-w-2xl mx-auto`}
          >
            I've worked with a variety of technologies across the full stack
            development spectrum.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {skillCategories.map((category) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              className={`px-4 py-2 rounded-lg text-sm md:text-base font-medium transition-all duration-200 ${
                activeCategory === category.name
                  ? "bg-blue-600 text-white shadow-md"
                  : isDark
                  ? "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Skills Grid with Animation */}
        {skillCategories
          .filter((category) => category.name === activeCategory)
          .map((category) => (
            <div key={category.name} className="animate-fade-in">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-6">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className={`group flex flex-col items-center p-6 ${
                      isDark
                        ? "bg-gray-800 border-gray-700"
                        : "bg-white border-gray-100"
                    } rounded-xl border shadow-sm hover:shadow-md transition-all duration-300 ${
                      skill.color
                    }`}
                  >
                    <div className="relative mb-4">
                      <div className="text-4xl md:text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                        {skill.icon}
                      </div>
                      <div
                        className={`absolute inset-0 ${
                          isDark ? "bg-gray-700" : "bg-white"
                        } rounded-full blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                      ></div>
                    </div>
                    <span
                      className={`text-base md:text-lg font-medium ${
                        isDark ? "text-white" : "text-gray-800"
                      } text-center`}
                    >
                      {skill.name}
                    </span>
                    <SkillLevelIndicatorDark
                      level={skill.level}
                      isDark={isDark}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}

        {/* Animation is now handled by Tailwind classes */}
      </div>
    </section>
  );
};

// Create a dark mode compatible version of the level indicator
const SkillLevelIndicatorDark: React.FC<{
  level: Skill["level"];
  isDark: boolean;
}> = ({ level, isDark }) => {
  const levels = {
    beginner: 1,
    intermediate: 2,
    advanced: 3,
    expert: 4,
  };

  const levelValue = levels[level];
  const maxLevels = 4;

  return (
    <div className="flex gap-0.5 mt-1">
      {[...Array(maxLevels)].map((_, index) => (
        <div
          key={index}
          className={`h-1 w-4 rounded-full ${
            index < levelValue
              ? "bg-blue-600"
              : isDark
              ? "bg-gray-700"
              : "bg-gray-200"
          }`}
        />
      ))}
    </div>
  );
};

export default Skills;
