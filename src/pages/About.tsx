import React from "react";

interface AboutProps {
  id: string;
}

const About: React.FC<AboutProps> = ({ id }) => {
  return (
    <section id={id} className="py-16 px-4 text-center">
      <h2 className="text-3xl font-bold mb-6">About Me</h2>
      <p className="text-lg mb-4">
        I am a passionate web developer with a background in building dynamic
        and responsive websites.
      </p>
      <p className="text-lg">
        With experience in both frontend and backend development, I strive to
        create seamless user experiences.
      </p>
    </section>
  );
};

export default About;
