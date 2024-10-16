import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-center py-6 mt-10">
      <p className="text-gray-300">
        &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
