import React from "react";
import Wrapper from "./style";
import { useNavigate } from "react-router-dom";

const Footer = ({ data }) => {
    const hasCompany = data.company?.length > 0;
    const hasServices = data.services?.length > 0;
    const hasOnlyLogo = !hasCompany && !hasServices;

    const navigate = useNavigate()
    return (
        // <Wrapper className="px-4 bg-[#081a2c] text-white">
        //     <div className="max-w-7xl mx-auto py-12">
        //         {/* Main grid */}
        //         <div className={`grid gap-8 items-start sm:grid-cols-4 ${hasOnlyLogo ? "text-center" : ""}`}>
        //             {/* Company */}
        //             {hasCompany && (
        //                 <ul>
        //                     <h3 className="font-semibold mb-3">Company</h3>
        //                     {data.company.map(({ title, href }, index) => (
        //                         <li key={index} className="mb-2">
        //                             <a className="font-medium" href={href}>
        //                                 {title}
        //                             </a>
        //                         </li>
        //                     ))}
        //                 </ul>
        //             )}

        //             {/* Services */}
        //             {hasServices && (
        //                 <ul>
        //                     <h3 className="font-semibold mb-3">Services</h3>
        //                     {data.services.map(({ title, href }, index) => (
        //                         <li key={index} className="mb-2">
        //                             <a className="font-medium" href={href}>
        //                                 {title}
        //                             </a>
        //                         </li>
        //                     ))}
        //                 </ul>
        //             )}

        //             {/* Logo */}
        //             <div className={`flex justify-center sm:justify-start h-full items-center ${hasOnlyLogo ? "sm:col-span-1 col-span-4" : ""}`}>
        //                 <img src={data.logo} alt="logo" className="w-32" />
        //             </div>

        //             {/* Socials */}
        //             <div className="flex flex-col items-center sm:items-end sm:col-start-4 col-span-4">
        //                 <h3 className="font-semibold mb-3">Follow us</h3>
        //                 <div className="flex gap-2">
        //                     {data.socials.map(({ icon, href }, index) => (
        //                         <a key={index} href={href} className="btn-secondary aspect-square flex items-center justify-center text-xl">
        //                             {icon}
        //                         </a>
        //                     ))}
        //                 </div>
        //             </div>
        //         </div>

        //         {/* Bottom copyright */}
        //         <div className="mt-10 flex justify-center">
        //             <p className="text-gray-400 text-sm text-center">{data.copyrightText}</p>
        //         </div>
        //     </div>
        // </Wrapper>
        <footer className="px-4 bg-[#081a2c] text-white py-12">
            <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

                {/* Logo + Social */}
                <div className="flex flex-col justify-between items-center sm:items-start gap-6">
                    <img src={data.logo} alt="logo" className="w-32 mb-5" />

                    <div className="text-center sm:text-left">
                        <h3 className="font-semibold mb-3 text-lg">Follow us</h3>
                        <div className="flex gap-3 justify-center sm:justify-start">
                            {data.socials.map(({ icon, href }, index) => (
                                <a
                                    key={index}
                                    href={href}
                                    className="w-10 h-10 flex items-center justify-center rounded-full bg-[#132b44] hover:bg-[#1f3d5c] transition duration-300 text-lg"
                                >
                                    {icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Programs */}
                <div className="text-center sm:text-left">
                    <h4 className="font-bold mb-4 text-lg">Programs</h4>
                    <ul className="space-y-2 text-gray-300">
                        {[
                            { name: "ACE Academy", path: "https://academy.codeup.in/" },
                            { name: "The Codeup Show", path: "https://show.codeup.in/" },
                            { name: "CodeHack", path: "https://hack.codeup.in/" },
                        ].map((item, i) => (
                            <li key={i}>
                                <a
                                    href={item.path}
                                    rel="noopener noreferrer"
                                    className="hover:text-white transition duration-200 inline-block"
                                >
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Quick Links */}
                <div className="text-center sm:text-left">
                    <h4 className="font-bold mb-4 text-lg">Quick Links</h4>
                    <ul className="space-y-2 text-gray-300">
                        {[
                            { name: "About Us", path: "/about" },
                            { name: "Contact", path: "/contact" },
                        ].map((item, i) => (
                            <li key={i}>
                                <button
                                    onClick={() => navigate(item.path)}
                                    className="hover:text-white  transition duration-200"
                                >
                                    {item.name}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact */}
                <div className="text-center sm:text-left">
                    <h4 className="font-bold mb-4 text-lg">Contact</h4>
                    <p className="text-gray-300 leading-relaxed">
                        Email: <span className="text-white">oneup.codeup@gmail.com</span><br />
                        Phone: <span className="text-white">+91 9352634485</span>
                    </p>
                </div>

            </div>

            {/* Bottom */}
            <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-gray-700 text-center text-gray-400 text-sm px-6">
                <p>&copy; 2025 Codeup. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
