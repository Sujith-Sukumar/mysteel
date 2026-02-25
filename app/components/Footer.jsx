import React from "react";
import { FaYoutube, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";


const Footer = () => {
    return (
        <footer className="bg-black text-gray-300 px-6 sm:px-10 lg:px-16 pt-14 pb-6">

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

                <div className="-mt-8">
                    <Link href="/" className="flex items-center group">
                        <Image
                            src="/logo.png"
                            alt="MySteel Logo"
                            width={140}
                            height={10}
                            priority
                            className="object-contain transition-transform duration-300 group-hover:scale-105"
                        />
                    </Link>
                </div>

                <div className="grid grid-cols-2 gap-8 lg:contents">

                    <div className="space-y-3">
                        <h3 className="text-white font-semibold">Products</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li>DRS</li>
                            <li>Sustainability Suite</li>
                            <li>Marketplace</li>
                        </ul>
                    </div>

                    <div className="space-y-3">
                        <h3 className="text-white font-semibold">At a Glance</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li>About Us</li>
                            <li>Work With Us</li>
                            <li>Brand Kit</li>
                        </ul>
                    </div>

                </div>

                <div className="grid grid-cols-2 gap-8 lg:contents">

                    <div className="space-y-3">
                        <h3 className="text-white font-semibold">Legal</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li>Privacy Policy</li>
                            <li>Terms & Conditions</li>
                        </ul>
                    </div>

                    <div className="space-y-3">
                        <h3 className="text-white font-semibold">Contact Us</h3>
                        <p>+91 77999 96255</p>
                        <p>support@mysteel.com</p>
                    </div>

                </div>

            </div>

            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10 py-10 border-b border-gray-800">

                <div className="w-full">
                    <h3 className="text-white text-lg mb-4 ">
                        {/* Join our newsletter */}
                    </h3>

                    <div className="flex flex-col sm:flex-row gap-4 max-w-md">
                        <input
                            type="email"
                            placeholder="Enter Your Email"
                            className="bg-[#0b0b0b] text-white placeholder-gray-500 px-6 py-3 rounded-2xl border border-gray-800 outline-none focus:border-gray-600 w-full"
                        />

                        <button className="bg-gray-200 text-black px-6 py-3 rounded-2xl font-medium hover:bg-white transition whitespace-nowrap">
                            Contact Us
                        </button>
                    </div>
                </div>

                <div className="w-full lg:w-auto text-center lg:text-center">

                    <p className="text-white mb-5">
                        Socials
                    </p>

                    <div className="flex justify-center lg:justify-end gap-5 "
                    >
                        <div className="border border-gray-700 p-4 rounded-2xl hover:bg-white hover:text-black transition cursor-pointer">
                            <FaYoutube size={18} />
                        </div>

                        <div className="border border-gray-700 p-4 rounded-2xl hover:bg-white hover:text-black transition cursor-pointer">
                            <FaLinkedinIn size={18} />
                        </div>

                        <div className="border border-gray-700 p-4 rounded-2xl hover:bg-white hover:text-black transition cursor-pointer">
                            <FaInstagram size={18} />
                        </div>
                    </div>

                </div>
            </div>

            <div className="text-center pt-6 text-sm text-gray-400">
                © Mysteel Pvt. Ltd. All rights reserved.
            </div>

        </footer>
    );
};

export default Footer;