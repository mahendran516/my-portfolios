import React from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiMongodb, SiFirebase, SiExpress } from 'react-icons/si';
import Mern from "../assets/images/mern.jpg";

const About = () => {
  const skills = [
    { name: "HTML", icon: FaHtml5, color: "text-red-500" },
    { name: "CSS", icon: FaCss3Alt, color: "text-blue-500" },
    { name: "JavaScript", icon: FaJsSquare, color: "text-yellow-500" },
    { name: "React", icon: FaReact, color: "text-blue-400" },
    { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
    { name: "Express", icon: SiExpress, color: "text-gray-500" },
    { name: "MongoDB", icon: SiMongodb, color: "text-green-700" },
    { name: "Firebase", icon: SiFirebase, color: "text-yellow-600" },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white">
      <div className="container mx-auto flex flex-col lg:flex-row items-center px-5">
        {/* Left side: Your details */}
        <div className="lg:w-1/2 mb-10 lg:mb-0 text-center lg:text-left">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg leading-relaxed mb-8">
            Hello! I am Mahendran, a passionate MERN stack developer. I specialize in building stunning web applications using modern technologies like MongoDB, Express, React, and Node.js. I love exploring new technologies and constantly improving my skills.
          </p>
          <div className="flex justify-center lg:justify-start flex-wrap gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="flex flex-col items-center">
                <skill.icon className={`text-6xl transition-transform duration-300 transform hover:scale-110 ${skill.color}`} />
                <p className="mt-2 text-lg">{skill.name}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <a href="/path/to/your/resume.pdf" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-green-400 to-blue-500 text-white py-2 px-4 rounded-md hover:opacity-90 transition-opacity duration-300">
              Download Resume
            </a>
          </div>
        </div>

        {/* Right side: MERN stack image */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <img src={Mern} alt="MERN Stack" className="w-full max-w-md rounded-lg shadow-lg" />
        </div>
      </div>
    </section>
  );
};

export default About;
