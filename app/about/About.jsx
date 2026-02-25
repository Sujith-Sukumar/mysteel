import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <section className="relative overflow-hidden bg-white py-16 px-6 md:px-12 lg:px-24">
      {/* Decorative Background Pattern */}
      <div className="absolute top-0 right-0 -z-10 h-full w-full opacity-5">
        <svg width="100%" height="100%"><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/></pattern><rect width="100%" height="100%" fill="url(#grid)" /></svg>
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center gap-16 lg:flex-row">
          
          {/* Left Column: Visuals */}
          <div className="relative w-full lg:w-1/2">
            <div className="relative z-10 overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=2070&auto=format&fit=crop" 
                alt="Modern Steel Industry" 
                className="h-[500px] w-full object-cover transition-transform duration-500 hover:scale-105"
              />
             
            </div>
            {/* Red Accent Frame */}
            <div className="absolute -bottom-6 -left-6 -z-10 h-full w-full rounded-2xl border-4 border-red-600/20"></div>
          </div>

          {/* Right Column: Content */}
          <div className="space-y-8 lg:w-1/2">
            <div className="inline-block rounded-full bg-red-50 px-4 py-1 text-sm font-bold uppercase tracking-widest text-red-600">
              Who We Are
            </div>
            
            <h2 className="text-4xl font-extrabold leading-tight text-gray-900 md:text-5xl">
              Building Stronger Industries with <span className="text-red-600">Responsible Trading</span>
            </h2>
            
            <div className="space-y-5 text-lg leading-relaxed text-gray-600">
              <p>
                <span className="font-bold text-gray-900 uppercase">My Steel</span> is a premier metal and plastic scrap trading enterprise based in the UAE. We bridge the gap between waste and production through expert recycling.
              </p>
              
              <div className="flex items-start gap-4">
                <div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-red-600" />
                <p>Specializing in <span className="font-semibold text-gray-900">Iron Scrap</span> as a vital raw material for TMT steel production.</p>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-red-600" />
                <p>Vast network across the <span className="font-semibold text-gray-900">GCC region</span> ensuring domestic and international quality standards.</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <button className="rounded-full bg-red-600 px-5 py-4 font-bold text-white shadow-lg shadow-red-200 transition-all hover:bg-red-700 hover:shadow-red-300 active:scale-95">
              Learn More About US
              </button>
              {/* <button className="rounded-full border-2 border-gray-200 px-8 py-4 font-bold text-gray-900 transition-all hover:bg-gray-50">
                Contact Us
              </button> */}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;