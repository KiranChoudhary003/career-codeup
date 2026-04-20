// import { Briefcase, ChevronRight, Cloud, Code2, Users, Zap } from 'lucide-react';
// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom';

// const Track = () => {

//     const [hoveredCourse, setHoveredCourse] = useState(null);

//     const navigate = useNavigate();

//     const courses = [
//         {
//             title: "Modern Application Development using MERN",
//             icon: Code2,
//             gradient: "from-emerald-400 to-teal-500",
//             description: "Master MongoDB, Express, React, and Node.js to build scalable applications"
//         },
//         {
//             title: "E-commerce & App Solutions with PWA",
//             icon: Zap,
//             gradient: "from-blue-400 to-cyan-500",
//             description: "Create progressive web apps with JavaScript and React for modern commerce"
//         },
//         {
//             title: "Full-Fledged Enterprise Solution using JAVA",
//             icon: Briefcase,
//             gradient: "from-orange-400 to-rose-500",
//             description: "Build robust enterprise-grade applications with Java technologies"
//         },
//         {
//             title: "Microservices Development with NodeJS & MongoDB",
//             icon: Users,
//             gradient: "from-purple-400 to-pink-500",
//             description: "Design and develop scalable microservices architecture"
//         },
//         {
//             title: "Cloud-Based Solutions & Applications with Salesforce",
//             icon: Cloud,
//             gradient: "from-emerald-400 to-teal-500",
//             description: "Build scalable cloud-based applications using Salesforce, covering CRM concepts, automation, and real-world business solutions."
//         }
//     ];

//     const goToCourse = (id) => {
//         navigate(`/training/${id}`);
//     };

//     return (
//         <section className="py-20 bg-gray-50">
//             <div className="max-w-7xl mx-auto px-6">
//                 <div className="text-center mb-16">
//                     <h2 className="text-4xl md:text-5xl font-bold text-[#0b2239] mb-4">Choose Your Track</h2>
//                     <p className="md:text-xl text-gray-600">Select the course that aligns with your career goals</p>
//                 </div>

//                 <div className="grid md:grid-cols-2 gap-8">
//                     {courses.map((course, idx) => {
//                         const isLast = idx === courses.length - 1;

//                         return (
//                             <div
//                                 key={idx}
//                                 onMouseEnter={() => setHoveredCourse(idx)}
//                                 onMouseLeave={() => setHoveredCourse(null)}
//                                 className={`group relative rounded-2xl p-8 transition-all duration-500 cursor-pointer overflow-hidden

//           ${isLast
//                                         ? "md:col-span-2 mx-auto max-w-xl bg-white hover:shadow-2xl border-2 border-transparent hover:border-[#0b2239]"
//                                         : "bg-white hover:shadow-2xl border-2 border-transparent hover:border-[#0b2239]"
//                                     }
//         `}
//                             >
//                                 {/* Background gradient */}
//                                 <div className={`absolute inset-0 bg-gradient-to-br ${course.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

//                                 <div className="relative z-10">

//                                     {/* Icon */}
//                                     <div className={`w-16 h-16 bg-gradient-to-br ${course.gradient} rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
//                                         <course.icon className="text-white" size={32} />
//                                     </div>

//                                     {/* Title */}
//                                     <h3 className={`text-2xl font-bold mb-4 leading-tight `}>
//                                         {course.title}
//                                     </h3>

//                                     {/* Description */}
//                                     <p className={`mb-6 leading-relaxed`}>
//                                         {course.description}
//                                     </p>
//                                     <div onClick={() => goToCourse(course.id)} className="flex items-center gap-2 text-[#0b2239] font-semibold group-hover:gap-4 transition-all duration-300">
//                                         Explore Course <ChevronRight size={20} className="transform group-hover:translate-x-2 transition-transform duration-300" />
//                                     </div>

//                                     {/* Ping animation */}
//                                     {hoveredCourse === idx && (
//                                         <div className="absolute top-4 right-4">
//                                             <div className="w-3 h-3 bg-white rounded-full animate-ping"></div>
//                                         </div>
//                                     )}
//                                 </div>
//                             </div>
//                         );
//                     })}
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default Track

import { Briefcase, ChevronRight, Cloud, Code2, Users, Zap } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Track = () => {
    const [hoveredCourse, setHoveredCourse] = useState(null);
    const navigate = useNavigate();

    const courses = [
        {
            id: "mern",
            title: "Modern Application Development using MERN",
            icon: Code2,
            gradient: "from-emerald-400 to-teal-500",
            description:
                "Master MongoDB, Express, React, and Node.js to build scalable applications",
        },
        {
            id: "pwa",
            title: "E-commerce & App Solutions with PWA",
            icon: Zap,
            gradient: "from-blue-400 to-cyan-500",
            description:
                "Create progressive web apps with JavaScript and React for modern commerce",
        },
        {
            id: "java",
            title: "Full-Fledged Enterprise Solution using JAVA",
            icon: Briefcase,
            gradient: "from-orange-400 to-rose-500",
            description:
                "Build robust enterprise-grade applications with Java technologies",
        },
        {
            id: "microservices",
            title: "Microservices Development with NodeJS & MongoDB",
            icon: Users,
            gradient: "from-purple-400 to-pink-500",
            description:
                "Design and develop scalable microservices architecture",
        },
        {
            id: "salesforce",
            title: "Cloud-Based Solutions & Applications with Salesforce",
            icon: Cloud,
            gradient: "from-emerald-400 to-teal-500",
            description:
                "Build scalable cloud-based applications using Salesforce, covering CRM concepts and automation",
        },
    ];

    const goToCourse = (id) => {
        navigate(`/training/${id}`);
    };

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#0b2239] mb-4">
                        Choose Your Track
                    </h2>
                    <p className="md:text-xl text-gray-600">
                        Select the course that aligns with your career goals
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {courses.map((course, idx) => {
                        const isLast = idx === courses.length - 1;

                        return (
                            <div
                                key={course.id}
                                onClick={() => goToCourse(course.id)} // ✅ whole card clickable
                                onMouseEnter={() => setHoveredCourse(idx)}
                                onMouseLeave={() => setHoveredCourse(null)}
                                className={`group relative rounded-2xl p-8 transition-all duration-500 cursor-pointer overflow-hidden
                ${isLast
                                        ? "md:col-span-2 mx-auto max-w-xl bg-white hover:shadow-2xl border-2 border-transparent hover:border-[#0b2239]"
                                        : "bg-white hover:shadow-2xl border-2 border-transparent hover:border-[#0b2239]"
                                    }`}
                            >
                                {/* Background gradient */}
                                <div
                                    className={`absolute inset-0 bg-gradient-to-br ${course.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                                ></div>

                                <div className="relative z-10">
                                    {/* Icon */}
                                    <div
                                        className={`w-16 h-16 bg-gradient-to-br ${course.gradient} rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                                    >
                                        <course.icon className="text-white" size={32} />
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-2xl font-bold mb-4 leading-tight">
                                        {course.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="mb-6 leading-relaxed">{course.description}</p>

                                    {/* Explore */}
                                    <div className="flex items-center gap-2 text-[#0b2239] font-semibold group-hover:gap-4 transition-all duration-300">
                                        Explore Course
                                        <ChevronRight
                                            size={20}
                                            className="transform group-hover:translate-x-2 transition-transform duration-300"
                                        />
                                    </div>

                                    {/* Ping animation */}
                                    {hoveredCourse === idx && (
                                        <div className="absolute top-4 right-4">
                                            <div className="w-3 h-3 bg-white rounded-full animate-ping"></div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Track;