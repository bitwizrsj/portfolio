import { useParams } from 'react-router-dom';
import blogs from '../data/blogdata';

const BlogPost = () => {
  const { slug } = useParams();
  const blog = blogs.find(blog => blog.slug === slug);

  if (!blog) {
    return (
      <section className="py-20 bg-gradient-to-b from-black to-gray-900 text-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">404</h1>
          <p className="text-gray-400">Blog post not found</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900 text-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-12">
          <div className="w-32 h-1 bg-indigo-600 mb-6"></div>

          <div className="flex flex-wrap items-center gap-4 mb-4">
            <span className="text-sm font-medium text-blue-400 px-3 py-1 bg-gray-800 rounded-full">
              {blog.category}
            </span>
            <span className="text-gray-400 text-sm">•</span>
            <span className="text-gray-400 text-sm">{blog.readTime}</span>
            <span className="text-gray-400 text-sm">•</span>
            <span className={`text-sm px-3 py-1 rounded-full ${
              blog.difficulty === 'Beginner' ? 'bg-green-900 text-green-400' :
              blog.difficulty === 'Intermediate' ? 'bg-yellow-900 text-yellow-400' :
              'bg-red-900 text-red-400'
            }`}>
              {blog.difficulty}
            </span>
          </div>

          <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
          <div className="flex items-center text-gray-400">
            <span className="mr-4">By {blog.author}</span>
            <span>{new Date(blog.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
          </div>
        </div>

        {/* Featured Image */}
        <div className="mb-8">
          <img 
            src={blog.image} 
            alt={blog.title}
            className="w-full h-64 object-cover rounded-xl"
          />
        </div>

        {/* Blog Content */}
        <article 
          className="prose prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />

        {/* Tags */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-800 mt-12">
          <h3 className="text-lg font-semibold mb-4 text-blue-400">Tags:</h3>
          <div className="flex flex-wrap gap-2">
            {blog.tags.map(tag => (
              <span key={tag} className="bg-gray-800 px-3 py-1 rounded-full text-sm text-blue-400">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPost;
