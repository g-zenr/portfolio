import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-center py-6 mt-10 shadow-md">
      <p className="text-gray-600">
        &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
