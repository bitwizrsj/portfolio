// blogData.js
import img1 from "../assets/blog1.png";
import img2 from "../assets/blog2.png";
import img3 from "../assets/blog3.png";
import img4 from "../assets/Blog4.png";
// import img5 from "../assets/blog5.png"; // You'll need to add this image to your assets
import img6 from "../assets/Blog6.png";

const blogData = [
  {
    id: 1,
    title: "Building a Full Stack Application with React, Node.js, and MongoDB",
    description: "A comprehensive step-by-step guide to creating a modern web application from scratch using the MERN stack.",
    category: "Full Stack",
    readTime: "45 min read",
    difficulty: "Intermediate",
    slug: "building-full-stack-mern-app",
    image: img1,
    content: `
      <h2>Introduction to MERN Stack</h2>
      <p>The MERN stack (MongoDB, Express, React, and Node.js) is one of the most popular stacks for building full-stack JavaScript applications. In this guide, we'll walk through building a complete application from scratch.</p>

      <h3>Setting Up the Backend</h3>
      <p>First, let's initialize our Node.js server:</p>
      <pre style="background-color: #111827; color: #ffffff; padding: 1rem; border-radius: 0.5rem;"><code>npm init -y
npm install express mongoose cors dotenv</code></pre>

      <p>Create a basic Express server:</p>
      <pre style="background-color: #111827; color: #ffffff; padding: 1rem; border-radius: 0.5rem;"><code>const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error(err));

app.listen(3000, () => {
  console.log('Server running on port 3000');
});</code></pre>

      <h3>Building the Frontend with React</h3>
      <p>Create a new React application:</p>
      <pre style="background-color: #111827; color: #ffffff; padding: 1rem; border-radius: 0.5rem;"><code>npx create-react-app client
cd client
npm install axios react-router-dom</code></pre>

      <p>Connect your React app to the backend:</p>
      <pre style="background-color: #111827; color: #ffffff; padding: 1rem; border-radius: 0.5rem;"><code>import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api'
});</code></pre>

      <h3>Deployment Considerations</h3>
      <p>When deploying your MERN application:</p>
      <ul>
        <li>Use environment variables for configuration</li>
        <li>Implement proper error handling</li>
        <li>Set up CORS correctly</li>
        <li>Consider using JWT for authentication</li>
      </ul>
    `,
    date: "2023-08-15",
    author: "Alex Fullstack",
    tags: ["mern", "react", "nodejs", "mongodb", "fullstack"]
  },
  {
    id: 2,
    title: "How to Kill a Process Running on a Specific Port in Windows",
    description: "Step-by-step guide to freeing up ports by terminating processes in Windows using command line tools.",
    category: "System Administration",
    readTime: "5 min read",
    difficulty: "Beginner",
    slug: "kill-process-on-port-windows",
    image: img2,
    content: `
      <h2>Freeing Up Occupied Ports in Windows</h2>
      <p>When developing applications, you might encounter the "port already in use" error. Here's how to solve it on Windows:</p>

      <h3>Step 1: Find the Process Using the Port</h3>
      <p>Open Command Prompt as Administrator and run:</p>
      <pre style="background-color: #111827; color: #ffffff; padding: 1rem; border-radius: 0.5rem;"><code>netstat -ano | findstr :YOUR_PORT_NUMBER</code></pre>
      <p>Replace YOUR_PORT_NUMBER with the actual port (e.g., 3000, 8080). This will show you the PID (Process ID) using the port.</p>

      <h3>Step 2: Terminate the Process</h3>
      <p>Once you have the PID, terminate the process with:</p>
      <pre style="background-color: #111827; color: #ffffff; padding: 1rem; border-radius: 0.5rem;"><code>taskkill /PID YOUR_PID /F</code></pre>
      <p>Replace YOUR_PID with the actual Process ID from the previous step.</p>

      <h3>Alternative: Using PowerShell</h3>
      <p>You can also use PowerShell for a more streamlined approach:</p>
      <pre style="background-color: #111827; color: #ffffff; padding: 1rem; border-radius: 0.5rem;"><code>Get-Process -Id (Get-NetTCPConnection -LocalPort YOUR_PORT).OwningProcess | Stop-Process -Force</code></pre>

      <h3>Preventing Port Conflicts</h3>
      <ul>
        <li>Always properly shut down your development servers</li>
        <li>Use different ports for different environments</li>
        <li>Consider using port forwarding if needed</li>
      </ul>
    `,
    date: "2023-09-10",
    author: "Windows Wizard",
    tags: ["windows", "networking", "development", "command-line"]
  },
  {
    id: 3,
    title: "Mastering CSS Grid: Modern Layout Techniques",
    description: "Learn how to create complex, responsive layouts with CSS Grid through practical examples and best practices.",
    category: "Frontend Development",
    readTime: "20 min read",
    difficulty: "Intermediate",
    slug: "mastering-css-grid",
    image: img3,
    content: `
      <h2>The Power of CSS Grid</h2>
      <p>CSS Grid has revolutionized how we create layouts on the web. Unlike Flexbox which is one-dimensional, Grid allows for precise two-dimensional control.</p>

      <h3>Basic Grid Setup</h3>
      <p>Here's how to define a simple grid:</p>
      <pre style="background-color: #111827; color: #ffffff; padding: 1rem; border-radius: 0.5rem;"><code>.container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-gap: 20px;
}</code></pre>

      <h3>Responsive Grid Patterns</h3>
      <p>Create responsive grids without media queries:</p>
      <pre style="background-color: #111827; color: #ffffff; padding: 1rem; border-radius: 0.5rem;"><code>.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}</code></pre>

      <h3>Advanced Grid Techniques</h3>
      <p>Named grid areas make layouts more maintainable:</p>
      <pre style="background-color: #111827; color: #ffffff; padding: 1rem; border-radius: 0.5rem;"><code>.container {
  display: grid;
  grid-template-areas:
    "header header header"
    "sidebar main main"
    "footer footer footer";
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }</code></pre>

      <h3>Browser Support and Fallbacks</h3>
      <p>While CSS Grid is widely supported (95%+), consider progressive enhancement for older browsers:</p>
      <ul>
        <li>Use @supports feature queries</li>
        <li>Provide Flexbox fallbacks where needed</li>
        <li>Consider using CSS Grid polyfills for critical layouts</li>
      </ul>
    `,
    date: "2023-10-05",
    author: "CSS Artist",
    tags: ["css", "frontend", "layout", "responsive-design"]
  },
  {
    id: 4,
    title: "Python for Data Analysis: Pandas Basics You Need to Know",
    description: "Essential Pandas operations and techniques for effective data manipulation and analysis in Python.",
    category: "Data Science",
    readTime: "30 min read",
    difficulty: "Beginner",
    slug: "python-pandas-basics",
    image: img4,
    content: `
      <h2>Introduction to Pandas</h2>
      <p>Pandas is the most popular Python library for data manipulation and analysis. It provides powerful data structures and tools for working with structured data.</p>

      <h3>Core Data Structures</h3>
      <p>Pandas has two primary data structures:</p>
      <ul>
        <li><strong>Series:</strong> One-dimensional labeled array</li>
        <li><strong>DataFrame:</strong> Two-dimensional labeled data structure (like a spreadsheet)</li>
      </ul>

      <h3>Essential Operations</h3>
      <p>Basic DataFrame operations:</p>
      <pre style="background-color: #111827; color: #ffffff; padding: 1rem; border-radius: 0.5rem;"><code>import pandas as pd

# Read CSV file
df = pd.read_csv('data.csv')

# View first 5 rows
print(df.head())

# Basic statistics
print(df.describe())

# Filter data
filtered = df[df['column'] > 100]</code></pre>

      <h3>Data Cleaning Techniques</h3>
      <p>Common data cleaning operations:</p>
      <pre style="background-color: #111827; color: #ffffff; padding: 1rem; border-radius: 0.5rem;"><code># Handle missing values
df.fillna(0, inplace=True)

# Remove duplicates
df.drop_duplicates(inplace=True)

# Convert data types
df['date_column'] = pd.to_datetime(df['date_column'])</code></pre>

      <h3>Grouping and Aggregation</h3>
      <p>Powerful data summarization:</p>
      <pre style="background-color: #111827; color: #ffffff; padding: 1rem; border-radius: 0.5rem;"><code># Group by category
grouped = df.groupby('category')

# Multiple aggregations
result = grouped.agg({
  'sales': ['sum', 'mean', 'count'],
  'profit': 'median'
})</code></pre>

      <h3>Performance Tips</h3>
      <ul>
        <li>Use vectorized operations instead of loops</li>
        <li>Consider dtype optimization for large datasets</li>
        <li>Use .loc[] and .iloc[] for explicit indexing</li>
      </ul>
    `,
    date: "2023-11-20",
    author: "Data Pythonista",
    tags: ["python", "pandas", "data-science", "data-analysis"]
  },
  {
    id: 5,
    title: "Modern Authentication Strategies for Web Applications",
    description: "Learn about OAuth, JWT, session management, and other secure authentication methods for your web applications.",
    category: "Security",
    readTime: "25 min read",
    difficulty: "Advanced",
    slug: "modern-web-authentication",
    image: "img5",
    content: `
      <h2>Authentication in Modern Web Applications</h2>
      <p>Secure authentication is critical for protecting user data and preventing unauthorized access. This guide explores current best practices.</p>

      <h3>JWT Authentication</h3>
      <p>JSON Web Tokens provide a stateless authentication mechanism:</p>
      <pre style="background-color: #111827; color: #ffffff; padding: 1rem; border-radius: 0.5rem;"><code>const jwt = require('jsonwebtoken');

// Creating a token
const token = jwt.sign(
  { userId: user.id },
  process.env.JWT_SECRET,
  { expiresIn: '1h' }
);

// Verifying a token
const decoded = jwt.verify(token, process.env.JWT_SECRET);</code></pre>

      <h3>OAuth 2.0 Implementation</h3>
      <p>Implementing social login with OAuth 2.0:</p>
      <pre style="background-color: #111827; color: #ffffff; padding: 1rem; border-radius: 0.5rem;"><code>// Using Passport.js with Google OAuth
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    // Handle user authentication
  }
));</code></pre>

      <h3>Security Best Practices</h3>
      <ul>
        <li>Implement HTTPS everywhere</li>
        <li>Use HTTP-only cookies for session tokens</li>
        <li>Implement CSRF protection</li>
        <li>Apply proper password hashing with bcrypt or Argon2</li>
        <li>Use multi-factor authentication for sensitive operations</li>
      </ul>

      <h3>Common Pitfalls</h3>
      <p>Authentication vulnerabilities to avoid:</p>
      <ul>
        <li>Client-side token storage in localStorage</li>
        <li>Using weak JWT secrets</li>
        <li>Missing token expiration</li>
        <li>Improper session invalidation on logout</li>
        <li>Insecure direct object references</li>
      </ul>
    `,
    date: "2023-12-15",
    author: "Security Specialist",
    tags: ["security", "authentication", "jwt", "oauth", "web-development"]
  },
  {
    id: 6,
    title: "Why # in Anchor Tags Doesn’t Work in SPAs — And How to Fix It",
    description: "Learn why traditional anchor links like #contact fail in Single Page Applications and how to handle scroll-to-section navigation the right way using React Router.",
    category: "Frontend",
    readTime: "12 min read",
    difficulty: "Intermediate",
    slug: "spa-anchor-tag-issue",
    image: img6,
    content: `
      <h2>Why # in Anchor Tags Doesn’t Work in SPAs — And How to Fix It</h2>
      <p>In traditional websites, anchor links like <code>&lt;a href="#section"&gt;</code> are a reliable way to navigate to specific sections of the page. But in Single Page Applications (SPAs), especially those built with React, Vue, or Angular, this method often breaks. Let's explore why and how to fix it.</p>
  
      <h3>The Problem</h3>
      <p>In SPAs, your application uses client-side routing. So when you’re on <code>/blogs</code> and click <code>&lt;a href="#contact"&gt;</code>, nothing happens. That’s because the <code>id="contact"</code> element only exists on the home page (<code>/</code>) — not on <code>/blogs</code>.</p>
  
      <h3>The Solution</h3>
      <p>You need a two-step process:</p>
      <ol>
        <li>Check if you're already on the home route</li>
        <li>If not, navigate to the home page, and once loaded, scroll to the <code>#contact</code> section</li>
      </ol>
  
      <h3>Step 1: Set Up the Scroll Trigger</h3>
      <pre style="background-color: #111827; color: #ffffff; padding: 1rem; border-radius: 0.5rem;">
  <code>import { useNavigate, useLocation } from 'react-router-dom';
  
  function handleContactClick() {
    if (location.pathname === '/') {
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/', { state: { scrollToContact: true } });
    }
  }</code>
      </pre>
  
      <h3>Step 2: Scroll After Navigation</h3>
      <p>In the home page component, detect if the <code>scrollToContact</code> flag is set, and if so, scroll after the component mounts:</p>
      <pre style="background-color: #111827; color: #ffffff; padding: 1rem; border-radius: 0.5rem;">
  <code>import { useEffect } from 'react';
  import { useLocation } from 'react-router-dom';
  
  function HomePage() {
    const location = useLocation();
  
    useEffect(() => {
      if (location.state?.scrollToContact) {
        const el = document.getElementById('contact');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, [location]);
  
    return (
      &lt;section id="contact"&gt;
        {/* Contact content */}
      &lt;/section&gt;
    );
  }</code>
      </pre>
  
      <h3>Optional: Clear Scroll Intent</h3>
      <p>To prevent it from triggering again, you can replace the route after the scroll:</p>
      <pre style="background-color: #111827; color: #ffffff; padding: 1rem; border-radius: 0.5rem;">
  <code>navigate('/', { state: { scrollToContact: true }, replace: true });</code>
      </pre>
  
      <h3>Bonus: Using Query Params Instead of State</h3>
      <p>You can also use URL query parameters like <code>?scroll=contact</code> and scroll based on that. This makes your scroll behavior shareable via URL.</p>
  
      <h3>Summary</h3>
      <ul>
        <li>Anchor links fail across routes in SPAs because the target DOM elements don’t exist</li>
        <li>Use React Router's <code>navigate()</code> and pass scroll intent via state or query</li>
        <li>Scroll programmatically after the correct page loads</li>
      </ul>
      <p>This technique ensures a smooth UX and keeps your SPA behaving like a traditional site — without the reloads.</p>
    `,
    date: "2025-04-30",
    author: "Frontend Dev",
    tags: ["react", "spa", "scroll", "routing", "frontend"]
  },
  {
    id: 7,
    title: "React Router Not Working on Vercel? Here's the Fix",
    description: "Deployed your React app to Vercel but client-side routing breaks on refresh? Learn why it happens and how to solve it with a simple rewrite rule.",
    category: "Frontend",
    readTime: "10 min read",
    difficulty: "Beginner",
    slug: "react-router-vercel-routing-fix",
    image: "img7",
    content: `
      <h2>React Router Not Working on Vercel? Here's the Fix</h2>
      <p>Deploying your React app to <a href="https://vercel.com" target="_blank">Vercel</a> is usually seamless — until routing breaks. You click a link in your app, it works. But refresh the page or go directly to a URL like <code>/about</code>, and you get a 404 error.</p>
  
      <h3>🧭 Why It Happens</h3>
      <p>React Router uses <strong>client-side routing</strong>, but Vercel is a static file host unless you're using Next.js. So when you navigate to <code>/about</code>, Vercel tries to serve a physical <code>about.html</code> file. If it doesn’t exist, you get a 404.</p>
  
      <h3>🛠️ The Fix: Serve <code>index.html</code> for All Routes</h3>
      <p>You need to tell Vercel to redirect all unknown paths to <code>index.html</code>, so React Router can take over and render the correct route in the browser.</p>
  
      <h3>✅ Step 1: Create a <code>vercel.json</code> File</h3>
      <pre style="background-color: #111827; color: #ffffff; padding: 1rem; border-radius: 0.5rem;">
  <code>{
    "rewrites": [
      { "source": "/(.*)", "destination": "/index.html" }
    ]
  }</code>
      </pre>
  
      <h3>✅ Step 2: Commit and Push</h3>
      <p>Place <code>vercel.json</code> at the root of your project and push it to your Git repo. Vercel will auto-deploy or you can trigger a manual deployment.</p>
  
      <h3>✅ Step 3: Use <code>BrowserRouter</code> in React</h3>
      <p>Make sure you’re using <code>BrowserRouter</code> in your app:</p>
      <pre style="background-color: #111827; color: #ffffff; padding: 1rem; border-radius: 0.5rem;">
  <code>import { BrowserRouter, Routes, Route } from 'react-router-dom';
  
  function App() {
    return (
      &lt;BrowserRouter&gt;
        &lt;Routes&gt;
          &lt;Route path="/" element={<Home />} /&gt;
          &lt;Route path="/about" element={<About />} /&gt;
        &lt;/Routes&gt;
      &lt;/BrowserRouter&gt;
    );
  }</code>
      </pre>
  
      <h3>🧩 Folder Structure Example</h3>
      <p>Your project should look like this:</p>
      <pre style="background-color: #111827; color: #ffffff; padding: 1rem; border-radius: 0.5rem;">
  <code>my-react-app/
  ├── public/
  │   └── index.html
  ├── src/
  │   └── App.js
  ├── vercel.json  ← ✅ this file!
  └── package.json</code>
      </pre>
  
      <h3>🎉 You're All Set</h3>
      <p>Once you've added <code>vercel.json</code>, your React app will handle routing properly — no more 404s when refreshing or sharing deep links!</p>
  
      <h3>📌 Summary</h3>
      <ul>
        <li>Vercel serves static files by default — direct URLs break client-side routing.</li>
        <li>Use a <code>vercel.json</code> rewrite rule to route all requests to <code>index.html</code>.</li>
        <li>Make sure you're using <code>BrowserRouter</code> and not <code>HashRouter</code>.</li>
      </ul>
  
      <p>With this setup, your React app will behave like a true SPA and work perfectly on Vercel.</p>
    `,
    date: "2025-04-30",
    author: "Frontend Dev",
    tags: ["react", "routing", "vercel", "deployment", "frontend"]
  }
  
  
];

export default blogData;