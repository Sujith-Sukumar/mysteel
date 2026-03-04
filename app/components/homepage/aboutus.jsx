"use client";

import Image from "next/image";
import { motion } from "motion/react";
import Link from "next/link";

export default function AboutUs() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.25, 1, 0.5, 1],
            },
        },
    };

    return (
        <section className="relative w-full bg-background py-16 px-4 overflow-hidden">
            {/* Background Texture/Grid */}
            <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] -z-0 pointer-events-none">
                <svg width="100%" height="100%"><pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" /></pattern><rect width="100%" height="100%" fill="url(#grid-pattern)" /></svg>
            </div>

            <motion.div
                className="relative z-10 max-w-7xl mx-auto"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
            >
                {/* Header Section: Centered */}
                <div className="text-center mb-16 space-y-4">
                    <motion.div
                        variants={itemVariants}
                        className="inline-block rounded-full bg-primary/10 px-5 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-primary"
                    >
                        About MySteel
                    </motion.div>
                    <motion.h2
                        variants={itemVariants}
                        className="text-3xl md:text-5xl font-black text-foreground leading-tight tracking-tight"
                    >
                        Building Stronger Industries with <br />
                        <span className="text-primary">Responsible Scrap Trading</span>
                    </motion.h2>
                    <motion.div
                        variants={itemVariants}
                        className="w-20 h-1.5 bg-primary mx-auto rounded-full mt-6"
                    />
                </div>

                {/* Main Body Section: Split Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Column: Content */}
                    <motion.div
                        variants={itemVariants}
                        className="space-y-8 order-2 lg:order-1"
                    >
                        <div className="space-y-6">
                            <p className="text-foreground/80 text-xl leading-relaxed font-medium border-l-4 border-primary pl-6">
                                <span className="text-foreground font-extrabold uppercase tracking-tighter">My Steel</span> is a trusted scrap dealer and bulk trader operating across India.
                                We bridge industries by transferring large-scale loads from scrap sources directly to the companies that need them.
                            </p>
                            <p className="text-muted-foreground text-lg leading-relaxed pl-7">
                                Based in <strong className="text-foreground font-bold">India</strong>, we specialize in the sourcing and bulk supply of <strong className="text-foreground font-bold">HMS (Heavy Melting Scrap)</strong>, iron, copper, aluminium, plastic, and all grades of steel scrap. Our principal focus remains on <strong className="text-foreground font-bold">HMS scrap</strong> as a vital raw material for all steel production and heavy industrial applications.
                            </p>
                            <p className="text-muted-foreground text-lg leading-relaxed pl-7">
                                Our strong network of partners across India enables us to deliver bulk loads with competitive pricing, dependable logistics, and consistent quality — all while promoting sustainable industrial growth and full transparency.
                            </p>
                        </div>

                        <div className="pt-4 pl-7">
                            <Link href="/services">
                                <button className="cursor-pointer relative px-8 py-5 bg-primary text-white font-bold rounded-xl shadow-lg overflow-hidden group">

                                    <span className="relative z-10">
                                        Explore Our Services
                                    </span>

                                    <span className="absolute top-0 left-[-100%] h-full w-full bg-white/20 skew-x-12 transition-all duration-700 group-hover:left-[120%]"></span>

                                </button>
                            </Link>
                        </div>
                    </motion.div>

                    {/* Right Column: Visuals */}
                    <motion.div
                        variants={itemVariants}
                        className="relative order-1 lg:order-2"
                    >
                        <motion.div
                            className="relative z-10 overflow-hidden rounded-3xl shadow-[0_32px_64px_-16px_rgba(0,0,0,0.15)] border-4 border-card"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Image
                                src="/img/scrapyard.png"
                                alt="Scrap Yard Excavator"
                                width={800}
                                height={600}
                                className="w-full h-[400px] lg:h-[500px] object-cover transition-transform duration-1000 group-hover:scale-105"
                                priority
                            />
                        </motion.div>
                        {/* Abstract background accents */}
                        <div className="absolute -top-10 -right-10 -z-10 h-40 w-40 rounded-full bg-primary/10 blur-3xl"></div>
                        <div className="absolute -bottom-10 -left-10 -z-10 h-40 w-40 rounded-full bg-orange-100/10 blur-3xl"></div>
                    </motion.div>

                </div>
            </motion.div>
        </section>
    );
}
