import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from './Hero';
import ProjectsSection from './Projects';
import BlogSection from './Blogs';
import ContactForm from './Contact';

export default function Home () {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollToContact) {
      const el = document.getElementById('contact');
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100); // slight delay to ensure DOM is ready
      }
    }
  }, [location]);

  return (
    <>
      <Hero />
      <ProjectsSection />
      <BlogSection />
      <ContactForm />
    </>
  );
};
