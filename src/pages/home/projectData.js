// projectData.js
import p1 from '../../assets/hypernextechnology.png';
import p2 from '../../assets/dashboard.png';
import p3 from '../../assets/health.png';
import p4 from '../../assets/flappy.png'
import p5 from '../../assets/Nike.png';
import xyp from '../../assets/xyp.png';


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
      name: "Flappy Bird",
      description: "Game Development",
      imageUrl: p4,
      fullDescription: "A recreation of the popular Flappy Bird game using vanilla JavaScript and HTML Canvas. Features include score tracking, difficulty levels, and mobile-friendly controls.",
      technologies: ["JavaScript", "HTML Canvas", "CSS", "Local Storage"],
      demoLink: "https://flappy-bird-demo.example.com",
      githubLink: "https://github.com/example/flappy-bird",
      category: "Gaming"
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
      name: "Task Management Tool",
      description: "Full-Stack Development",
      imageUrl: "/assets/taskmanager.png",
      fullDescription: "A task management application with features like task categorization, due dates, priority levels, and team collaboration. Includes notification system and progress tracking.",
      technologies: ["React", "Firebase", "Material-UI", "Redux", "React DnD"],
      demoLink: "https://task-manager-demo.example.com",
      githubLink: "https://github.com/example/task-manager",
      category: "Productivity"
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