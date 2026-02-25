"use client";

import React from "react";
import { Phone, MessageSquare, ArrowRight, Mail } from "lucide-react";

const ContactTeaser = () => {
    return (
        <section className="relative overflow-hidden py-14 px-6 sm:px-12 lg:px-24 bg-white">
            {/* Background Ambient Glows - Branded Red */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[400px] h-[400px] bg-red-600 rounded-full blur-[100px] opacity-[0.07] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[400px] h-[400px] bg-gray-600 rounded-full blur-[100px] opacity-[0.07] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="relative group">
                    {/* Main Card with Glassmorphism - Compact padding */}
                    <div className="overflow-hidden relative flex flex-col lg:flex-row items-center justify-between gap-8 bg-white/[0.03] backdrop-blur-xl p-8 md:p-10 rounded-[1.5rem] border border-white/10 shadow-2xl transition-all duration-500 hover:border-red-500/30">

                        <div className="flex-1 space-y-6 text-center lg:text-left relative z-20">
                            <div className="space-y-3">
                                <span className="inline-block px-3 py-1 rounded-full bg-red-500/10 text-red-500 text-[10px] font-bold tracking-widest uppercase">
                                    Get in Touch
                                </span>
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-black tracking-tight leading-tight">
                                    Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-white to-red-400 animate-text-shimmer">Collaborate?</span>
                                </h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                                {/* Urgent Call Item */}
                                <div className="cursor-pointer group/item flex flex-col items-center lg:items-start gap-3 p-4 rounded-xl transition-colors hover:bg-white/5">
                                    <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-red-500/20 text-red-500">
                                        <Phone className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold text-gray-700  tracking-widest mb-0.5">Urgent Enquiries</p>
                                        <p className=" text-gray-800 font-semibold">Call +91-8098876765 or email hello@mysteel.com</p>
                                    </div>
                                </div>

                                {/* General Requirements Item */}
                                <div className="cursor-pointer group/item flex flex-col items-center lg:items-start gap-3 p-4 rounded-xl transition-colors hover:bg-white/5">
                                    <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-500/20 text-gray-500">
                                        <MessageSquare className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold text-gray-700  tracking-widest mb-0.5">General Requirements</p>
                                        <p className=" text-gray-800 font-semibold">Submit our online enquiry form.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex-shrink-0 relative z-20">
                            <button className=" cursor-pointer group relative flex items-center gap-3 px-6 py-4 bg-red-600 text-white rounded-2xl font-bold text-base transition-all duration-300 hover:bg-red-500 hover:shadow-[0_0_25px_rgba(220,38,38,0.4)] hover:-translate-y-1 active:scale-95 overflow-hidden">
                                <span className="relative z-10 flex items-center gap-2">
                                    Contact Us
                                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                                </span>
                                <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactTeaser;
