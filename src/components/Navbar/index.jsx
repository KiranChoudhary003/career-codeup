// import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
// import Wrapper from "./style";
// import { Menu, X } from "lucide-react";
// import { useAuth } from "../../auth/useAuth";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import coin from "../../assets/coin.png";
// import axios from "axios";
// import { AuthContext } from "../../auth/AuthProvider";
// // import AddPointsModal from "../AddPointsModal";

// const NAVBAR_OFFSET = 56;

// const Navbar = ({ data }) => {
//     const { user, login, logout } = useAuth();
//     const [open, setOpen] = useState(false);
//     const [showDropdown, setShowDropdown] = useState(false);
//     const [points, setPoints] = useState(null);
//     const [pointsModal, setPointsModal] = useState(false);
//     const [careerModal, setCareerModal] = useState(false)

//     const dropdownRef = useRef();
//     const navigate = useNavigate();
//     const location = useLocation();

//     const { accessToken } = useContext(AuthContext);

//     const isActive = () => {
//         const path = location.pathname;
//         const hash = window.location.hash;
//         const host = window.location.hostname;

//         // 🟢 1. If on Career domain → ONLY Career active
//         if (host.includes("career.codeup.in")) {
//             return title === "Career";
//         }

//         // 🟢 2. If on Academy domain → ONLY Academy active
//         if (host.includes("academy.codeup.in")) {
//             return title === "Academy";
//         }

//         // 🟢 3. If on Contact page → ONLY Contact active
//         if (path === "/contact") {
//             return title === "Contact";
//         }

//         // 🟢 4. Hash sections (homepage scrolling)
//         if (href?.startsWith("#")) {
//             return path === "/" && hash === href;
//         }

//         // 🟢 5. Other internal routes
//         return path === href;
//     };

//     // ✅ MOVED OUTSIDE useEffect
//     const fetchPoints = async () => {
//         try {
//             const res = await axios.get(
//                 "https://codeup.in/dev/v2/codeup-points",
//                 {
//                     headers: {
//                         Authorization: `Bearer ${accessToken}`,
//                     },
//                 }
//             );

//             const userPoints = res.data.points?.[0]?.points;
//             setPoints(userPoints);

//         } catch (error) {
//             console.log("Error:", error);
//         }
//     };

//     // initial fetch
//     useEffect(() => {
//         if (accessToken) {
//             fetchPoints();
//         }
//     }, [accessToken]);

//     useEffect(() => {
//         const handleClickOutside = (e) => {
//             if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
//                 setShowDropdown(false);
//             }
//         };
//         document.addEventListener("mousedown", handleClickOutside);
//         return () => document.removeEventListener("mousedown", handleClickOutside);
//     }, []);

//     const scrollToHash = (e, href) => {
//         if (!href) return;

//         if (href.startsWith("#")) {
//             e.preventDefault();
//             const id = href.slice(1);
//             setOpen(false);

//             requestAnimationFrame(() => {
//                 const el = document.getElementById(id);
//                 if (!el) return;

//                 const y =
//                     el.getBoundingClientRect().top +
//                     window.pageYOffset -
//                     NAVBAR_OFFSET;

//                 window.scrollTo({
//                     top: y,
//                     behavior: "smooth",
//                 });
//             });
//         }
//     };

//     const navLinks = useMemo(() => {
//         if (!data?.links) return [];

//         return Object.values(data.links).flat();
//     }, [data]);

//     return (
//         <Wrapper className="bg-[#081a2c] text-white px-4 sticky top-0 z-50 backdrop-blur-xs">
//             <div className="container py-2 flex justify-between items-center gap-3">
//                 {/* Logo */}
//                 <a href="https://codeup.in">
//                     <img src={data?.logo} className="w-[100px]" alt="Codeup" />
//                 </a>

//                 <nav className="hidden md:flex gap-6">
//                     {navLinks.map(({ title, href }, index) => {
//                         const isActive = () => {
//                             const path = location.pathname;
//                             const hash = window.location.hash;
//                             const host = window.location.hostname;

//                             if (title === "Contact") return path === "/contact";
//                             if (title === "Career") return host === "career.codeup.in";
//                             if (title === "Academy") return host === "academy.codeup.in";
//                             if (href?.startsWith("#")) return path === "/" && hash === href;

//                             return path === href;
//                         };

//                         const handleClick = (e) => {
//                             // 🌐 External
//                             if (title === "Academy") {
//                                 window.location.href = "https://academy.codeup.in";
//                                 return;
//                             }

//                             if (title === "Career") {
//                                 window.location.href = "https://career.codeup.in";
//                                 return;
//                             }

//                             // 📩 Contact
//                             if (title === "Contact") {
//                                 navigate("/contact");
//                                 return;
//                             }

//                             // 🔗 Hash scroll
//                             if (href?.startsWith("#")) {
//                                 scrollToHash(e, href);
//                                 return;
//                             }

//                             // 🔁 Internal route
//                             navigate(href);
//                         };

//                         return (
//                             <span
//                                 key={index}
//                                 onClick={handleClick}
//                                 className={`cursor-pointer transition ${isActive() ? "text-teal-300" : "hover:text-teal-200"}`}
//                             >
//                                 {title}
//                             </span>
//                         );
//                     })}
//                 </nav>

//                 <div className="flex gap-3 h-10">

//                     {/* Mobile Menu Button */}
//                     {/* <button
//                         className="md:hidden text-3xl btn-secondary cursor-pointer"
//                         onClick={() => setOpen(!open)}
//                     >
//                         {open ? <X /> : <Menu />}
//                     </button> */}

//                     {/* Profile */}
//                     {user ? (
//                         <div ref={dropdownRef} className="relative">
//                             <img
//                                 src={user.picture}
//                                 alt="Profile"
//                                 className="w-10 h-10 rounded-full cursor-pointer"
//                                 onClick={() => setShowDropdown((prev) => !prev)}
//                             />

//                             {showDropdown && (
//                                 <div className="absolute right-0 mt-2 w-40 bg-[#0b2239e6] border border-gray-800 rounded-md shadow-lg z-50 overflow-hidden">
//                                     {/* {location.pathname !== "/admin" && user.role.includes("admin") && (
//                                         <button
//                                             onClick={() => {
//                                                 navigate("admin");
//                                                 setShowDropdown(false);
//                                             }}
//                                             className="w-full text-left px-4 py-2 text-sm hover:bg-white/5 transition cursor-pointer"
//                                         >
//                                             Admin
//                                         </button>
//                                     )}
//                                     {location.pathname === "/admin" && user.role.includes("admin") && (
//                                         <button
//                                             onClick={() => {
//                                                 navigate("/");
//                                                 setShowDropdown(false);
//                                             }}
//                                             className="w-full text-left px-4 py-2 text-sm hover:bg-white/5 transition cursor-pointer"
//                                         >
//                                             Home
//                                         </button>
//                                     )} */}
//                                     <button
//                                         onClick={() => {
//                                             logout();
//                                             setShowDropdown(false);
//                                         }}
//                                         className="w-full px-4 py-2 text-sm text-red-800 hover:bg-white/5 transition cursor-pointer"
//                                     >
//                                         Sign out
//                                     </button>
//                                 </div>
//                             )}
//                         </div>
//                     ) : (
//                         <button onClick={login} className="text-white hover:text-black hover:bg-gray-200 border border-white transition px-4 py-2 rounded-full duration-300">
//                             Sign in
//                         </button>
//                     )}
//                 </div>
//             </div>

//             {/* Mobile Menu */}
//             {open && (
//                 <div className="md:hidden px-4 pb-4 flex flex-col gap-4 bg-codeup-blue-nav text-white absolute left-0 backdrop-blur-xs w-full">
//                     {navLinks.map(({ title, href }, index) => (
//                         <a key={index} href={href} onClick={(e) => scrollToHash(e, href)} className="block text-center">
//                             {title}
//                         </a>
//                     ))}

//                     <a
//                         href={data.button.href}
//                         onClick={(e) => scrollToHash(e, data.button.href)}
//                         className="btn-secondary w-full text-center"
//                     >
//                         {data.button.title}
//                     </a>
//                 </div>
//             )}

//             {/* Points Modal */}
//             {pointsModal && (
//                 <AddPointsModal
//                     accessToken={accessToken}
//                     onClose={() => setPointsModal(false)}
//                     user={user}
//                     onSuccess={fetchPoints}
//                 />
//             )}
//         </Wrapper>
//     );
// };

// export default Navbar;

import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import Wrapper from "./style";
import { useAuth } from "../../auth/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../auth/AuthProvider";

const NAVBAR_OFFSET = 56;

const Navbar = ({ data }) => {
    const { user, login, logout } = useAuth();
    const [showDropdown, setShowDropdown] = useState(false);
    const [points, setPoints] = useState(null);

    const dropdownRef = useRef();
    const navigate = useNavigate();
    const location = useLocation();
    const { accessToken } = useContext(AuthContext);

    // ✅ Fetch Points
    const fetchPoints = async () => {
        try {
            const res = await axios.get(
                "https://codeup.in/dev/v2/codeup-points",
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                }
            );
            const userPoints = res.data.points?.[0]?.points;
            setPoints(userPoints);
        } catch (error) {
            console.log("Error:", error);
        }
    };

    useEffect(() => {
        if (accessToken) fetchPoints();
    }, [accessToken]);

    // ✅ Close dropdown
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setShowDropdown(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // ✅ Scroll
    const scrollToHash = (e, href) => {
        if (!href?.startsWith("#")) return;

        e.preventDefault();
        const id = href.slice(1);

        requestAnimationFrame(() => {
            const el = document.getElementById(id);
            if (!el) return;

            const y =
                el.getBoundingClientRect().top +
                window.pageYOffset -
                NAVBAR_OFFSET;

            window.scrollTo({ top: y, behavior: "smooth" });
        });
    };

    // ✅ Active Logic (FIXED)
    const isActive = (title, href) => {
        const path = location.pathname;
        const hash = window.location.hash;
        const host = window.location.hostname;

        // 🔥 1. Contact FIRST
        if (path === "/contact") return title === "Contact";

        // 🔥 2. Career domain
        if (host.includes("career.codeup.in")) return title === "Career";

        // 🔥 3. Academy domain
        if (host.includes("academy.codeup.in")) return title === "Academy";

        // 🔥 4. Hash sections
        if (href?.startsWith("#")) {
            return path === "/" && hash === href;
        }

        // 🔥 5. Internal route
        return path === href;
    };

    // ✅ Links
    const navLinks = useMemo(() => {
        if (!data?.links) return [];
        return Object.values(data.links).flat();
    }, [data]);

    return (
        <Wrapper className="bg-[#081a2c] text-white px-4 sticky top-0 z-50 backdrop-blur-xs">
            <div className="container py-2 flex justify-between items-center gap-3">

                {/* Logo */}
                <a href="https://codeup.in">
                    <img src={data?.logo} className="w-[100px]" alt="Codeup" />
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex gap-6">
                    {navLinks.map(({ title, href }, index) => {

                        const handleClick = (e) => {
                            // 🌐 External
                            if (title === "Academy") {
                                window.location.href = "https://academy.codeup.in";
                                return;
                            }

                            if (title === "Career") {
                                window.location.href = "https://career.codeup.in";
                                return;
                            }

                            // 📩 Contact
                            if (title === "Contact") {
                                navigate("/contact");
                                return;
                            }

                            // 🔗 Hash
                            if (href?.startsWith("#")) {
                                scrollToHash(e, href);
                                return;
                            }

                            // 🔁 Internal
                            navigate(href);
                        };

                        return (
                            <span
                                key={index}
                                onClick={handleClick}
                                className={`cursor-pointer transition ${
                                    isActive(title, href)
                                        ? "text-teal-300"
                                        : "hover:text-teal-200"
                                }`}
                            >
                                {title}
                            </span>
                        );
                    })}
                </nav>

                {/* Profile */}
                <div className="flex gap-3 h-10">
                    {user ? (
                        <div ref={dropdownRef} className="relative">
                            <img
                                src={user.picture}
                                alt="Profile"
                                className="w-10 h-10 rounded-full cursor-pointer"
                                onClick={() => setShowDropdown((prev) => !prev)}
                            />

                            {showDropdown && (
                                <div className="absolute right-0 mt-2 w-40 bg-[#0b2239e6] border border-gray-800 rounded-md shadow-lg z-50 overflow-hidden">
                                    <button
                                        onClick={() => {
                                            logout();
                                            setShowDropdown(false);
                                        }}
                                        className="w-full px-4 py-2 text-sm text-red-800 hover:bg-white/5 transition cursor-pointer"
                                    >
                                        Sign out
                                    </button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <button
                            onClick={login}
                            className="text-white hover:text-black hover:bg-gray-200 border border-white transition px-4 py-2 rounded-full duration-300"
                        >
                            Sign in
                        </button>
                    )}
                </div>
            </div>
        </Wrapper>
    );
};

export default Navbar;