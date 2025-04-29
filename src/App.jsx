// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlogSection from './components/Blogs';
import Hero from './components/Hero';
import ProjectsSection from './components/Projects';
import BlogPost from './components/BlogPost';
import Navbar from './components/Navbar';
import ContactForm from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <div> 
    <Navbar />
    
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <ProjectsSection />
            <BlogSection />
            <ContactForm />
            <Footer />
          </>
        } />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
    </Router>
    </div>
    </>
    
  );
}

export default App;