import react from "../assets/react.png";
import mern from "../assets/mern.png";
import salesforce from "../assets/salesforce.png";
import java from "../assets/java.png";
import nodejs from "../assets/nodejs.png";
import python from "../assets//python.png";
import figma from "../assets/figma.png";
import ai from "../assets/ai.png";

const trainingData = [
    {
        id: "mern",
        title: "Modern Application Development using MERN",
        duration: "60 Days",
        cost: "9000",
        image: mern,
        testId: "5",
        color: "linear-gradient(180deg, #BACDAE, #4A7163)",
        modules: [
            {
                title: "Introduction to Full Stack Development",
                topics: ["Understanding Client-Server Architecture", "What is the MERN Stack?", "Project Planning & Tool Setup"],
            },
            {
                title: "Frontend with React.js",
                topics: ["JSX and Functional Components", "Props, State, and Lifecycle Methods", "React Hooks (useState, useEffect, etc.)", "React Router DOM for Navigation", "Component Styling (CSS Modules, Tailwind CSS)"],
            },
            {
                title: "Backend with Node.js & Express.js",
                topics: ["Introduction to Node.js and npm", "Creating APIs with Express", "Middleware & Routing", "Error Handling & Logging"],
            },
            {
                title: "Database with MongoDB",
                topics: ["NoSQL vs SQL Overview", "MongoDB Atlas Setup", "CRUD Operations", "Mongoose for Schema Modeling", "Data Validation and Relationships"],
            },
            {
                title: "Connecting Frontend with Backend",
                topics: ["HTTP Requests using Axios / Fetch", "Consuming APIs in React", "Managing Responses and Errors"],
            },
            {
                title: "Authentication & Authorization",
                topics: ["User Registration and Login", "JWT (JSON Web Tokens)", "Role-based Access Control", "Secure Password Handling (bcrypt)"],
            },
            {
                title: "Advanced Features",
                topics: ["File Uploads (Multer)", "Realtime Features using Socket.io (optional)", "Pagination & Filtering", "Form Validation with Formik & Yup"],
            },
            {
                title: "State Management in React",
                topics: ["Context API", "Redux Toolkit Basics", "Managing Global State & Async Actions"],
            },
            {
                title: "Testing & Debugging",
                topics: ["Debugging Tools", "Unit Testing (Jest, React Testing Library)", "Postman for API Testing"],
            },
            {
                title: "Deployment & DevOps",
                topics: ["Environment Variables", "Hosting Frontend (Netlify, Vercel)", "Deploying Backend (Render, Railway, or Heroku)", "CI/CD Basics (GitHub Actions)", "Version Control with Git & GitHub"],
            },
        ],
    },
    {
        id: "pwa",
        title: "E-commerce & App Solutions with PWA (JS + React)",
        duration: "60 Days",
        cost: "9000",
        image: react,
        testId: "10",
        color: "linear-gradient(180deg, #5FB9BB, #005777)",
        modules: [
            {
                title: "Introduction to Modern Web Development",
                topics: ["What are Modern Web Apps?", "Introduction to E-commerce Applications", "Introduction to PWAs (Progressive Web Apps)", "Tools & Environment Setup (Node, npm, VS Code, Git)"],
            },
            {
                title: "JavaScript for Modern Web",
                topics: ["ES6+ Features Recap (Arrow functions, async/await, spread/rest, destructuring)", "DOM Manipulation & Events", "Fetch API and Promises", "Form Validation & LocalStorage"],
            },
            {
                title: "React Fundamentals",
                topics: ["React Architecture & Component-based Structure", "Functional Components and JSX", "State & Props", "React Hooks: useState, useEffect, useRef", "Routing with React Router"],
            },
            {
                title: "Building E-commerce Components",
                topics: ["Product Listing & Filtering", "Shopping Cart Implementation", "Product Details Page", "User Authentication (Login/Signup)", "Wishlist & Reviews Features"],
            },
            {
                title: "State Management in React",
                topics: ["Local State vs Global State", "Using Context API", "Intro to Redux (Optional: Redux Toolkit)", "Managing Auth, Cart, and Product States"],
            },
            {
                title: "Backend Integration & APIs",
                topics: ["RESTful API Basics", "Working with a Dummy Backend (JSON-Server / Firebase / Commerce.js)", "Integrating Payment Gateway APIs (e.g., Razorpay/Stripe)", "Securing API Calls & Environment Variables"],
            },
            {
                title: "Progressive Web App (PWA) Features",
                topics: ['What makes an app "Progressive"?', "Service Workers: Offline Functionality", "Web App Manifest File", "Add-to-Home-Screen Capability", "Caching Strategies"],
            },
            {
                title: "Optimizing Performance",
                topics: ["Code Splitting & Lazy Loading", "Image Optimization & Lazy Image Loading", "Lighthouse & Core Web Vitals", "SEO for React Apps (basic principles)"],
            },
            {
                title: "Deployment & Hosting",
                topics: ["Version Control with Git & GitHub", "Hosting with Vercel / Netlify", "Firebase Hosting (for full app + backend if needed)", "Domain setup (optional)"],
            },
        ],
    },
    {
        id: "salesforce",
        title: "Cloud-Based Solutions & Applications with Salesforce",
        duration: "45 Days",
        cost: "6500",
        image: salesforce,
        testId: "7",
        color: "linear-gradient(180deg, #BDDDE4, #69798B)",
        modules: [
            {
                title: "Introduction to Cloud & Salesforce Platform",
                topics: ["Basics of Cloud Computing (IaaS, PaaS, SaaS)", "What is Salesforce? Why Salesforce?", "Salesforce Architecture: Multi-Tenant, Metadata-driven", "Overview of Salesforce Products (Sales, Service, Marketing Cloud, etc.)", "Activity: Setup your Salesforce Developer Account"],
            },
            {
                title: "Salesforce CRM & Data Model",
                topics: ["Understanding CRM Concepts", "Salesforce Standard Objects (Leads, Accounts, Contacts, Opportunities)", "Custom Objects & Fields", "Schema Builder for Visualization", "Project: Create a simple CRM app for managing student applications"],
            },
            {
                title: "User Management & Security",
                topics: ["Users, Roles, Profiles, and Permission Sets", "Org-Wide Defaults (OWD), Role Hierarchy, Sharing Rules", "Login Access Policies & Field-Level Security", "Activity: Configure role-based access to a student management app"],
            },
            {
                title: "UI Customization (Declarative Tools)",
                topics: ["Page Layouts, Record Types, Lightning Pages", "Lightning App Builder", "Compact Layouts & List Views", "Custom Tabs and Apps", "Project: Design a custom UI for a sales tracking app"],
            },
            {
                title: "Business Logic Automation",
                topics: ["Validation Rules", "Workflow Rules (Classic)", "Process Builder (Retiring Soon)", "Flows (Flow Builder) — Modern Automation Tool", "Approval Processes", "Project: Automate lead assignment and approval workflow"],
            },
            {
                title: "Reports & Dashboards",
                topics: ["Creating Tabular, Summary, Matrix Reports", "Report Types and Filters", "Dynamic Dashboards", "Data Visualization and Sharing", "Project: Create a dashboard to monitor sales pipeline"],
            },
            {
                title: "App Development with Salesforce Platform",
                topics: ["Custom App Creation", "Object Relationships: Lookup vs Master-Detail", "Formula Fields & Roll-Up Summary", "AppExchange & Pre-Built Components", "Project: Build a job application tracker as a complete app"],
            },
            {
                title: "Introduction to Apex & Lightning Components (Optional for Developers)",
                topics: ["Basics of Apex Programming (Classes, Triggers)", "Introduction to Lightning Web Components (LWC)", "When to use Code vs Clicks", "Integration Basics (REST API Overview)"],
            },
            {
                title: "Deployment & Environment Management",
                topics: ["Sandboxes, Change Sets, and Metadata Deployment", "Packages & App Publishing", "Backup and Data Migration Tools (Data Loader, Data Import Wizard)"],
            },
        ],
    },
    {
        id: "java",
        title: "Full-Fledged Enterprise Solution using JAVA",
        duration: "45 Days",
        cost: "6500",
        image: java,
        testId: "6",
        color: "linear-gradient(180deg, #72C2F3, #000C6E)",
        modules: [
            {
                title: "Core Java Refresher",
                topics: ["Object-Oriented Programming Concepts", "Java Collections Framework", "Exception Handling & File I/O", "Lambda Expressions & Streams API", "Multithreading & Concurrency Basics"],
            },
            {
                title: "JDBC & Database Connectivity",
                topics: ["Connecting to Databases using JDBC", "Writing SQL Queries from Java", "Connection Pooling", "ORM Introduction (Hibernate/JPA overview)"],
            },
            {
                title: "Java Web Development with Servlets & JSP",
                topics: ["HTTP Protocol Basics", "Servlets Lifecycle & Filters", "JSP with Expression Language (EL) and JSTL", "MVC Pattern using Servlets"],
            },
            {
                title: "Spring Framework & Dependency Injection",
                topics: ["Introduction to Spring Core", "Inversion of Control (IoC) & DI", "Spring Configuration (XML vs Annotation)", "Spring Beans Lifecycle"],
            },
            {
                title: "Spring Boot & RESTful Services",
                topics: ["Introduction to Spring Boot & Auto Configuration", "Building REST APIs using Spring MVC", "Data Access with Spring Data JPA", "Exception Handling & Validation", "Swagger/OpenAPI Documentation"],
            },
            {
                title: "Security & Authentication",
                topics: ["Spring Security Basics", "JWT-Based Authentication", "Role-Based Access Control", "Protecting REST APIs"],
            },
            {
                title: "Microservices Architecture",
                topics: ["Monolith vs Microservices", "Breaking Down a Monolith", "Communication via REST / Feign Clients", "Service Discovery with Eureka", "API Gateway with Spring Cloud Gateway", "Circuit Breaker (Resilience4j)"],
            },
            {
                title: "Testing & Debugging",
                topics: ["Unit Testing with JUnit", "Integration Testing with MockMvc", "Test Containers (optional)", "Logging & Debugging Techniques"],
            },
        ],
    },
    {
        id: "microservices",
        title: "Microservices Development with NodeJS & MongoDB",
        duration: "60 Days",
        cost: "9000",
        image: nodejs,
        testId: "8",
        color: "linear-gradient(180deg, #BACDAE, #4A7163)",
        modules: [
            {
                title: "Introduction to Microservices & Node.js",
                topics: ["What are Microservices?", "Benefits vs Monolithic Architecture", "Setting up Node.js and Express", "Building a Simple REST API", "Understanding Package Management (npm/yarn)"],
            },
            {
                title: "MongoDB with Mongoose",
                topics: ["MongoDB Concepts (Documents, Collections, Indexes)", "CRUD Operations using Mongoose", "MongoDB Schema Design Patterns", "Data Relationships (Embedding vs Referencing)", "Connection Pooling & Error Handling"],
            },
            {
                title: "Microservices Fundamentals",
                topics: ["Decomposing a Monolithic App", "Designing Independent Services", "Creating Services: Auth, Product, and Order", "Service-to-Service REST Communication", "Environment Variables & Service Configurations"],
            },
            {
                title: "Authentication & Authorization",
                topics: ["JWT-Based Authentication", "Protecting Routes and Middleware", "Role-Based Access Control (RBAC)", "Token Validation Between Microservices"],
            },
            {
                title: "API Gateway & Routing",
                topics: ["Why Use an API Gateway?", "Express Gateway / Custom Gateway Setup", "Routing Requests to Services", "Centralized Error Handling & Logging"],
            },
            {
                title: "Asynchronous Communication",
                topics: ["Problems with REST-Only Services", "Event-Driven Architecture Overview", "Integrating Redis Pub/Sub or RabbitMQ", "Broadcasting and Handling Events"],
            },
            {
                title: "Containerization with Docker",
                topics: ["What is Docker? Why Use It?", "Dockerizing Node.js Apps", "Docker Compose for Multi-Container Systems", "Environment Variables & Volume Mounting", "Building Images for Each Service"],
            },
            {
                title: "API Documentation & Testing",
                topics: ["Postman Collections for Testing", "Swagger/OpenAPI Documentation", "Unit Testing with Jest", "Integration Testing with Supertest", "Mocking MongoDB for Tests"],
            },
        ],
    },
    // {
    //     id: 5411897866,
    //     title: "Create Data driven project using Python",
    //     duration: "60 Days",
    //     cost: "9000",
    //     image: python,
    //     color: "linear-gradient(180deg, #5FB9BB, #005777)",
    //     modules: [
    //         {
    //             title: "Python for Data Handling",
    //             topics: ["Recap of Python Basics (lists, dictionaries, loops, functions)", "Working with files (CSV, Excel, JSON)", "List comprehensions and lambda functions", "Error handling and logging"],
    //         },
    //         {
    //             title: "Data Collection & APIs",
    //             topics: ["Web Scraping using BeautifulSoup and requests", "REST APIs: GET/POST Requests, JSON parsing", "Connecting to real-world APIs (e.g., weather, financial, YouTube, news)", "Automating data extraction and saving data locally"],
    //         },
    //         {
    //             title: "Data Cleaning & Processing",
    //             topics: ["Introduction to pandas", "Handling missing data, duplicates", "Data type conversions and formatting", "Feature engineering basics"],
    //         },
    //         {
    //             title: "Exploratory Data Analysis (EDA)",
    //             topics: ["Summary statistics & correlation", "Data visualization with matplotlib and seaborn", "Plot types: line, bar, histogram, heatmap, scatter, boxplot", "Real-world datasets (Iris, Titanic, COVID-19, etc.)"],
    //         },
    //         {
    //             title: "Databases & SQL in Python",
    //             topics: ["Introduction to relational databases", "SQLite and PostgreSQL basics", "Connecting Python with databases using sqlite3 or SQLAlchemy", "Running SQL queries from Python"],
    //         },
    //         {
    //             title: "Dashboarding with Streamlit",
    //             topics: ["Introduction to Streamlit", "Creating interactive web apps for data analysis", "Integrating charts and filters", "Deploying your Streamlit app online (Streamlit Cloud)"],
    //         },
    //         {
    //             title: "Introduction to Data Modeling",
    //             topics: ["Overview of predictive analytics", "Linear regression using scikit-learn", "Model evaluation metrics (RMSE, MAE, R²)", "Using models in Streamlit dashboards"],
    //         },
    //     ],
    // },
    {
        id: 8239925791,
        title: "Frontend - UI/UX, CSS/HTML, Figma",
        duration: "45 Days",
        cost: "6500",
        image: figma,
        testId: "9",
        color: "linear-gradient(180deg, #5FB9BB, #005777)",
        modules: [
            {
                title: "Foundations of UI/UX Design",
                topics: ["What is UI vs UX?", "Design Thinking Process", "User Research & Personas", "Wireframes, Mockups, and Prototypes", "UX Heuristics and Design Best Practices", "Activity: Create a user persona and low-fidelity wireframe on paper or Figma"],
            },
            {
                title: "Getting Started with Figma",
                topics: ["Introduction to Figma Interface & Tools", "Frames, Shapes, Text & Components", "Layout Grids, Constraints, and Auto Layout", "Prototyping & Interactions", "Creating a Design System (colors, fonts, buttons)", "Activity: Design a mobile login page with a simple prototype"],
            },
            {
                title: "HTML Basics – Structure of a Web Page",
                topics: ["HTML Elements, Tags, and Attributes", "Semantic HTML (header, footer, section, article)", "Lists, Tables, Forms, Inputs, Buttons", "Embedding Media (images, videos, iframes)", "Activity: Create a static webpage based on a design"],
            },
            {
                title: "CSS Basics – Styling Web Pages",
                topics: ["Inline, Internal & External CSS", "CSS Selectors, Properties, and Colors", "Fonts, Margins, Padding, Box Model", "Backgrounds, Borders, and Buttons", "Activity: Style a homepage layout using your own color palette"],
            },
            {
                title: "Responsive Design & Layouts",
                topics: ["Flexbox: Concepts, Properties, Examples", "Grid Layout System", "Media Queries for Responsiveness", "Mobile-First vs Desktop-First Design", "Activity: Make a landing page responsive across screen sizes"],
            },
            {
                title: "Design to Code – The Real Workflow",
                topics: ["Exporting Assets from Figma", "Reading Spacing, Fonts, Colors from Figma", "Converting Figma Designs into HTML/CSS", "Using Google Fonts, Font Awesome Icons", "Activity: Convert your Figma login page into a functional webpage"],
            },
            {
                title: "UI/UX Patterns & Best Practices",
                topics: ["Buttons, Forms, Cards, Modals", "Error States, Empty States", "Accessibility Basics (Alt text, Contrast, Labels)", "UX Writing & Microcopy", "Activity: Redesign an existing bad UI with improvements"],
            },
        ],
    },
    // {
    //     id: 1143128002,
    //     title: "Create AI-Powered Content using Generative Models",
    //     duration: "45 Days",
    //     cost: "6500",
    //     image: ai,
    //     color: "linear-gradient(180deg, #72C2F3, #000C6E)",
    // },
];

export default trainingData;
