"use client"
import React, { useLayoutEffect, useRef } from 'react';
import KeyHighlights from './homepage/keyhighlights';
import AboutUs from './homepage/aboutus';
import ServiceOverview from './homepage/serviceOverview';
import ContactTeaser from './ContactTeaser';
import Footer from './Footer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

// Register plugins
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const Home = () => {
    const mainRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            // Initialize ScrollSmoother
            ScrollSmoother.create({
                smooth: 2,
                effects: true,
                normalizeScroll: true,
            });
        }, mainRef);

        return () => ctx.revert();
    }, []);

    return (
        <div id="smooth-wrapper" ref={mainRef}>
            <div id="smooth-content">
                <div className="relative h-[100vh] w-full overflow-hidden flex items-center">
                    {/* Background Image with Dark Overlay */}
                    <div
                        className="absolute inset-0 z-0 bg-black bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: 'url("/img/iron-scrap-img.jpg")' }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-[#C0202F]/50 z-10"></div>
                    </div>

                    {/* Hero Content */}
                    <div className="relative z-20 container mx-auto px-6 md:px-12 lg:px-24">
                        <div className="max-w-3xl text-left">
                            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 animate-fade-in">
                                MySteel – Trusted Scrap Trading & Supply
                            </h1>

                            <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
                                <span className="font-bold text-white">MySteel</span> is a trusted buyer and supplier of iron, copper, aluminium, and plastic scrap in the UAE, specializing in iron scrap for TMT steel manufacturing. We ensure competitive pricing, reliable logistics, and consistent quality for sustainable industrial growth.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="bg-[#C0202F] hover:bg-[#A01B27] text-white font-bold py-3 px-8 rounded-4xl shadow-lg transition duration-300 transform hover:scale-105 active:scale-95 text-center">
                                    Get a Quote
                                </button>
                                <button className="bg-transparent hover:bg-white/10 text-white font-bold py-3 px-8 rounded-4xl border-2 border-[#C0202F]/50 backdrop-blur-sm transition duration-300 transform hover:scale-105 active:scale-95 text-center">
                                    View Our Services
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <KeyHighlights />
                <AboutUs />
                <ServiceOverview />
                <ContactTeaser />
                <Footer />
            </div>
        </div>
    );
};

export default Home;
