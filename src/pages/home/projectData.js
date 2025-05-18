// projectData.js
import p1 from '../../assets/hypernextechnology.png';
import p2 from '../../assets/dashboard.png';
import p3 from '../../assets/health.png';
import p4 from '../../assets/flappy.png'
import p5 from '../../assets/Nike.png';
import xyp from '../../assets/xyp.png';
import sch from '../../assets/sch.png';


const projectData = [
    {
      id: 1,
      name: "Hypernex Technology",
      description: "Full-Stack Development",
      imageUrl: p1,
      fullDescription: "A comprehensive technology solution using React frontend and Node.js backend with MongoDB database. Features included user authentication, dashboard analytics, and responsive design.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Redux"],
      demoLink: "https://hypernextechnologies.com/",
      githubLink: "https://github.com/example/hypernex",
      category: "Web Development"
    },
    {
      id: 2,
      name: "School Management System",
      description: "Full-Stack Development",
      imageUrl: p2,
      fullDescription: "A comprehensive school management system for tracking student attendance, grades, and faculty information. Features include role-based access control, reporting tools, and parent communication portal.",
      technologies: ["React", "Firebase", "Chart.js", "Node.js"],
      demoLink: "https://s-square-psi.vercel.app/",
      githubLink: "https://github.com/example/school-management",
      category: "Web Development"
    },
    {
      id: 3,
      name: "Healthcare Portal",
      description: "Full-Stack Development",
      imageUrl: p3,
      fullDescription: "A healthcare portal for patients and doctors to manage appointments, medical records, and prescription history. Implements HIPAA compliance standards with encrypted data transfer.",
      technologies: ["React", "TypeScript", "AWS", "Node.js", "PostgreSQL"],
      demoLink: "https://dental-five-omega.vercel.app/",
      githubLink: "https://github.com/example/healthcare-portal",
      category: "Healthcare"
    },
    {
  id: 4,
  name: "Horizon Academy Website",
  description: "School Website",
  imageUrl: sch,
  fullDescription: "A responsive website for Horizon Academy, designed to provide students, parents, and staff with important information such as announcements, class schedules, results, and contact details. The site features modern UI, dark mode support, and is optimized for both desktop and mobile devices.",
  technologies: ["React", "Tailwind CSS", "React Router", "JavaScript"],
  demoLink: "https://horizon-academy.example.com",
  githubLink: "https://github.com/example/horizon-academy-website",
  category: "Education"
},
    {
      id: 5,
      name: "Nike Reimagined",
      description: "Frontend Development",
      imageUrl: p5,
      fullDescription: "A fully functional e-commerce platform with product listings, shopping cart, user authentication, payment processing, and order tracking. Responsive design for all devices.",
      technologies: ["React"],
      demoLink: "https://ecommerce-demo.example.com",
      githubLink: "https://github.com/example/ecommerce",
      category: "Web Development"
    },
    {
      id: 6,
      name: "Xyphramin",
      description: "Fullstack Development",
      imageUrl: xyp,
      fullDescription: "A weather forecast application that provides real-time weather data and 7-day forecasts for any location. Features include geolocation, animated weather icons, and metric/imperial unit switching.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Redux"],
      demoLink: "https://xyphramin.com/",
      githubLink: "https://github.com/example/weather-app",
      category: "Web Development"
    },
    {
      
  id: 7,
  name: "Horizon Academy Website",
  description: "School Website",
  imageUrl: p4,
  fullDescription: "A responsive website for Horizon Academy, designed to provide students, parents, and staff with important information such as announcements, class schedules, results, and contact details. The site features modern UI, dark mode support, and is optimized for both desktop and mobile devices.",
  technologies: ["React", "Tailwind CSS", "React Router", "JavaScript"],
  demoLink: "https://horizon-academy.example.com",
  githubLink: "https://github.com/example/horizon-academy-website",
  category: "Education"


    },
    {
      id: 8,
      name: "Portfolio Website Template",
      description: "Frontend Development",
      imageUrl: "/assets/portfolio.png",
      fullDescription: "A customizable portfolio website template for developers and designers. Features smooth animations, responsive design, dark/light mode, and easily configurable sections.",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Next.js"],
      demoLink: "https://portfolio-demo.example.com",
      githubLink: "https://github.com/example/portfolio-template",
      category: "Web Development"
    }
  ];
  
  export default projectData;