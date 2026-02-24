import React from "react";
import { FaYoutube, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-black text-gray-300 px-6 md:px-16 pt-14 pb-6">

            {/* TOP SECTION */}
            <div className="grid md:grid-cols-5 gap-10  pb-5">

                {/* Logo */}
                <div>
                    <h1 className="text-2xl font-semibold text-white flex items-center gap-2">
                        ♻ recykal
                    </h1>
                </div>

                {/* Products */}
                <div>
                    <h3 className="text-white font-semibold mb-4">Products</h3>
                    <ul className="space-y-2">
                        <li>DRS</li>
                        <li>Sustainability Suite</li>
                        <li>Marketplace</li>
                    </ul>
                </div>

                {/* At a Glance */}
                <div>
                    <h3 className="text-white font-semibold mb-4">At a Glance</h3>
                    <ul className="space-y-2">
                        <li>About Us</li>
                        <li>Work With Us</li>
                        <li>Brand Kit</li>
                    </ul>
                </div>

                {/* Legal */}
                <div>
                    <h3 className="text-white font-semibold mb-4">Legal</h3>
                    <ul className="space-y-2">
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="text-white font-semibold mb-4">Contact Us</h3>
                    <p>+91 77999 96255</p>
                    <p>support@recykal.com</p>
                </div>
            </div>

            {/* NEWSLETTER + SOCIAL */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-b border-gray-800 py-10">

                {/* Newsletter */}
                <div>
                    <h3 className="text-white mb-4 text-lg">
                        Join our newsletter
                    </h3>

                    <div className="flex items-center gap-4">

                        {/* Email Input */}
                        <input
                            type="email"
                            placeholder="Enter Your Email"
                            className="
      bg-[#0b0b0b]
      text-white
      placeholder-gray-500
      px-5
      py-3
      w-72
      rounded-2xl
      border border-gray-800
      outline-none
      focus:border-gray-600
      transition
    "
                        />

                        {/* Subscribe Button */}
                        <button
                            className="
      bg-gray-200
      text-black
      px-5
      py-3
      rounded-2xl
      font-medium
      hover:bg-white
      transition
    "
                        >
                            Subscribe
                        </button>

                    </div>
                </div>

                {/* Social Icons */}
                <div className="text-center md:text-right">
                    <p className="text-white mb-4">Socials</p>

                    <div className="flex gap-4 justify-center md:justify-end">
                        <div className="border border-gray-700 p-3 rounded-xl hover:bg-white hover:text-black transition">
                            <FaYoutube />
                        </div>

                        <div className="border border-gray-700 p-3 rounded-xl hover:bg-white hover:text-black transition">
                            <FaLinkedinIn />
                        </div>

                        <div className="border border-gray-700 p-3 rounded-xl hover:bg-white hover:text-black transition">
                            <FaInstagram />
                        </div>
                    </div>
                </div>
            </div>

            {/* COPYRIGHT */}
            <div className="text-center pt-6 text-sm text-gray-400">
                © Rapidue Technologies Pvt. Ltd. All rights reserved.
            </div>

        </footer>
    );
};

export default Footer;