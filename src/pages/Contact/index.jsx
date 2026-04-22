import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useEffect, useState } from "react";
import { useAuth } from "../../auth/useAuth";
import axios from "axios";
import { api } from "../../auth/apiClient";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
        contact: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState("idle");

    const { user } = useAuth();

    useEffect(() => {
        if (user) {
            setFormData((prev) => ({
                ...prev,
                name: user.name || "",
                email: user.email || "",
            }));
        }
    }, [user]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus("idle");

        const payload = {
            name: formData.name,
            email: formData.email,
            contact: formData.contact,
            query: formData.message,
        };

        try {
            const response = await api.post("/contact", payload);

            console.log("Success:", response.data);

            setSubmitStatus("success");
            setFormData({ message: "", contact: "" });
        } catch (error) {
            console.error("Error:", error.response?.data || error.message);

            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-[#0b2239] text-white py-20 px-4">
                <div className="max-w-6xl mx-auto text-center">
                    <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
                    <p className="text-xl text-gray-200 max-w-3xl mx-auto">Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-6xl mx-auto px-4 py-20">
                <div className="grid md:grid-cols-2 gap-12">
                    {/* Left */}
                    <div>
                        <h2 className="text-3xl font-bold text-[#0b2239] mb-8">Get in Touch</h2>
                        <p className="text-gray-600 mb-8 leading-relaxed">Whether you're a student looking to join our programs, a college interested in hosting our awareness sessions, or just want to learn more about Codeup, we're here to help.</p>

                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <Mail className="text-[#0b2239]" size={24} />
                                <div>
                                    <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                                    <p className="text-gray-600">oneup.codeup@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <Phone className="text-[#0b2239]" size={24} />
                                <div>
                                    <h3 className="font-semibold text-gray-800 mb-1">Phone</h3>
                                    <p className="text-gray-600">+91 9352634485</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <MapPin className="text-[#0b2239]" size={24} />
                                <div>
                                    <h3 className="font-semibold text-gray-800 mb-1">Location</h3>
                                    <p className="text-gray-600">Jaipur</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Form */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg">
                        <h2 className="text-2xl font-bold text-[#0b2239] mb-6">Send us a Message</h2>

                        {submitStatus === "success" && (
                            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                                <p className="text-green-800 font-semibold">Message sent successfully!</p>
                                <p className="text-green-700 text-sm">We'll get back to you soon.</p>
                            </div>
                        )}

                        {submitStatus === "error" && (
                            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                                <p className="text-red-800 font-semibold">Something went wrong.</p>
                                <p className="text-red-700 text-sm">Please try again later.</p>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <input
                                type="text"
                                required
                                value={formData.name}
                                readOnly={user} // 👈 prevents editing if logged in
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                placeholder="Your name"
                                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#0b2239]"
                            />

                            <input
                                type="email"
                                required
                                value={formData.email}
                                readOnly={user}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                placeholder="your.email@example.com"
                                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#0b2239]"
                            />

                            <input
                                type="tel"
                                required
                                value={formData.contact}
                                onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                                placeholder="Your Contact"
                                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#0b2239]"
                            />

                            <textarea
                                required
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                rows={6}
                                placeholder="Tell us what's on your mind..."
                                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#0b2239]"
                            />

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full flex justify-center items-center gap-2 bg-[#0b2239] text-white py-3 rounded-lg hover:bg-[#081a2c] transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? (
                                    "Sending..."
                                ) : (
                                    <>
                                        <Send size={20} />
                                        Send Message
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
