import { Heart, Lightbulb, Target, Users } from 'lucide-react'
import React from 'react'

const About = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="bg-[#0b2239] text-white py-20 px-4">
                <div className="max-w-6xl mx-auto text-center">
                    <h1 className="text-5xl font-bold mb-6">About Codeup</h1>
                    <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                        Bridging the gap between students and industry through practical learning and real exposure.
                    </p>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 py-20">
                <section className="mb-16 bg-white p-12 rounded-2xl shadow-lg">
                    <h2 className="text-4xl font-bold text-[#0b2349] mb-8">Our Story</h2>
                    <div className="prose max-w-none text-gray-700 leading-relaxed space-y-4">
                        <p className="text-lg">
                            Codeup was founded with a clear mission: to bridge the gap between academic learning and industry requirements. We recognized that many talented students struggle to transition from college to successful tech careers, not because they lack potential, but because they lack guidance, exposure, and practical experience.
                        </p>
                        <p className="text-lg">
                            Our journey began with a simple awareness session at a local college. The overwhelming response from students who were eager to learn, grow, and succeed inspired us to create a comprehensive platform that addresses every aspect of a student's journey towards becoming industry-ready.
                        </p>
                        <p className="text-lg">
                            Today, Codeup is more than just a learning platform. We are a community of passionate educators, industry experts, and ambitious students working together to create opportunities and unlock potential. Through our structured programs, competitive challenges, expert sessions, and awareness initiatives, we have impacted thousands of students across multiple colleges.
                        </p>
                        <p className="text-lg">
                            We believe that every student deserves access to quality education, mentorship, and opportunities. That's why we continue to expand our reach, refine our programs, and stay committed to our core mission of empowering students for successful tech careers.
                        </p>
                    </div>
                </section>

                <section className="mb-16">
                    <h2 className="text-4xl font-bold text-[#0b2349] mb-12 text-center">Our Values</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-lg">
                            <Target className="text-[#0b2349] mb-4" size={48} />
                            <h3 className="text-2xl font-bold text-[#0b2349] mb-3">Mission-Driven</h3>
                            <p className="text-gray-600 leading-relaxed">
                                We are committed to making quality tech education accessible to every student, regardless of their background or resources.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-lg">
                            <Heart className="text-[#0b2349] mb-4" size={48} />
                            <h3 className="text-2xl font-bold text-[#0b2349] mb-3">Student-Centric</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Every decision we make, every program we design, is centered around what's best for our students and their future.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-lg">
                            <Lightbulb className="text-[#0b2349] mb-4" size={48} />
                            <h3 className="text-2xl font-bold text-[#0b2349] mb-3">Practical Learning</h3>
                            <p className="text-gray-600 leading-relaxed">
                                We believe in learning by doing. Our programs focus on hands-on experience and real-world application.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-lg">
                            <Users className="text-[#0b2349] mb-4" size={48} />
                            <h3 className="text-2xl font-bold text-[#0b2349] mb-3">Community First</h3>
                            <p className="text-gray-600 leading-relaxed">
                                We foster a supportive community where students learn from each other, grow together, and succeed as a team.
                            </p>
                        </div>
                    </div>
                </section>

                {/* <section className="bg-gradient-to-br from-[#0b2349] to-[#1a3a6b] text-white p-12 rounded-2xl">
                    <h2 className="text-4xl font-bold mb-8 text-center">Our Impact</h2>
                    <div className="grid md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-5xl font-bold mb-2">1000+</div>
                            <p className="text-xl text-gray-200">Students Trained</p>
                        </div>
                        <div>
                            <div className="text-5xl font-bold mb-2">20+</div>
                            <p className="text-xl text-gray-200">Colleges Reached</p>
                        </div>
                        <div>
                            <div className="text-5xl font-bold mb-2">50+</div>
                            <p className="text-xl text-gray-200">Sessions Conducted</p>
                        </div>
                        <div>
                            <div className="text-5xl font-bold mb-2">100+</div>
                            <p className="text-xl text-gray-200">Successful Outcomes</p>
                        </div>
                    </div>
                </section> */}
            </div>
        </div>
    )
}

export default About