"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutUs() {
    return (
        <section className="relative w-full min-h-[500px] flex items-center overflow-hidden bg-white">
            {/* Background Image Container */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/img/scrapyard.png" // Using scrapyard.png from public/img
                    alt="Scrap Yard Excavator"
                    fill
                    className="object-cover object-right md:object-center"
                    priority
                />
                {/* White Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent z-10"></div>
            </div>

            <div className="relative z-20 max-w-7xl mx-auto px-6 py-20 w-full">
                <div className="max-w-xl">
                    {/* Section Label */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
                            <span className="text-[#C0202F]">About Us</span>
                        </h2>
                        {/* <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 leading-relaxed">
                            Delivering quality scrap materials with trust, efficiency, and industry expertise.
                        </p> */}
                    </motion.div>

                    <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                        Building Stronger Industries with Responsible Scrap Trading
                    </h2>

                    <div className="w-20 h-1 bg-gray-200 mb-8"></div>

                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                        MySteel is a trusted metal and plastic scrap trading and recycling company specializing in ferrous, non-ferrous, and plastic scrap, with a strong focus on iron scrap for TMT steel and heavy industries.
                    </p>

                    <p className="text-gray-600 text-lg leading-relaxed mb-10">
                        Our supplier and recycler network ensures quality materials that meet local and global standards while supporting sustainable and cost-efficient operations.
                    </p>

                    <button className="px-8 py-4 bg-[#D95D26] text-white font-bold rounded-lg shadow-lg hover:bg-[#c45322] transition-all transform hover:scale-105 active:scale-95">
                        Learn More About Us
                    </button>
                </div>
            </div>
        </section>
    );
}
