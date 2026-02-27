"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import {
  Anvil,
  Wind,
  Recycle,
  Truck,
  Factory,
  PackageSearch,
} from "lucide-react";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const services = [
  {
    id: "iron",
    title: "Iron Scrap Trading",
    description: (
      <>
        We specialize in <strong>ferrous scrap</strong>, including HMS, shredded
        steel, and industrial-grade iron scrap used as core feedstock in{" "}
        <strong>TMT steel bars</strong> and{" "}
        <strong>construction-grade steel</strong> manufacturing. Our iron scrap
        is carefully graded and prepared to meet the technical requirements of
        steel plants.
      </>
    ),
    image: "/img/iron-scrap-img.jpg",
    icon: Anvil,
  },
  {
    id: "copper",
    title: "Copper Scrap Trading",
    description: (
      <>
        We supply clean and graded <strong>copper scrap</strong> such as
        insulated wire, sheet, tube, and motor scrap for electrical, mechanical,
        and manufacturing industries across the GCC. Consistent quality and
        reliable availability help our clients maintain uninterrupted
        production.
      </>
    ),
    image: "/img/copper-scrap-img.jpeg",
    icon: Wind,
  },
  {
    id: "aluminium",
    title: "Aluminium Scrap Trading",
    description: (
      <>
        We provide{" "}
        <strong>aluminium sheets, extrusion, and casting scrap</strong> to
        foundries and recyclers for producing lightweight and durable
        components. Our aluminium scrap is sorted and processed to suit various
        industrial applications.
      </>
    ),
    image: "/img/aluminium-scrap-img.jpg",
    icon: PackageSearch,
  },
  {
    id: "plastic",
    title: "Plastic Scrap Trading",
    description: (
      <>
        We trade in <strong>sorted plastic scrap</strong> from industrial and
        commercial sources, including categories suitable for recycling and
        reprocessing. By supplying plastic scrap to recyclers and manufacturers,
        we help reduce landfill waste and support cost-effective production
        using recycled materials.
      </>
    ),
    image: "/img/plastic-scrap-img.jpg",
    icon: Recycle,
  },
  {
    id: "collection",
    title: "Scrap Collection & Processing",
    description: (
      <>
        We handle <strong>on-site collection, segregation, and grading</strong>{" "}
        of metal and plastic scrap. Our team ensures accurate classification to
        maximize material value and support efficient recycling processes, while
        maintaining safe and compliant handling procedures.
      </>
    ),
    image: "/img/plastic-scrap-img2.png",
    icon: Factory,
    gradient: "from-red-600 to-red-500",
  },
  {
    id: "disposal",
    title: "Industrial Material Disposal",
    description: (
      <>
        We partner with factories, workshops, and construction sites to manage{" "}
        <strong>safe and compliant disposal of metal and plastic scrap</strong>.
        Our solutions reduce environmental impact, free up space, and recover
        value from materials that would otherwise be discarded.
      </>
    ),
    image: "/img/Material_disposal-img.jpg",
    icon: Recycle,
    gradient: "from-gray-300 to-gray-200",
  },
  // {
  //   id: "logistics",
  //   title: "Logistics & Export Services",
  //   description: (
  //     <>
  //       We offer{" "}
  //       <strong>
  //         bulk scrap transportation, container supply, and export coordination
  //       </strong>
  //       , ensuring your materials reach local or international destinations
  //       securely and on schedule. Our logistics team manages documentation and
  //       coordination with carriers and ports where required.
  //     </>
  //   ),
  //   image: "/img/logistics-img.jpg",
  //   icon: Truck,
  //   gradient: "from-red-700 to-red-600",
  // },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 80, damping: 20, mass: 1 },
  },
};
const heroVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function ServicesPage() {
  const mainRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
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
        <div id="services" className="min-h-screen bg-gray-50 pb-20">
          {/* Hero Section */}
          <section className="relative bg-white border-b border-gray-200 py-24 overflow-hidden">
            <div className="absolute inset-0 bg-gray-50/50" />
            <motion.div
              className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={heroVariants}
            >
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 text-gray-900">
                Comprehensive Metal and Plastic Scrap
                <br className="hidden md:block" /> Trading Solutions
              </h1>
              <p className="mx-auto max-w-3xl text-lg md:text-xl text-gray-600 leading-relaxed">
                We provide a complete range of trading and recycling services for{" "}
                <strong className="text-[#C0202F]">
                  Iron, Copper, Aluminium, and Plastic scrap
                </strong>
                , designed to meet the sourcing and disposal needs of steel mills,
                foundries, recyclers, and industrial facilities.
              </p>
            </motion.div>
          </section>

          {/* Services Grid */}
          <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={service.id}
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-900/10"
                  >
                    {/* Image / Gradient Header */}
                    <div
                      className={`relative h-56 w-full ${service.gradient ? `bg-gradient-to-br ${service.gradient}` : "bg-gray-100"} overflow-hidden`}
                    >
                      {service.image ? (
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center opacity-20">
                          <Icon className="h-32 w-32 text-white" />
                        </div>
                      )}
                      {/* Floating Icon Badge */}
                      <div className="absolute bottom-4 left-4 rounded-full bg-white p-3 shadow-md border border-gray-100 transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-1">
                        <Icon className="h-6 w-6 text-[#C0202F]" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="mb-3 text-xl font-bold text-gray-900 group-hover:text-[#C0202F] transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="flex-1 text-gray-600 leading-relaxed text-[15px] md:text-base">
                        {service.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
