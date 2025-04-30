import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import projectData from '../pages/home/projectData.js';

export default function AllProjects() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('All');
  
  // Extract unique categories for the filter
  const categories = ['All', ...new Set(projectData.map(project => project.category))];
  
  // Filter projects based on selected category
  const filteredProjects = filter === 'All' 
    ? projectData 
    : projectData.filter(project => project.category === filter);

  const handleArrowClick = (demoLink, e) => {
    e.preventDefault();
    window.open(demoLink, '_blank');
  };

  const handleDetailsClick = (id, e) => {
    e.preventDefault();
    navigate(`/project/${id}`);
  };

  return (
    <div className="bg-black text-white min-h-screen py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <Link 
            to="/" 
            className="inline-flex items-center text-blue-500 hover:text-blue-400 mb-6 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
            </svg>
            Back to Home
          </Link>
          
          <h1 className="text-4xl font-bold mb-4">All Projects</h1>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Browse through my complete portfolio of projects. From web applications to games, 
            each project represents my passion for creating functional and engaging experiences.
          </p>
        </div>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-md transition-colors ${
                filter === category 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-900 text-gray-300 hover:bg-gray-800'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="relative bg-gradient-to-br from-black to-black rounded-lg overflow-hidden border border-gray-900 hover:border-blue-500 transition-all duration-500 group"
            >
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
              <div className="relative z-10 p-6">
                <div className="mb-4">
                  <span className="px-3 py-1 bg-gray-800 text-blue-400 rounded-full text-xs">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-medium text-white mb-2">{project.name}</h3>
                <p className="text-gray-400 mb-6">{project.description}</p>
                
                <div className="flex justify-between items-center">
                  <div className="flex space-x-2">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span 
                        key={index}
                        className="px-2 py-1 bg-gray-800 text-xs text-gray-300 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-800 text-xs text-gray-300 rounded">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex space-x-4">
                    {/* Arrow icon to visit project */}
                    <a 
                      href="#" 
                      onClick={(e) => handleArrowClick(project.demoLink, e)}
                      title="Visit Project" 
                      className="text-gray-400 hover:text-cyan-500 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </a>

                    {/* Plus icon to see details */}
                    <button 
                      onClick={(e) => handleDetailsClick(project.id, e)}
                      title="See Details" 
                      className="text-gray-400 hover:text-purple-500 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Bottom Gradient Border Effect */}
              <div className="pointer-events-none absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:w-full transition-all duration-700"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}