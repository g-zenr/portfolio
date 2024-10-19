import React from "react";

interface ContactProps {
  id: string;
}

const Contact: React.FC<ContactProps> = ({ id }) => {
  return (
    <section id={id} className="py-16 px-4 text-center bg-gray-100">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Contact</h2>
      <p className="text-lg mb-4 text-gray-600">
        Feel free to reach out to me for any inquiries or opportunities. I'm
        always open to discussing new projects or collaborations.
      </p>
      <form className="flex flex-col items-center max-w-md mx-auto">
        <input
          type="text"
          placeholder="Your Name"
          className="mb-4 p-2 w-full rounded-lg border border-gray-300 bg-white text-gray-800"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="mb-4 p-2 w-full rounded-lg border border-gray-300 bg-white text-gray-800"
        />
        <textarea
          placeholder="Your Message"
          className="mb-4 p-2 w-full rounded-lg border border-gray-300 bg-white text-gray-800"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg"
        >
          Send
        </button>
      </form>
    </section>
  );
};

export default Contact;
