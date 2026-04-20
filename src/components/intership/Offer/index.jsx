import { ChevronRight, Clock } from 'lucide-react'
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../../auth/AuthProvider';
import Register from '../Register';
import { createPortal } from 'react-dom';

const Offer = () => {

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
    }, [accessToken])

    const handleEnroll = () => {

        if (!accessToken) {
            localStorage.setItem("openRegister", "true");

            login();
            return;
        }

        setRegisterModal(true);
    };

    return (
        <section className="py-20 bg-white">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <div className="bg-gradient-to-br from-[#0b2239] to-[#1a3a5c] rounded-3xl p-12 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                    <div className="relative z-10">
                        <Clock className="mx-auto mb-6" size={48} />
                        <h2 className="text-4xl font-bold mb-4 md:text-5xl">Limited Time Offer</h2>
                        <p className="md:text-xl mb-8 text-teal-500">
                            Batches are starting from May
                        </p>
                        <p className="md:text-xl mb-8 text-white/90">
                            Grab your early bird discount. Only available for the first 100 enrollments!
                        </p>
                        <div className="flex flex-col sm:flex-row gap-10 justify-center items-center">
                            <div className="text-left">
                                <div className="text-md">Online Batch Price</div>
                                <div className="text-5xl font-bold ">₹999</div>
                            </div>
                            {/* <ChevronRight className="rotate-90 sm:rotate-0" size={32} /> */}
                            <div className="text-left">
                                <div className="text-md">Offline Batch Price</div>
                                <div className="text-5xl font-bold">₹3,499</div>
                            </div>
                        </div>
                        <button className="mt-8 bg-white text-[#0b2239] px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-2xl" onClick={handleEnroll}>
                            Claim your spot now!
                        </button>
                        {registerModal && createPortal(
                            <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 overflow-y-auto">

                                <div className="min-h-screen flex items-start md:items-center justify-center p-2 md:p-6">

                                    <div className="w-[650px] h-full md:h-auto bg-white rounded-2xl shadow-xl overflow-y-auto">
                                        <Register closeModal={() => setRegisterModal(false)} />
                                    </div>
                                </div>
                            </div>,
                            document.body
                        )}

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Offer