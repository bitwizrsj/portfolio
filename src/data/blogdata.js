import img1 from "../assets/blog1.png";
import img2 from "../assets/blog2.png";
import img3 from "../assets/blog3.png";
import img4 from "../assets/Blog4.png";

const blogs = [
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
  }
];

export default blogs;