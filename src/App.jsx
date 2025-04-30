// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlogSection from './pages/home/Blogs';
import Home from './pages/home/Home';
import ProjectsSection from './pages/home/Projects';
import BlogPost from './components/BlogPost';
import Navbar from './components/Navbar';
import ContactForm from './pages/home/Contact';
import Footer from './components/Footer';
import AllProjects from './components/AllProjects.jsx';
import ProjectDetails from './components/ProjectDetails.jsx';
import AllBlogs from './pages/AllBlogs.jsx';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    if (window.location.hash === '#contact') {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [window.location.hash]);
  return (<Router>
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/projects" element={<AllProjects />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
        <Route path="/blogs" element={<AllBlogs />} />
      </Routes>
      <Footer />
    </div>
  </Router>
);
}

export default App;