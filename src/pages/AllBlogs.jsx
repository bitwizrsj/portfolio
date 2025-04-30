import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import blogData from '../data/blogdata.js'; // Adjust the path as necessary

export default function AllBlogs() {
  const [filter, setFilter] = useState('All');
  const [visibleBlogs, setVisibleBlogs] = useState([]);
  
  // Extract unique categories for the filter
  const categories = ['All', ...new Set(blogData.map(blog => blog.category))];
  
  // Filter blogs based on selected category
  const filteredBlogs = filter === 'All' 
    ? blogData 
    : blogData.filter(blog => blog.category === filter);
  
  // Animation for blog cards appearance
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleBlogs(filteredBlogs.map((_, index) => index));
    }, 100);
    return () => clearTimeout(timer);
  }, [filter, filteredBlogs]);

  // Function to filter by difficulty
  const getDifficultyClass = (difficulty) => {
    switch(difficulty) {
      case 'Beginner':
        return 'bg-green-900/50 text-green-400';
      case 'Intermediate':
        return 'bg-yellow-900/50 text-yellow-400';
      case 'Advanced':
        return 'bg-red-900/50 text-red-400';
      default:
        return 'bg-blue-900/50 text-blue-400';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white py-16 px-4 md:px-8">
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
          
          <h1 className="text-4xl font-bold mb-4">All Blog Posts</h1>
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore my collection of articles covering various technical topics, tutorials, and insights
            from web development to system administration and data science.
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

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs.map((blog, index) => (
            <div
              key={blog.id}
              data-index={index}
              className={`blog-card group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden border border-gray-800 hover:border-blue-500 transition-all duration-500 ${visibleBlogs.includes(index) ? 'opacity-100' : 'opacity-0'} transform transition-all duration-1000`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl"></div>
              
              {/* Image Section */}
              <div className="relative h-48 overflow-hidden">
                <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-80"></div>

                {/* Difficulty badge */}
                <div className="absolute top-4 right-4 z-10">
                  <div className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyClass(blog.difficulty)}`}>
                    {blog.difficulty}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-medium text-blue-400">{blog.category}</span>
                  <span className="text-gray-500">•</span>
                  <span className="text-xs text-gray-400">{blog.readTime}</span>
                </div>

                <h3 className="text-xl font-bold mb-3 text-white transition-colors duration-300">
                  {blog.title}
                </h3>

                <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors duration-300">
                  {blog.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {blog.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="bg-gray-800 px-2 py-1 rounded text-xs text-blue-400">
                      #{tag}
                    </span>
                  ))}
                  {blog.tags.length > 3 && (
                    <span className="bg-gray-800 px-2 py-1 rounded text-xs text-blue-400">
                      +{blog.tags.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex justify-between items-center mt-4">
                  <span className="text-xs text-gray-400">{blog.date}</span>
                  
                  <Link
                    to={`/blog/${blog.slug}`}
                    className="flex items-center text-blue-400 group-hover:text-blue-300 transition-colors duration-300"
                  >
                    <span className="mr-2 text-sm font-medium transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">Read more</span>
                    <ArrowUpRight size={16} className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </Link>
                </div>

                <div className="pointer-events-none absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:w-full transition-all duration-700"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state if no blogs match the filter */}
        {filteredBlogs.length === 0 && (
          <div className="text-center py-16">
            <h3 className="text-2xl font-bold mb-4">No blogs found</h3>
            <p className="text-gray-400">Try selecting a different category</p>
          </div>
        )}
      </div>
    </div>
  );
}