import Image from "next/image";

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
                    <h4 className="text-[#C0202F] font-bold tracking-wider uppercase mb-2 text-sm">
                        About Us
                    </h4>

                    <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                        Building Stronger Industries with Responsible Scrap Trading
                    </h2>

                    <div className="w-20 h-1 bg-gray-200 mb-8"></div>

                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                        MySteel is a reputable metal and plastic scrap trading and recycling enterprise.
                        We specialize in the sourcing, processing, and distribution of ferrous, non-ferrous,
                        and plastic scrap, with a principal focus on <strong className="text-gray-800">Iron scrap</strong> as a vital
                        raw material for TMT steel production and heavy industrial applications.
                    </p>

                    <p className="text-gray-600 text-lg leading-relaxed mb-10">
                        Our network of suppliers, factories, and recyclers enables us to deliver materials
                        that meet domestic and international standards while promoting sustainability and
                        cost efficiency.
                    </p>

                    <button className="px-8 py-4 bg-[#D95D26] text-white font-bold rounded-lg shadow-lg hover:bg-[#c45322] transition-all transform hover:scale-105 active:scale-95">
                        Learn More About Us
                    </button>
                </div>
            </div>
        </section>
    );
}
