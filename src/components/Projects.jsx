import { useState } from 'react';
import p1 from '../assets/hypernextechnology.png';
import p2 from '../assets/dashboard.png';
import p3 from '../assets/healthcare.png';
import p4 from '../assets/flappy.png'


export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      name: "Hypernex Technology",
      description: "Full-Stack Development",
      imageUrl: p1, // Replace with actual image URL
    },
    {
      id: 2,
      name: "School Management System",
      description: "Full-Stack Development",
      imageUrl: p2, // Replace with actual image URL
    },
    {
      id: 3,
      name: "Healthcare",
      description: "Full-Stack Development",
      imageUrl: p3, // Replace with actual image URL
    },
    {
      id: 4,
      name: "Flappy Bird",
      description: "Game Development",
      imageUrl: p4, // Replace with actual image URL
    }
  ];
  
  return (
    <section className="bg-black text-white py-12 px-4 md:px-8 lg:px-16">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {/* First grid item with heading and description */}
          <div className="col-span-1 md:col-span-2 lg:col-span-3">
            <h3 className="text-2xl font-normal tracking-widest text-gray-300 uppercase">Latest Work</h3>
            <div className="w-1/3 h-px bg-gray-700 mt-8 mb-2"></div>
          </div>
          
          {/* Projects Grid */}
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  return (
    <div className="bg-black rounded-lg overflow-hidden group">
      {/* Image only without gradient background */}
      <div className="overflow-hidden">
        <img
          src={project.imageUrl || "/api/placeholder/350/200"}
          alt={project.name}
          className="w-full h-64 object-cover"
        />
      </div>
      
      {/* Action icons below the image */}
      <div className="flex items-center justify-between p-4 border-t border-gray-800">
        <div>
          <h3 className="text-lg font-medium text-white">{project.name}</h3>
          <p className="text-sm text-gray-400">{project.description}</p>
        </div>
        
        <div className="flex space-x-4">
          {/* Visit icon (arrow) */}
          <a href="#" title="Visit Project" className="text-gray-400 hover:text-cyan-500 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
          
          {/* Details icon (plus) */}
          <button title="See Details" className="text-gray-400 hover:text-purple-500 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
            </svg>
          </button>
          
          {/* Code icon */}
          <a href="#" title="View Code" className="text-gray-400 hover:text-cyan-500 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}