import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from './Hero';
import WhyChooseMe from './WhyChooseMe';
import { Brands } from './Brands'; // ✅ Notice the { Brands }
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
        }, 100);
      }
    }
  }, [location]);

  return (
    <>
      <Hero />
      {/* <WhyChooseMe /> */}
      <Brands />
      <ProjectsSection />
      <BlogSection />
      <ContactForm />
    </>
  );
};