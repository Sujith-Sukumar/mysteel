import React from 'react';
import Footer from './Footer';

const Home = () => {
    return (
            <div className="relative h-[100vh] w-full overflow-hidden flex items-center">
                {/* Background Image with Dark Overlay */}
                <div
                    className="absolute inset-0 z-0 bg-black bg-cover bg-center bg-no-repeat"
                    
                >
                    <div className="absolute inset-0 bg-black/60 z-10"></div>
                </div>

                {/* Hero Content */}
                <div className="relative z-20 container mx-auto px-6 md:px-12 lg:px-24">
                    <div className="max-w-3xl text-left">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 animate-fade-in">
                            Trusted Source for Quality Iron and Metal Scrap
                        </h1>

                        <p className="text-lg md:text-xl text-gray-200 mb-6 leading-relaxed">
                            Welcome to <span className="font-bold text-white">MySteel</span>, a leading buyer and supplier of Iron, Copper, Aluminium, and Plastic scrap in the UAE. With a strong focus on Iron scrap used in TMT steel manufacturing, we provide industries with reliable, high-quality raw materials for sustainable growth.
                        </p>

                        <p className="text-base md:text-lg text-gray-300 mb-8 leading-relaxed">
                            Our operations are built on transparency, trust, and technical expertise. Whether you are a steel manufacturer sourcing raw material or an industrial unit seeking responsible scrap disposal, MySteel ensures competitive pricing, timely logistics, and consistent material quality.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg shadow-lg transition duration-300 transform hover:scale-105 active:scale-95 text-center">
                                Get a Quote
                            </button>
                            <button className="bg-transparent hover:bg-white/10 text-white font-bold py-4 px-8 rounded-lg border-2 border-white/30 backdrop-blur-sm transition duration-300 transform hover:scale-105 active:scale-95 text-center">
                                View Our Services
                            </button>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Home;
