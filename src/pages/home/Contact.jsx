import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
  e.preventDefault();

  // Dynamically set timestamp in hidden field
  const timeInput = form.current.querySelector('input[name="time"]');
  if (timeInput) {
    timeInput.value = new Date().toLocaleString();
  }

  emailjs
    .sendForm('service_z3d0y5b', 'template_swyebdj', form.current, 'esuu6Y3PcgfenR7vK')
    .then(
      (result) => {
        console.log(result.text);
        alert('Message sent successfully!');
        e.target.reset();
      },
      (error) => {
        console.error('EmailJS Error:', error);
        alert('Something went wrong. Please try again.');
      }
    );
};


  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-7xl container mx-auto px-4">
        <div className="mb-12 flex justify-between items-center">
          <div>
            <h3 className="text-2xl font-normal tracking-widest text-gray-300 uppercase">Contact Me</h3>
            <p className="text-gray-400">
              Want to hire me for a project or just want to say hi? Feel free to reach out!
            </p>
            <div className="w-full h-px bg-gray-700 mt-4"></div>
          </div>
        </div>
        <form ref={form} onSubmit={sendEmail} className="space-y-8">
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-300">Your name</label>
            <input
              type="text"
              name="name"
              id="name"
              className="shadow-sm bg-gray-900 border border-gray-800 text-gray-200 text-sm rounded-lg block w-full p-2.5"
              placeholder="John Doe"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-300">Your email</label>
            <input
              type="email"
              name="user_email"
              id="email"
              className="shadow-sm bg-gray-900 border border-gray-800 text-gray-200 text-sm rounded-lg block w-full p-2.5"
              placeholder="name@example.com"
              required
            />
          </div>
          <div>
            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-300">Subject</label>
            <input
              type="text"
              name="subject"
              id="subject"
              className="block p-3 w-full text-sm text-gray-200 bg-gray-900 rounded-lg border border-gray-800 shadow-sm"
              placeholder="Let us know how we can help you"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-300">Your message</label>
            <textarea
              id="message"
              name="message"
              rows="6"
              className="block p-2.5 w-full text-sm text-gray-200 bg-gray-900 rounded-lg shadow-sm border border-gray-800"
              placeholder="Leave a comment..."
              required
            ></textarea>
          </div>

          {/* Hidden time input — this will get overwritten in JS anyway */}
          <input type="hidden" name="time" />

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
