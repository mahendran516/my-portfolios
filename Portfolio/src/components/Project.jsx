import React from 'react';

const Projects = () => {
  const projectList = [
    {
      title: "E-commerce Amazon",
      description: "Online Shopping Website",
      technologies: "HTML, TailwindCSS, React, Firebase",
      link: "https://fir-561cc.web.app/",
      GitHub: "https://github.com/mahendran516/Final-Ecommerce",
      image: "https://github.com/mahendran516/images/blob/main/Screenshot%202024-12-19%20162010.png?raw=true"
    },
    {
      title: "TMDB Website",
      description: "A movie database app integrating TMDB API.",
      technologies: "HTML, TailwindCSS, React, Firebase",
      link: "https://cinibite-d3c35.web.app/signin",
      GitHub: "https://github.com/mahendran516/cinibite",
      image: "https://github.com/mahendran516/images/blob/main/Screenshot%202024-10-29%20114238.png?raw=true"
    },
  
    {
      title: "Nostra E-commerce Platform",
      description: "A fully functional e-commerce website.",
      technologies: "HTML, CSS, JavaScript",
      link: "https://mahendran516.github.io/Nostra-clone/",
      GitHub: "https://github.com/mahendran516/Nostra-clone",
      image: "https://github.com/mahendran516/images/blob/main/Screenshot%202024-10-29%20114154.png?raw=true"
    },
    {
      title: "Deupload Project management",
      description: "A Responsive website",
      technologies: "HTML,Bootstrap",
      link: "https://mahendran516.github.io/deupload-project-management/",
      GitHub: "https://github.com/mahendran516/deupload-project-management",
      image: "https://github.com/mahendran516/images/blob/main/Screenshot%202024-10-30%20122344.png?raw=true"
    },
    {
      title: "Greenden",
      description: "A fully functional Products Sale website.",
      technologies: "HTML, CSS, JavaScript, Tailwindcss",
      link: "https://mahendran516.github.io/greendan-tailwindcss/",
      GitHub: "https://github.com/mahendran516/greendan-tailwindcss",
      image: "https://github.com/mahendran516/images/blob/main/Screenshot%202024-10-30%20121729.png?raw=true"
    },
    {
      title: "Weather App",
      description: "A real-time weather app with a modern, responsive UI.",
      technologies: "React, TailwindCSS, Axios",
      link: "https://weather-theta-rouge-72.vercel.app/",
      GitHub: "https://github.com/mahendran516/weather",
      image: "https://github.com/mahendran516/images/blob/main/Screenshot%202024-10-29%20111817.png?raw=true"
    },
 
    {
      title: "Actodo",
      description: " Daily Activity Task",
      technologies: "HTML,Tailwindcss,Reactjs",
      link: "https://actodo-react-omega.vercel.app/",
      GitHub: "https://github.com/mahendran516/Actodo-react",
      image: "https://github.com/mahendran516/images/blob/main/Screenshot%202024-10-30%20124739.png?raw=true"
    },
    {
      title: "Udemy-Clone",
      description: "A fully functional website.",
      technologies: "HTML, CSS, JavaScript, Tailwindcss, React.js",
      link: "https://udemy-react-puce.vercel.app/",
      GitHub: "https://github.com/mahendran516/udemy-react",
      image: "https://github.com/mahendran516/images/blob/main/Screenshot%202024-10-30%20124519.png?raw=true"
    },
    {
      title: "Reestar",
      description: " A restaurant Website",
      technologies: "HTML, CSS",
      link: "https://mahendran516.github.io/Reestar-01/",
      GitHub: "https://github.com/mahendran516/Reestar-01",
      image: "https://github.com/mahendran516/images/blob/main/Screenshot%202024-10-30%20124325.png?raw=true"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectList.map((project, index) => (
            <div key={index} className="bg-white p-6 shadow-xl rounded-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-t-lg mb-4" />
              <h3 className="text-2xl font-bold mb-2 text-gray-900">{project.title}</h3>
              <p className="text-sm text-gray-700 mb-2">{project.technologies}</p>
              <p className="text-lg mb-4 text-gray-800">{project.description}</p>
              <div className="flex justify-between">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-blue-500 to-teal-500 text-white py-2 px-4 rounded-md hover:opacity-90 transition-opacity duration-300">Demo</a>
                <a href={project.GitHub} target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-gray-800 to-gray-600 text-white py-2 px-4 rounded-md hover:opacity-90 transition-opacity duration-300">GitHub</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
