import React, { useContext, useEffect, useState } from "react";
import Wrapper from "./style";
import { ArrowLeft, Calendar, Building2, Phone, Check, X, Code2, Globe, Cpu, Terminal } from "lucide-react";
import axios from "axios";
import { AuthContext } from "../../../auth/AuthProvider";

const Register = ({ closeModal }) => {

    const [mode, setMode] = useState("form");
    const [batches, setBatches] = useState([]);
    const [batch, setBatch] = useState(null);
    const [selectedBatchLabel, setSelectedBatchLabel] = useState("");

    const [errors, setErrors] = useState({});

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [college, setCollege] = useState("");
    const [phone, setPhone] = useState("");
    const [courseMode, setCourseMode] = useState("")
    const [loadingBatches, setLoadingBatches] = useState(true);
    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState("");

    const [course, setCourse] = useState(null);

    const { accessToken, user } = useContext(AuthContext);

    const courses = [
        {
            id: 1,
            label: "Modern Application Development using MERN",
            desc: "MongoDB, Express, React, Node",
            icon: <Code2 size={22} />
        },
        {
            id: 2,
            label: "E-commerce & App Solutions with PWA",
            desc: "JS + React Progressive Apps",
            icon: <Globe size={22} />
        },
        {
            id: 3,
            label: "Microservices Development",
            desc: "NodeJS & MongoDB Architecture",
            icon: <Cpu size={22} />
        },
        {
            id: 4,
            label: "Enterprise Solution using JAVA",
            desc: "Backend + Scalable Systems",
            icon: <Terminal size={22} />
        },
        {
            id: 5,
            label: "Cloud - Based Solutions & Applications with Salesforce",
            desc: "Backend + Scalable Systems",
            icon: <Terminal size={22} />
        }
    ];

    useEffect(() => {
        if (user) {
            setName(user.name || "");
            setEmail(user.email || "");
        }
    }, [user]);

    const inputClass = (error) =>
        `w-full border rounded-xl px-4 py-3 text-sm text-gray-800 bg-white placeholder:text-gray-400 outline-none transition
    ${error ? "border-red-500" : "border-gray-300 focus:border-[#0b2239"}`;

    const handleSubmit = async () => {
        const newErrors = {};

        if (!course) newErrors.course = "Please select a course";
        if (!name) newErrors.name = "Name required";
        if (!email) newErrors.email = "Email required";
        if (!college) newErrors.college = "College required";
        if (!courseMode) newErrors.mode = "Course Mode required";
        if (!phone || phone.length !== 10)
            newErrors.phone = "Valid phone required";

        setErrors(newErrors);
        if (Object.keys(newErrors).length !== 0) return;

        try {
            if (loading) return;
            setLoading(true);

            const PRICE = 999;
            const selectedCourse = courses.find(item => item.id === course);

            // 🟢 STEP 1: Try apply directly
            try {
                await axios.post(
                    `https://codeup.in/dev/v2/internship/apply`,
                    {
                        name,
                        email,
                        organization: college,
                        contact: "+91" + phone,
                        course: selectedCourse?.label,
                        mode: courseMode
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${accessToken}`,
                            "Content-Type": "application/json",
                        },
                    }
                );

                // ✅ Success → no payment needed
                setMode("success");
                return;

            } catch (err) {
                const message = err.response?.data?.message || err.response?.data?.error || "";
                // ❌ Already registered
                if (message.toLowerCase().includes("already")) {
                    setErrorMessage("You are already registered!");
                    setMode("error");
                    return;
                }

                // ❌ If NOT payment error → unknown error
                if (!message.toLowerCase().includes("points")) {
                    throw err;
                }

                // ✅ Payment required → continue below
            }

            // 🟢 STEP 2: Get points (optional but good UX)
            const pointsRes = await axios.get(
                "https://codeup.in/dev/v2/codeup-points",
                {
                    headers: { Authorization: `Bearer ${accessToken}` },
                }
            );

            const userPoints = pointsRes.data.points?.[0]?.points || 0;
            const remainingAmount = PRICE - userPoints;

            // 🟢 STEP 3: Create Razorpay order
            const { data } = await axios.post(
                "https://codeup.in/dev/v2/academies/create-order",
                { amount: remainingAmount > 0 ? remainingAmount : PRICE },
                {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                        "Content-Type": "application/json"
                    },
                }
            );

            const options = {
                key: "rzp_live_RNfkKNUdPB41hK",
                amount: data.amount,
                currency: "INR",
                name: "Codeup Internship",
                description: "Registration Fee",
                order_id: data.id,

                notes: {
                    userId: user?._id || user?.id,
                    user_id: user?._id || user?.id

                },

                handler: async function (response) {
                    try {
                        // 🟢 Apply after payment
                        await axios.post(
                            `https://codeup.in/dev/v2/internship/apply`,
                            {
                                name,
                                email,
                                organization: college,
                                contact: "+91" + phone,
                                course: selectedCourse?.label,
                                mode: courseMode,
                                payment_id: response.razorpay_payment_id
                            },
                            {
                                headers: {
                                    Authorization: `Bearer ${accessToken}`,
                                    "Content-Type": "application/json",
                                },
                            }
                        );

                        setMode("success");

                    } catch (err) {
                        const msg = err.response?.data?.message || "";

                        if (msg.toLowerCase().includes("already")) {
                            setErrorMessage("You are already registered");
                        } else {
                            setErrorMessage(msg || "Enrollment failed");
                        }

                        setMode("error");
                    }
                },

                modal: {
                    ondismiss: function () {
                        setLoading(false);
                    },
                },

                prefill: {
                    name,
                    email,
                    contact: "+91" + phone
                },

                theme: { color: "#0b2239" }
            };

            if (!window.Razorpay) {
                alert("Razorpay SDK not loaded");
                setLoading(false);
                return;
            }

            const razor = new window.Razorpay(options);
            razor.open();

        } catch (error) {
            console.log("FULL ERROR:", error.response?.data || error);

            setErrorMessage(
                error?.response?.data?.message ||
                "Enrollment failed. Please try again."
            );

            setMode("error");
        } finally {
            setLoading(false);
        }
    };
    return (
        <Wrapper className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden w-full max-w-[650px] max-h-[95vh] overflow-y-auto">

                {/* SUCCESS SCREEN */}
                {mode === "success" && (
                    <div className="p-6 md:p-10 text-center">

                        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#4bf48f] mx-auto flex items-center justify-center mb-5">
                            <Check className="text-white w-10 h-10" strokeWidth={3} />
                        </div>

                        <h2 className="text-xl font-bold text-gray-800 mb-2">
                            Registration Completed!
                        </h2>

                        <button
                            onClick={closeModal}
                            className="bg-[#0b2239] text-white font-semibold py-3 px-8 rounded-xl hover:opacity-90 transition"
                        >
                            Back to Home
                        </button>

                    </div>
                )}

                {/* ERROR SCREEN */}
                {mode === "error" && (
                    <div className="p-6 md:p-10 text-center">

                        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-red-500 mx-auto flex items-center justify-center mb-5">
                            <X className="text-white w-10 h-10" strokeWidth={3} />
                        </div>

                        <h2 className="text-xl font-bold text-gray-800 mb-8">
                            {errorMessage}
                        </h2>

                        <button
                            onClick={closeModal}
                            className="bg-[#0b2239] text-white font-semibold py-3 px-8 rounded-xl hover:opacity-90 transition"
                        >
                            {errorMessage?.toLowerCase().includes("already")
                                ? "Back to Home"
                                : "Try again later"}
                        </button>
                    </div>
                )}

                {/* FORM */}
                {mode === "form" && (
                    <>
                        {/* HEADER */}
                        <div className="bg-[#0b2239] px-8 py-6 text-white">

                            <button
                                onClick={closeModal}
                                className="flex items-center gap-2 text-blue-200 text-sm mb-4 hover:text-white"
                            >
                                <ArrowLeft size={16} /> Back
                            </button>

                            <h2 className="text-xl font-bold">
                                Registration for Summer Internship 2026
                            </h2>

                            <p className="text-blue-200 text-sm mt-1">
                                Fill your details and choose a course to enroll
                            </p>

                        </div>

                        {/* BODY */}
                        <div className="p-8 space-y-6">

                            {/* COURSE */}
                            <div>
                                <label className="flex items-center gap-2 text-sm font-semibold text-gray-800 mb-4">
                                    <Calendar size={14} />
                                    Select Course *
                                </label>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    {courses.map((item) => {
                                        const isSelected = course === item.id;

                                        return (
                                            <label
                                                key={item.id}
                                                className={`cursor-pointer p-5 rounded-2xl border transition-all duration-300 flex items-start gap-4
                                            ${isSelected
                                                        ? "border-[#0b2239] bg-[#0b2239]/5 shadow-lg"
                                                        : "border-gray-200 hover:border-[#0b2239] hover:shadow-md"
                                                    }`}
                                            >
                                                <input
                                                    type="radio"
                                                    name="course"
                                                    value={item.id}
                                                    checked={isSelected}
                                                    onChange={() => setCourse(item.id)}
                                                    className="mt-1 accent-[#0b2239]"
                                                />

                                                <div className="flex-1">
                                                    <h3 className="font-semibold text-gray-900 text-sm md:text-base">
                                                        {item.label}
                                                    </h3>
                                                </div>
                                            </label>
                                        );
                                    })}
                                </div>

                                {errors.course && (
                                    <p className="text-red-500 text-xs mt-2">{errors.course}</p>
                                )}
                            </div>

                            {/* MODE */}
                            <div>
                                <label className="text-sm font-semibold text-gray-800 mb-3 block">
                                    Mode of Learning *
                                </label>

                                <div className="flex gap-6">
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input
                                            type="radio"
                                            name="mode"
                                            value="online"
                                            checked={courseMode === "online"}
                                            onChange={() => setCourseMode("online")}
                                            className="accent-[#0b2239]"
                                        />
                                        Online
                                    </label>

                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input
                                            type="radio"
                                            name="mode"
                                            value="offline"
                                            checked={courseMode === "offline"}
                                            onChange={() => setCourseMode("offline")}
                                            className="accent-[#0b2239]"
                                        />
                                        Offline
                                    </label>
                                </div>

                                {errors.mode && (
                                    <p className="text-red-500 text-xs mt-2">{errors.mode}</p>
                                )}
                            </div>

                            {/* NAME + EMAIL */}
                            <div className="grid md:grid-cols-2 gap-5">
                                <div>
                                    <label className="text-sm font-semibold text-gray-800">
                                        Full Name *
                                    </label>

                                    <input
                                        className={inputClass(errors.name)}
                                        placeholder="Your full name"
                                        value={name}
                                    // onChange={(e) => setName(e.target.value)}
                                    />

                                    {errors.name && (
                                        <p className="text-red-500 text-xs mt-1">
                                            {errors.name}
                                        </p>
                                    )}

                                </div>

                                <div>

                                    <label className="text-sm font-semibold text-gray-800">
                                        Email Address *
                                    </label>

                                    <input
                                        type="email"
                                        className={inputClass(errors.email)}
                                        placeholder="you@email.com"
                                        value={email}
                                    // onChange={(e) => setEmail(e.target.value)}
                                    />

                                    {errors.email && (
                                        <p className="text-red-500 text-xs mt-1">
                                            {errors.email}
                                        </p>
                                    )}

                                </div>
                            </div>

                            {/* COLLEGE */}
                            <div>

                                <label className="flex items-center gap-2 text-sm font-semibold text-gray-800 mb-1">
                                    <Building2 size={14} />
                                    College Name *
                                </label>

                                <input
                                    className={inputClass(errors.college)}
                                    placeholder="Your college / university name"
                                    value={college}
                                    onChange={(e) => setCollege(e.target.value)}
                                />

                                {errors.college && (
                                    <p className="text-red-500 text-xs mt-1">
                                        {errors.college}
                                    </p>
                                )}

                            </div>

                            {/* PHONE */}
                            <div>

                                <label className="flex items-center gap-2 text-sm font-semibold text-gray-800 mb-1">
                                    <Phone size={14} />
                                    Phone Number *
                                </label>

                                <div className="flex items-center rounded-xl px-4 py-3 bg-white border border-gray-300 focus-within:border-codeup-blue">

                                    <span className="text-gray-500 mr-3 text-sm font-medium">
                                        +91
                                    </span>

                                    <input
                                        type="text"
                                        className="w-full outline-none text-sm text-gray-800 bg-transparent"
                                        placeholder="9876543210"
                                        maxLength={10}
                                        value={phone}
                                        onChange={(e) =>
                                            setPhone(e.target.value.replace(/\D/g, ""))
                                        }
                                    />

                                </div>

                                {errors.phone && (
                                    <p className="text-red-500 text-xs mt-1">
                                        {errors.phone}
                                    </p>
                                )}

                            </div>

                            {/* SUBMIT */}
                            <button
                                onClick={handleSubmit}
                                disabled={loading}
                                className={`w-full font-semibold py-4 rounded-xl transition
                            ${loading
                                        ? "bg-gray-400 cursor-not-allowed"
                                        : "bg-[#0b2239] hover:opacity-90 text-white"
                                    }`}
                            >
                                {loading ? "Enrolling..." : "Secure your seat ₹999"}
                            </button>

                        </div>
                    </>
                )}

            </div>
        </Wrapper>
    );
};

export default Register;