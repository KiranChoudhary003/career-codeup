import React from "react";
import { Briefcase, GraduationCap } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SectionCard = () => {

    const navigate = useNavigate()

    const cards = [
        {
            icon: Briefcase,
            title: "Apply for Jobs",
            description:
                "Explore full-time and part-time opportunities at Codeup and kickstart your professional career..",
            //   features: [
            //     "Thousands of verified listings",
            //     "Remote & on-site options",
            //     "Salary transparency",
            //     "One-click easy apply",
            //   ],
            buttonLabel: "Browse Jobs",
            variant: "filled",
            route: "/jobs",
        },
        {
            icon: GraduationCap,
            title: "Apply for Internships",
            description:
                "Gain hands-on experience with curated internship programs designed for students and fresh graduates.",
            //   features: [
            //     "Paid & unpaid opportunities",
            //     "Flexible schedules",
            //     "Mentorship included",
            //     "Certificate on completion",
            //   ],
            buttonLabel: "Explore Internships",
            variant: "outlined",
            route: "/intership",
        },
    ];

    return (
        <section className="flex-1 py-16 md:py-24 px-6 md:px-12 bg-background">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">

                {cards.map((card, index) => {
                    const Icon = card.icon;
                    const isFilled = card.variant === "filled";
                    const isJob = card.title === "Apply for Jobs"
                    return (
                        <div
                            key={index}
                            className="group rounded-2xl p-8 md:p-10 flex flex-col items-start gap-6 
transition-all duration-300 shadow-lg hover:shadow-2xl 
text-[#0b2239] text-gray-100 
bg-white/20 backdrop-blur-lg"                        >
                            {/* Icon */}
                            <div className="p-3 rounded-xl bg-gray-300 transition">
                                <Icon className="h-8 w-8 text-[#0b2239] transition" />
                            </div>

                            {/* Title & Description */}
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold text-[#0b2239]">
                                    {card.title}
                                </h2>
                                <p className="mt-2 text-base text-gray-600 transition">
                                    {card.description}
                                </p>
                            </div>

                            {/* Features */}
                            {/* <ul className="space-y-2 mt-2">
                {card.features.map((f, i) => (
                  <li
                    key={i}
                    className={`flex items-center gap-2 text-sm ${
                      isFilled
                        ? "text-primary-foreground/80"
                        : "text-muted-foreground"
                    }`}
                  >
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        isFilled
                          ? "bg-primary-foreground/60"
                          : "bg-primary/40"
                      }`}
                    />
                    {f}
                  </li>
                ))}
              </ul> */}

                            {/* Button */}
                            <div className="relative w-full mt-auto group">
                                <button
                                    disabled={isJob}
                                    onClick={() => !isJob && navigate(card.route)}
                                    className={`w-full text-base font-semibold rounded-xl py-3 transition
    ${isJob
                                            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                                            : "bg-gray-300 text-gray-700 group-hover:bg-[#0b2239] group-hover:text-white"
                                        }
  `}
                                >
                                    {card.buttonLabel}
                                </button>

                                {/* Tooltip */}
                                {isJob && (
                                    <div className="absolute top-10 left-1/2 -translate-x-1/2 
      bg-black text-white text-xs px-3 py-1 rounded opacity-0 
      group-hover:opacity-100 transition pointer-events-none whitespace-nowrap">
                                        No jobs posted yet
                                    </div>
                                )}
                            </div>

                        </div>
                    );
                })}

            </div>
        </section>
    );
};

export default SectionCard