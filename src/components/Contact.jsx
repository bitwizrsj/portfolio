import React from 'react';

const ContactForm = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-7xl container mx-auto px-4">
        <div className="mb-12">
          <div className="w-32 h-1 bg-indigo-600 mb-6"></div>
          <h2 className="text-4xl font-bold text-cream mb-4">Contact Us</h2>
          <p className="text-gray-400">
            Want to hire me for a project or just want to say hi? Feel free to reach out! I would love to hear from you.
          </p>
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
          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-300"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
