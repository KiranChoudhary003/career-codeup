import { Award, CheckCircle2, Code2, Trophy, Video } from 'lucide-react'
import React from 'react'

const Benefits = () => {
    return (
        <section className="py-20 bg-[#0b2239] text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4 md:text-5xl">What You'll Gain</h2>
                    <p className="md:text-xl text-white/80">Complete learning experience designed for success</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { icon: Award, title: "Certifications", items: ["Industry-recognized", "Course completion", "Skill badges"] },
                        { icon: Video, title: "Live Sessions", items: ["Expert instructors", "Interactive Q&A", "Real-time coding"] },
                        { icon: Code2, title: "Projects & Tasks", items: ["10+ live projects", "Daily challenges", "Portfolio ready"] },
                        { icon: Trophy, title: "Internship", items: ["Top performers", "Paid opportunities"] }
                    ].map((item, idx) => (
                        <div key={idx} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 border border-white/20">
                            <item.icon className="text-white mb-4" size={40} />
                            <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                            <ul className="space-y-2">
                                {item.items.map((listItem, i) => (
                                    <li key={i} className="flex items-center gap-2 text-white/90">
                                        <CheckCircle2 size={16} className="text-emerald-400" />
                                        {listItem}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Benefits