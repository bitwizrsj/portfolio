import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import projectData from './projectData';

export default function ProjectsSection() {
  const navigate = useNavigate();
  const featuredProjects = projectData.slice(0, 6); // Show only first 6 projects
  
  return (
    <section className="bg-black text-white py-12 px-4 md:px-8 lg:px-16">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Heading, Description and See All button */}
        <div className="mb-12 flex justify-between items-center">
  <div>
    <h3 className="text-2xl font-normal tracking-widest text-gray-300 uppercase">Latest Work</h3>
    <div className="w-full h-px bg-gray-700 mt-4"></div>
  </div>

  {/* Styled button (no animation) */}
  <div className="relative inline-flex items-center justify-center group">
    <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50"></div>
    <Link
      to="/projects"
      className="relative inline-flex items-center justify-center px-6 py-2 text-base font-normal text-white bg-black border border-transparent rounded-full"
    >
      See All Projects
    </Link>
  </div>
</div>

        {/* Projects Grid */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} navigate={navigate} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

function ProjectCard({ project, navigate }) {
  const handleArrowClick = (e) => {
    e.preventDefault();
    window.open(project.demoLink, '_blank');
  };

  const handleDetailsClick = (e) => {
    e.preventDefault();
    navigate(`/project/${project.id}`);
  };

  return (
    <div className="relative max-w-sm group bg-gradient-to-br from-black to-black rounded-lg overflow-hidden border border-black hover:border-blue-500 transition-all duration-500">
      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl pointer-events-none z-0"></div>
      
      {/* Image */}
      <div className="relative z-10 overflow-hidden">
        <img
          src={project.imageUrl || "/api/placeholder/350/200"}
          alt={project.name}
          className="w-full h-64 object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-between p-4 border-t border-gray-800">
        <div>
          <h3 className="text-lg font-medium text-white">{project.name}</h3>
          <p className="text-sm text-gray-400">{project.description}</p>
        </div>

        <div className="flex space-x-4">
          {/* Arrow icon to visit project */}
          <a 
            href="#" 
            onClick={handleArrowClick}
            title="Visit Project" 
            className="text-gray-400 hover:text-cyan-500 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>

          {/* Plus icon to see details */}
          <button 
            onClick={handleDetailsClick}
            title="See Details" 
            className="text-gray-400 hover:text-purple-500 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Bottom Gradient Border Effect */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:w-full transition-all duration-700"></div>
    </div>
  );
}