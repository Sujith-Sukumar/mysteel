"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function KeyHighlights() {

    const features = [
        {
            title: "Iron Scrap for TMT Steel",
            desc: "Reliable feedstock for TMT bars and construction steel.",
            img: "/iron_scrap.png",
        },
        {
            title: "Reliable Logistics",
            desc: "Timely pickup & delivery across UAE & GCC.",
            img: "/logistics.png",
        },
        {
            title: "Multi-Metal & Plastic Scrap",
            desc: "Trading Iron, Copper, Aluminium & Plastic scrap.",
            img: "/multi_metal.png",
        },
        {
            title: "Quality & Compliance",
            desc: "Strict grading, testing & documentation.",
            img: "/quality.png",
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 50,
            scale: 0.95
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    return (
        <section className="bg-[#eef4fb] py-16 px-4">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
                        Why <span className="text-[#C0202F]">MySteel</span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 leading-relaxed">
                        Delivering quality scrap materials with trust, efficiency, and industry expertise.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
                >
                    {features.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            whileHover={{ y: -10 }}
                            className="bg-white rounded-2xl shadow-md p-5 text-center hover:shadow-xl transition min-h-[440px] flex flex-col items-center justify-center cursor-default"
                        >
                            <motion.div
                                animate={{
                                    y: [0, -10, 0],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: index * 0.2
                                }}
                                className="flex justify-center mb-4"
                            >
                                <Image
                                    src={item.img}
                                    alt={item.title}
                                    width={280}
                                    height={280}
                                    className="object-contain"
                                />
                            </motion.div>

                            <h3 className="text-xl font-bold text-[#C0202F] mb-3">
                                {item.title}
                            </h3>

                            <div className="w-12 h-1.5 bg-[#C0202F] mx-auto mb-4 rounded"></div>

                            <p className="text-gray-600 text-base leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}   