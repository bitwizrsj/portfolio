// src/components/Blogs.jsx
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import blogs from '../data/blogdata';
import { useEffect, useState } from 'react';

const BlogSection = () => {
  const [visibleBlogs, setVisibleBlogs] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleBlogs(blogs.map((_, index) => index));
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id='blogs' className="py-20 bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="max-w-7xl container mx-auto px-4">
        <div className="mb-12">
          <div className="w-32 h-1 bg-indigo-600 mb-6"></div>
          <h2 className="text-4xl font-bold text-cream mb-4">Latest Blog Posts</h2>
          <p className="text-gray-400">
            Insights and tutorials on full-stack development, modern frameworks, and best practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {blogs.map((blog, index) => (
            <div
              key={blog.id}
              data-index={index}
              className={`blog-card group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden border border-gray-800 hover:border-blue-500 transition-all duration-500 ${visibleBlogs.includes(index) ? 'opacity-100' : 'opacity-0'} transform transition-all duration-1000`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 transition-opacity duration-500 rounded-2xl"></div>
              <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGgtOHYyNGg4di0yNHptNCAwaDR2MTBoLTR2LTEwem0tMTYgMGg0djEwaC00di0xMHptOCAtOHY0aC00di00aDR6bTAgMzZ2NGgtNHYtNGg0eiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjIiLz48L2c+PC9zdmc+')]"></div>

              {/* Image Section */}
              <div className="relative h-48 overflow-hidden">
                {/* Displaying the blog image */}
                <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-80"></div>

                {/* Difficulty badge */}
                <div className="absolute top-4 right-4 z-10">
                  <div className={`px-3 py-1 rounded-full text-xs font-medium ${blog.difficulty === 'Beginner' ? 'bg-green-900/50 text-green-400' :
                      blog.difficulty === 'Intermediate' ? 'bg-yellow-900/50 text-yellow-400' :
                        'bg-red-900/50 text-red-400'
                    }`}>
                    {blog.difficulty}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-2">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-medium text-blue-400">{blog.category}</span>
                  <span className="text-gray-500">•</span>
                  <span className="text-xs text-gray-400">{blog.readTime}</span>
                </div>

                <h3 className="text-xl font-bold mb-3 text-white transition-colors duration-300">
                  {blog.title}
                </h3>

                <p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors duration-300">
                  {blog.description}
                </p>

                {/* <div className="flex flex-wrap gap-2 mb-4">
                  {blog.tags.map(tag => (
                    <span key={tag} className="bg-gray-800 px-2 py-1 rounded text-xs text-blue-400">
                      #{tag}
                    </span>
                  ))}
                </div> */}

                <Link
                  to={`/blog/${blog.slug}`}
                  className="flex items-center mt-2 text-blue-400 group-hover:text-blue-300 transition-colors duration-300"
                >
                  <span className="mr-2 text-sm font-medium transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">Read more</span>
                  <ArrowUpRight size={16} className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </Link>

                <div className="pointer-events-none absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:w-full transition-all duration-700"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
