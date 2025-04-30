import React from 'react';

const ContactForm = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-7xl container mx-auto px-4">
      <div className="mb-12 flex justify-between items-center">
          <div>
            <h3 className="text-2xl font-normal tracking-widest text-gray-300 uppercase">Contact Me</h3>
            <p className="text-gray-400">
            Want to hire me for a project or just want to say hi? Feel free to reach out! I would love to hear from you.
          </p>
            <div className="w-full h-px bg-gray-700 mt-4"></div>
            
          </div>
        </div>
        <form className="space-y-8">
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-300">Your email</label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-gray-900 border border-gray-800 text-gray-200 text-sm rounded-lg focus:ring-indigo-600 focus:border-indigo-600 block w-full p-2.5"
              placeholder="name@example.com"
              required
            />
          </div>
          <div>
            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-300">Subject</label>
            <input
              type="text"
              id="subject"
              className="block p-3 w-full text-sm text-gray-200 bg-gray-900 rounded-lg border border-gray-800 shadow-sm focus:ring-indigo-600 focus:border-indigo-600"
              placeholder="Let us know how we can help you"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-300">Your message</label>
            <textarea
              id="message"
              rows="6"
              className="block p-2.5 w-full text-sm text-gray-200 bg-gray-900 rounded-lg shadow-sm border border-gray-800 focus:ring-indigo-600 focus:border-indigo-600"
              placeholder="Leave a comment..."
            ></textarea>
          </div>
          <div className="relative inline-flex items-center justify-center group">
    <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-green-400 to-blue-600 group-hover:shadow-lg group-hover:shadow-green-500/50"></div>
    <button
      type="submit"
      className="relative inline-flex items-center justify-center px-8 py-3 text-base font-normal text-white bg-black border border-transparent rounded-full"
    >
      Send Message
    </button>
  </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
