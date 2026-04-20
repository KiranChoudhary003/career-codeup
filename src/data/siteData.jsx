import { CheckSquare, Code, Database, Facebook, FileText, Instagram, Linkedin, ShoppingCart, Upload, Users2, Youtube } from "lucide-react";
import blackLogo from "../assets/full-logo-black.webp";
import whiteLogo from "../assets/full-logo-white.webp";
import academy from "../assets/academy.jpg";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const logo = whiteLogo;
const services = [
    { title: "Web Design", href: "/webdesign" },
    { title: "UI/UX", href: "/uiux" },
    { title: "SEO", href: "/seo" },
];

const siteData = {
    navbar: {
        logo,
        links: {
            "/": [
                { title: "Academy", href: "/academy" },
                { title: "Career", href: "#career" },
                { title: "Contact", href: "/contact" },
            ],
            _: [],
        },
        button: { title: "Contact", href: "#contact" },
    },
    // cover: {
    //     title: "Fast, scalable, and user-first solutions for modern businesses",
    //     description: "We build fast, reliable, and user-friendly digital experiences from PWA apps to full e-commerce platforms.",
    //     scrollingProjects: [
    //         // { title: "Sm Financiers", href: "https://smfinanciers.com/" },
    //         { title: "Safari Hotel", href: "https://safari.codeup.in/" },
    //         { title: "Jeet Caterers", href: "http://jeetcaterers.com/" },
    //         // { title: "Sm Financiers", href: "https://smfinanciers.com/" },
    //         { title: "Safari Hotel", href: "https://safari.codeup.in/" },
    //         { title: "Jeet Caterers", href: "http://jeetcaterers.com/" },
    //     ],
    // },
    // about: {
    //     image: "https://codeup.in/icon.png",
    //     title: "We are design-first creative studio",
    //     subTitle: "Who we are",
    //     description: [
    //         "We believe in the power of purposeful design to solve real business challenges. Every line, color, and interaction is crafted with intent, creating experiences that connect and drive impact. Our mission is to turn ideas into strategic, visual solutions that resonate deeply and support our clients' goals.",
    //         "For us, design isn't just a visual; it's an influential tool that helps brands achieve lasting success.",
    //     ],
    // },
    // aceAcademy: {
    //     image: academy,
    //     title: "Codeup Ace Academy",
    //     subTitle: "Education Program",
    //     description: ["A comprehensive mentorship program designed to transform beginners into job-ready developers. Learn from industry experts with hands-on projects and personalized guidance."],
    //     duration: "3.5 Months",
    //     features: [
    //         { title: "Core Programming Fundamentals", description: "Master the essentials of modern programming" },
    //         { title: "Student Training & Mentorship", description: "One-on-one guidance from industry experts" },
    //         { title: "Project-Based Learning", description: "Build real-world applications from scratch" },
    //         { title: "Career Development", description: "Resume building and interview preparation" },
    //     ],
    // },
    // creator: {
    //     image: "https://codeup.in/icon.png",
    //     title: "Oneup for Creators",
    //     subTitle: "Creator Platform",
    //     description: ["Empower educators and content creators with powerful tools to build, share, and monetize their knowledge"],
    //     features: [
    //         {
    //             icon: Upload,
    //             title: "Video Uploads",
    //             description: "Upload high-quality educational content with seamless streaming",
    //         },
    //         {
    //             icon: FileText,
    //             title: "Objective Test Builder",
    //             description: "Create MCQs, true/false, and multiple select questions easily",
    //         },
    //         {
    //             icon: CheckSquare,
    //             title: "Subjective Test Builder",
    //             description: "Design essay-type and descriptive assessments with AI grading",
    //         },
    //         {
    //             icon: Users2,
    //             title: "Student Management",
    //             description: "Track progress, engagement, and performance analytics",
    //         },
    //     ],
    // },
    // oneup: {
    //     image: "https://codeup.in/icon.png",
    //     title: "Join Oneup, Become a Creator",
    //     subTitle: "Oneup",
    //     description: [
    //         "Oneup is a comprehensive platform designed for creating and delivering courses and assessments. It enables educators and trainers to share knowledge effectively by providing tools to develop structured learning content, conduct tests, and evaluate student performance in an organized and efficient manner.",
    //     ],
    // },
    // projects: {
    //     title: "End-to-end development solutions crafted with precision and passion",
    //     subTitle: "Our Services",
    //     projects: [
    //         {
    //             title: "E-commerce Development",
    //             description: "Build scalable online stores with seamless payment integrations and optimized user experiences.",
    //             techStack: ["Custom storefronts", "Payment gateways", "Inventory systems"],
    //             icon: ShoppingCart,
    //             image: "https://codeup.in/icon.png",
    //             href: "https://codeup.in/",
    //         },
    //         {
    //             title: "Figma Wireframing",
    //             description: "Transform ideas into stunning visual designs with pixel-perfect wireframes and prototypes.",
    //             techStack: ["UI/UX design", "Interactive prototypes", "Design systems"],
    //             icon: Figma,
    //             image: "https://codeup.in/icon.png",
    //             href: "https://codeup.in/",
    //         },
    //         {
    //             title: "Backend Database Handling",
    //             description: "Robust database architecture that scales with your business needs and ensures data integrity.",
    //             techStack: ["SQL & NoSQL", "API development", "Data security"],
    //             icon: Database,
    //             image: "https://codeup.in/icon.png",
    //             href: "https://codeup.in/",
    //         },
    //         {
    //             title: "Frontend Development",
    //             description: "Create responsive, performant interfaces using modern frameworks and best practices.",
    //             techStack: ["React & Next.js", "Tailwind CSS", "Animations"],
    //             icon: Code,
    //             image: "https://codeup.in/icon.png",
    //             href: "https://codeup.in/",
    //         },
    //     ],
    // },
    // services: {
    //     title: "We create solutions but most importantly we identify problems.",
    //     subTitle: "Our services",
    //     services,
    // },
    // contact: {
    //     title: "Ready to take next step with us?",
    //     subTitle: "We're explorers",
    //     services,
    // },
    footer: {
        // company: [
        //     { title: "About", href: "#about" },
        //     // { title: "Services", href: "#services" },
        //     // { title: "Projects", href: "#projects" },
        // ],
        // services,
        socials: [
            // { icon: <Linkedin />, href: "https://www.linkedin.com/company/codeup-in/" },
            // { icon: <Youtube />, href: "https://www.youtube.com/@codeup-in" },
            // { icon: <Facebook />, href: "https://www.facebook.com/codeup.in" },
            // { icon: <Instagram />, href: "https://www.instagram.com/codeup.in" },
            { icon: <FaLinkedin />, href: "https://www.linkedin.com/company/codeup-in/" },
            { icon: <FaYoutube />, href: "https://www.youtube.com/@codeup-in" },
            { icon: <FaFacebook />, href: "https://www.facebook.com/codeup.in" },
            { icon: <FaInstagram />, href: "https://www.instagram.com/codeup.in" }
        ],
        logo,
        copyrightText: "© 2025 Codeup. All rights reserved",
    },
};

export default siteData;
