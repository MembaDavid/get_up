import React from "react";
import { FaBrain, FaRocket, FaShieldAlt } from "react-icons/fa";
import ServiceCards from "./buttons/card";

const aboutPoints = [
  {
    icon: <FaBrain />,
    title: "AI Innovation",
    description:
      "Exploring new frontiers in artificial intelligence to craft smarter solutions.",
  },
  {
    icon: <FaRocket />,
    title: "Agile Execution",
    description:
      "Delivering projects rapidly while maintaining top-tier quality and reliability.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Security Focus",
    description:
      "Implementing robust security protocols to protect your valuable data assets.",
  },
];

const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "Python",
  "GraphQL",
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center py-20 px-6">
      <h1 className="text-5xl font-extrabold mb-12 text-gray-900 text-center max-w-4xl">
        About Me
      </h1>

      <p className="max-w-3xl text-center text-gray-700 text-lg mb-16 leading-relaxed">
        As a passionate solo developer, I combine innovative AI research, agile
        development, and a laser focus on security to build scalable,
        future-proof solutions tailored for your unique business needs.
      </p>

       {/* My Story Section */}
      <section
        id="story"
        className="w-full max-w-7xl bg-indigo-100 rounded-lg shadow-md p-12 mb-20 text-center"
      >
        <h2 className="text-4xl font-extrabold mb-6 text-gray-900">My Story</h2>
        <p className="max-w-3xl mx-auto text-gray-700 leading-relaxed text-lg">
          Ever since I started coding, I've been passionate about turning ideas into
          reality through clean, thoughtful code and beautiful design. From building
          simple websites to complex applications, I enjoy learning new technologies
          and solving challenging problems that create real impact.
        </p>
      </section>

      <section className="w-full max-w-7xl mb-20">
        <ServiceCards services={aboutPoints} />
      </section>

      {/* Skills & Technologies Section */}
      <section
        id="skills"
        className="w-full max-w-7xl bg-gradient-to-tr from-indigo-100 to-purple-200 rounded-lg shadow-md p-12 text-center"
      >
        <h2 className="text-4xl font-extrabold mb-6 text-gray-900">Skills & Technologies</h2>
        <p className="max-w-3xl mx-auto text-gray-700 mb-12">
          I specialize in a variety of modern technologies to build beautiful, performant, and scalable applications.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-white rounded-lg shadow-md p-6 hover:scale-105 transition-transform duration-300 cursor-default"
            >
              <p className="text-lg font-semibold text-gray-800">{skill}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
