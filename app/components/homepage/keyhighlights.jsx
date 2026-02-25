import Image from "next/image";

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


    return (
        <section className="bg-[#eef4fb] py-16 px-4 pb-16">
            <div className="max-w-7xl mx-auto">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {features.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-md p-5 text-center hover:shadow-xl transition min-h-[440px] flex flex-col items-center justify-center"
                        >
                            <div className="flex justify-center mb-4">
                                <Image
                                    src={item.img}
                                    alt={item.title}
                                    width={280}
                                    height={280}
                                    className="object-contain"
                                />
                            </div>

                            <h3 className="text-xl font-bold text-red-700 mb-3">
                                {item.title}
                            </h3>

                            <div className="w-12 h-1.5 bg-red-500 mx-auto mb-4 rounded"></div>

                            <p className="text-gray-600 text-base leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}   