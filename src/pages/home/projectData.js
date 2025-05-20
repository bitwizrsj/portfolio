// projectData.js
import p1 from '../../assets/hypernextechnology.png';
import p2 from '../../assets/dashboard.png';
import p3 from '../../assets/health.png';
import p4 from '../../assets/flappy.png'
import p5 from '../../assets/Nike.png';
import xyp from '../../assets/xyp.png';
import sch from '../../assets/sch.png';
import mdschool from '../../assets/mdschool.png';


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
      category: "Start Up"
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
      category: "Services"
    },
    {
      id: 3,
      name: "Healthcare Website",
      description: "Full-Stack Development",
      imageUrl: p3,
      fullDescription: "A healthcare portal for patients and doctors to manage appointments, medical records, and prescription history. Implements HIPAA compliance standards with encrypted data transfer.",
      technologies: ["React", "TypeScript", "AWS", "Node.js", "PostgreSQL"],
      demoLink: "https://dental-five-omega.vercel.app/",
      githubLink: "https://github.com/example/healthcare-portal",
      category: "Commercial"
    },
    {
  id: 4,
  name: "Modern School Website",
  description: "Modern Sleek School Website",
  imageUrl: mdschool,
  fullDescription: "A responsive website for Modern School Website, designed to provide students, parents, and staff with important information such as announcements, class schedules, results, and contact details. The site features modern UI, dark mode support, and is optimized for both desktop and mobile devices.",
  technologies: ["React", "Tailwind CSS", "React Router", "JavaScript"],
  demoLink: "https://modern-school-brown.vercel.app/",
  githubLink: "https://github.com/example/horizon-academy-website",
  category: "School"
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
      category: "Modern Web"
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
      category: "Start Up"
    },
    {
      
  id: 7,
  name: "Flappy Bird Game",
  description: "Game Development",
  imageUrl: p4,
  fullDescription: "A clone of the popular Flappy Bird game built using JavaScript and HTML5 Canvas. Features include responsive design, sound effects, and high score tracking.",
  technologies: ["JavaScript", "HTML5", "CSS3"],
  demoLink: "https://flappy-bird-clone.example.com",
  githubLink: "",
  category: "Games"


    },
    {
  id: 8,
  name: "Horizon Academy Website",
  description: "School Website",
  imageUrl: sch,
  fullDescription: "A responsive website for Horizon Academy, designed to provide students, parents, and staff with important information such as announcements, class schedules, results, and contact details. The site features modern UI, dark mode support, and is optimized for both desktop and mobile devices.",
  technologies: ["React", "Tailwind CSS", "React Router", "JavaScript"],
  demoLink: "https://horizon-academy.example.com",
  githubLink: "https://github.com/example/horizon-academy-website",
  category: "School"
}
  ];
  
  export default projectData;