// import { Award, ChevronRight, Code2, Trophy, Video } from 'lucide-react';
// import React, { useContext, useEffect, useState } from 'react'
// import Register from '../Register';
// import { AuthContext } from '../../../auth/AuthProvider';
// import { createPortal } from 'react-dom';

// const Cover = () => {

//     const [registerModal, setRegisterModal] = useState(false)

//     const { accessToken, login } = useContext(AuthContext);

//     useEffect(() => {
//         if (accessToken) {
//             const shouldOpen = localStorage.getItem("openRegister");

//             if (shouldOpen === "true") {
//                 setRegisterModal(true);
//                 localStorage.removeItem("openRegister"); 
//             }
//         }
//     }, [accessToken]);

//     const features = [
//         { icon: Award, title: "Industry Certifications", desc: "Recognized credentials" },
//         { icon: Video, title: "Live Interactive Sessions", desc: "Real-time learning" },
//         { icon: Code2, title: "Hands-on Projects", desc: "Build real applications" },
//         { icon: Trophy, title: "Internship Opportunities", desc: "For top performers" }
//     ];

//     const handleEnroll = () => {

//         if (!accessToken) {
//             localStorage.setItem("openRegister", "true");

//             login();
//             return;
//         }

//         setRegisterModal(true);
//     };

//     return (
//         <section className="relative pt-32 pb-20 overflow-hidden">
//             <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-br from-[#0b2239] to-[#1a3a5c] transform skew-x-12 translate-x-1/3"></div>

//             <div className="max-w-7xl mx-auto px-6 relative z-10">
//                 <div className="grid lg:grid-cols-2 gap-12 items-center">
//                     <div>
//                         <div className="inline-block bg-[#0b2239]/10 px-4 py-2 rounded-full mb-6">
//                             <span className="text-[#0b2239] font-semibold text-sm">Summer Internship 2026</span>
//                         </div>
//                         <h1 className="text-6xl font-bold text-[#0b2239] mb-6 leading-tight">
//                             Master Full Stack Development with
//                             <span className="block mt-2 bg-gradient-to-r from-[#0b2239] to-[#1a3a5c] bg-clip-text text-transparent">
//                                 Industry Experts
//                             </span>
//                         </h1>
//                         <p className="text-xl text-gray-600 mb-8 leading-relaxed">
//                             Get hands-on training, work on real projects, and launch your tech career this summer. Best performers earn guaranteed internships.
//                         </p>

//                         <div className="flex items-center gap-6 mb-8">
//                             <div className="flex items-baseline gap-2">
//                                 <span className="text-5xl font-bold text-[#0b2239]">₹4,999</span>
//                                 <span className="text-2xl text-gray-400 line-through">₹5,999</span>
//                             </div>
//                             <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-2 rounded-full font-semibold">
//                                 Early Bird Price
//                             </div>
//                         </div>

//                         <div className="flex flex-wrap gap-4">
//                             <button className="bg-[#0b2239] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#0d2a45] transition-all duration-300 hover:shadow-2xl hover:scale-105 flex items-center gap-2" onClick={handleEnroll}>
//                                 Start Learning <ChevronRight size={20} />
//                             </button>
//                             {/* <button className="border-2 border-[#0b2239] text-[#0b2239] px-8 py-4 rounded-full font-semibold hover:bg-[#0b2239] hover:text-white transition-all duration-300">
//                                 View Curriculum
//                             </button> */}
//                         </div>
//                     </div>

//                     {registerModal &&
//                         createPortal(
//                             <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50 overflow-y-auto">
//                                 <Register closeModal={() => setRegisterModal(false)} />
//                             </div>,
//                             document.body
//                         )}


//                     <div className="relative hidden lg:block">
//                         <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-3xl transform rotate-6"></div>
//                         <div className="relative bg-white p-8 rounded-2xl shadow-2xl">
//                             <div className="space-y-4">
//                                 {features.map((feature, idx) => (
//                                     <div key={idx} className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 hover:bg-[#0b2239] hover:text-white transition-all duration-300 group">
//                                         <div className="w-12 h-12 bg-[#0b2239] group-hover:bg-white rounded-lg flex items-center justify-center">
//                                             <feature.icon className="text-white group-hover:text-[#0b2239]" size={24} />
//                                         </div>
//                                         <div>
//                                             <h4 className="font-semibold">{feature.title}</h4>
//                                             <p className="text-sm opacity-80">{feature.desc}</p>
//                                         </div>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default Cover

import { Award, ChevronRight, Code2, Trophy, Video } from 'lucide-react';
import React, { useContext, useEffect, useState } from 'react'
import Register from '../Register';
import { AuthContext } from '../../../auth/AuthProvider';
import { createPortal } from 'react-dom';

const Cover = () => {

    const [registerModal, setRegisterModal] = useState(false)

    const { accessToken, login } = useContext(AuthContext);

    useEffect(() => {
        if (accessToken) {
            const shouldOpen = localStorage.getItem("openRegister");

            if (shouldOpen === "true") {
                setRegisterModal(true);
                localStorage.removeItem("openRegister");
            }
        }
    }, [accessToken]);

    // 🔥 Prevent background scroll
    useEffect(() => {
        document.body.style.overflow = registerModal ? "hidden" : "auto";
        return () => document.body.style.overflow = "auto";
    }, [registerModal]);

    const features = [
        { icon: Award, title: "Certifications", desc: "Recognized certifications" },
        { icon: Video, title: "Live Interactive Sessions", desc: "Real-time learning" },
        { icon: Code2, title: "Hands-on Projects", desc: "Build real applications" },
        { icon: Trophy, title: "Internship Opportunities", desc: "For top performers" }
    ];

    const handleEnroll = () => {
        if (!accessToken) {
            localStorage.setItem("openRegister", "true");
            login();
            return;
        }
        setRegisterModal(true);
    };

    return (
        <section className="relative pt-24 md:pt-32 pb-16 md:pb-20 overflow-hidden">

            {/* Background */}
            <div className="hidden md:block absolute top-0 right-0 w-1/2 h-full bg-gradient-to-br from-[#0b2239] to-[#1a3a5c] transform skew-x-12 translate-x-1/3"></div>

            <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">

                {/* Responsive Grid */}
                <div className="grid md:grid-cols-2 gap-10 items-center">

                    {/* LEFT CONTENT */}
                    <div className="text-center md:text-left">
                        <div className="inline-block bg-[#0b2239]/10 px-3 py-1 rounded-full mb-4">
                            <span className="text-[#0b2239] font-semibold text-xs md:text-sm">
                                Summer Internship 2026
                            </span>
                        </div>

                        <h1 className="text-4xl sm:text-4xl md:text-6xl font-bold text-[#0b2239] mb-4 md:mb-6 leading-tight">
                            Master Full Stack Development with
                            <span className="block mt-2 bg-gradient-to-r from-[#0b2239] to-[#1a3a5c] bg-clip-text text-transparent">
                                Industry Experts
                            </span>
                        </h1>

                        <p className="text-base md:text-xl text-gray-600 mb-6 md:mb-8">
                            Get hands-on training, work on real projects,<br></br> and launch your tech career this summer.
                        </p>

                        {/* PRICE */}
                        <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 mb-6">
                            <div className="flex items-baseline gap-2">
                                <span className="text-3xl md:text-5xl font-bold text-[#0b2239]">₹999</span>
                                <span className="text-lg md:text-2xl text-gray-400 line-through">₹1,499</span>
                            </div>
                            <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-3 py-1 rounded-full text-sm">
                                Early Bird Price for Online Batch
                            </div>
                        </div>

                        {/* BUTTON */}
                        <div className="flex justify-center md:justify-start">
                            <button
                                className="bg-[#0b2239] text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold flex items-center gap-2 hover:scale-105 transition"
                                onClick={handleEnroll}
                            >
                                Enroll Now <ChevronRight size={20} />
                            </button>
                        </div>
                    </div>

                    {/* RIGHT FEATURES (Hidden on small screens) */}
                    <div className="relative hidden md:block">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-3xl rotate-6"></div>

                        <div className="relative bg-white p-6 md:p-8 rounded-2xl shadow-2xl">
                            <div className="space-y-4">
                                {features.map((feature, idx) => (
                                    <div key={idx} className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 hover:bg-[#0b2239] hover:text-white transition group">

                                        <div className="w-10 h-10 md:w-12 md:h-12 bg-[#0b2239] group-hover:bg-white rounded-lg flex items-center justify-center">
                                            <feature.icon className="text-white group-hover:text-[#0b2239]" size={20} />
                                        </div>

                                        <div>
                                            <h4 className="font-5xl text-sm md:text-base">{feature.title}</h4>
                                            <p className="text-xs md:text-sm opacity-80">{feature.desc}</p>
                                        </div>

                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ✅ MOBILE FRIENDLY MODAL */}
            {registerModal &&
                createPortal(
                    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 overflow-y-auto">

                        <div className="min-h-screen flex items-start md:items-center justify-center p-2 md:p-6">

                            <div className="w-[650px] h-full md:h-auto bg-white rounded-2xl shadow-xl overflow-y-auto">
                                <Register closeModal={() => setRegisterModal(false)} />
                            </div>

                        </div>

                    </div>,
                    document.body
                )
            }
        </section>
    )
}

export default Cover;