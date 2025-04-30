import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import projectData from '../pages/home/projectData.js';

export default function ProjectDetails() {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  
  useEffect(() => {
    // Find the project with the matching id
    const foundProject = projectData.find(proj => proj.id === parseInt(id));
    setProject(foundProject);
  }, [id]);

  if (!project) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-black text-white">
        <div className="text-center">
          <h2 className="text-2xl mb-4">Loading project details...</h2>
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black text-white min-h-screen py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <Link 
          to="/projects" 
          className="inline-flex items-center text-blue-500 hover:text-blue-400 mb-8 transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
          </svg>
          Back to All Projects
        </Link>

        {/* Project Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">{project.name}</h1>
          <div className="w-24 h-1 bg-blue-500 mb-6"></div>
          <p className="text-gray-400">{project.category} | {project.description}</p>
        </div>

        {/* Project Image */}
        <div className="mb-12 rounded-lg overflow-hidden border border-gray-800">
          <img 
            src={project.imageUrl || "/api/placeholder/800/450"} 
            alt={project.name} 
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Project Details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left Column - Project Description */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-6">Project Description</h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              {project.fullDescription}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 mt-8">
              <a 
                href={project.demoLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Live Demo
              </a>
              <a 
                href={project.githubLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-3 bg-transparent border border-gray-600 text-white rounded-md hover:border-blue-500 hover:text-blue-500 transition-colors"
              >
                Source Code
              </a>
            </div>
          </div>

          {/* Right Column - Technical Details */}
          <div className="md:col-span-1">
            <div className="bg-gray-900 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-6">Technologies Used</h3>
              <div className="flex flex-wrap gap-2 mb-8">
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-gray-800 text-blue-400 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Additional Project Info Could Go Here */}
              <div className="border-t border-gray-800 pt-6 mt-6">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-400">Category:</span>
                  <span>{project.category}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Project ID:</span>
                  <span>{project.id}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}