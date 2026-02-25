"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Anvil,
  Wind,
  Recycle,
  Truck,
  Factory,
  PackageSearch,
} from "lucide-react";

const shortServices = [
  {
    id: "iron",
    title: "Iron Scrap Trading",
    description:
      "HMS, shredded steel, and industrial iron scrap for TMT and construction steel production.",
    image: "/img/iron_serviceOverview.png",
    icon: Anvil,
    gradient: "from-gray-100 to-gray-50",
    iconColor: "text-gray-800",
  },
  {
    id: "copper",
    title: "Copper Scrap Trading",
    description:
      "Clean, graded copper scrap for electrical and mechanical applications.",
    image: "/img/copper-serviceOverview.png",
    icon: Wind,
    gradient: "from-orange-50 to-orange-100/50",
    iconColor: "text-orange-600",
  },
  {
    id: "aluminium",
    title: "Aluminium Scrap Trading",
    description:
      "Sheets, extrusion, and casting scrap for lightweight components.",
    image: "/img/aluminium-serviceOverview.png",
    icon: PackageSearch,
    gradient: "from-blue-50 to-blue-100/50",
    iconColor: "text-blue-600",
  },
  {
    id: "plastic",
    title: "Plastic Scrap Trading",
    description:
      "Collection and supply of sorted plastic scrap for recycling and manufacturing, supporting circular economy practices.",
    image: "/img/plastic-serviceOverview.png",
    icon: Recycle,
    gradient: "from-green-50 to-green-100/50",
    iconColor: "text-green-600",
  },
  {
    id: "collection",
    title: "Scrap Collection & Processing",
    description:
      "On-site collection, segregation, and grading for maximum material value.",
    image: "/img/scrapCollection-serviceOverview.png",
    icon: Factory,
    gradient: "from-red-50 to-red-100/50",
    iconColor: "text-red-600",
  },
  {
    id: "logistics",
    title: "Logistics & Export Services",
    description:
      "Bulk transport, container handling, and export coordination across regions.",
    image: "/img/logistics-serviceOverview.png",
    icon: Truck,
    gradient: "from-slate-50 to-slate-100/50",
    iconColor: "text-slate-700",
  },
];

const headerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 80, damping: 20, mass: 1 },
  },
};

export default function ServiceOverview() {
  return (
    <section className="py-24 bg-white border-b border-gray-100 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 inset-x-0 h-64 bg-gradient-to-b from-gray-50 to-transparent pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={headerVariants}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
            Our Trading &amp; Recycling Services
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            We offer a wide range of scrap trading and recycling solutions
            tailored to steel mills, foundries, manufacturers, and recyclers.
          </p>
        </motion.div>

        {/* 3x2 Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {shortServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="group p-8 rounded-2xl bg-white border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-gray-200/50 hover:-translate-y-1 hover:border-transparent flex flex-col h-full"
              >
                <div className="relative h-48 w-full mb-6">
                  {service.image ? (
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-contain transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  ) : (
                    <div
                      className={`absolute inset-0 flex items-center justify-center rounded-xl bg-gradient-to-br ${service.gradient}`}
                    >
                      <Icon className={`h-12 w-12 ${service.iconColor}`} />
                    </div>
                  )}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-relaxed flex-1 text-[15px]">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Action Button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link
            href="/services"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white transition-all duration-300 rounded-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 hover:shadow-lg hover:shadow-red-600/30 hover:-translate-y-0.5"
          >
            View All Services
            <svg
              className="w-5 h-5 ml-2 -mr-1 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
