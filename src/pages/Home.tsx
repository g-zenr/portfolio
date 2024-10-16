import React from "react";

interface HomeProps {
  id: string;
}

const Home: React.FC<HomeProps> = ({ id }) => {
  return (
    <section id={id} className="py-16 px-4 text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
      <p className="text-lg">
        Here you can find information about my projects, skills, and more.
      </p>
    </section>
  );
};

export default Home;
