"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X, Phone, Mail, MessageSquare } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <nav className="sticky top-0 z-40 w-full border-b border-gray-100 bg-white/95 backdrop-blur-md py-1">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-8 h-16">

          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logo.png"
              alt="MySteel Logo"
              width={100}
              height={28}
              priority
              className="object-contain"
            />
          </Link>

          {/* 🔹 Desktop Links (Fixed isActive error) */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href; // Added this declaration
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`group relative text-md font-bold transition-colors duration-200   
                    ${isActive ? "text-[#C0202F]" : "text-black hover:text-[#C0202F]"}`}
                >
                  {link.name}
                  <span
                    className={`absolute -bottom-[2px] left-0 h-[2px] rounded-t-full bg-[#C0202F] transition-all duration-300
                    ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
                  />
                </Link>
              );
            })}
          </div>

          {/* Right Side / Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link
              href="/get-started"
              className="hidden md:block rounded-full bg-red-600 px-5 py-2 text-sm font-bold text-white transition-transform active:scale-95"
            >
              Get Started
            </Link>

            {/* Hamburger Button */}
            <button
              onClick={() => setIsOpen(true)}
              className="p-2 md:hidden text-gray-700 focus:outline-none"
              aria-label="Open Menu"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* --- MODERN MOBILE SIDEBAR DRAWER --- */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-md md:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Sidebar Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 z-[101] h-screen w-[70%] max-w-[300px] bg-[#0f0f0f] border-l border-white/10 shadow-2xl md:hidden overflow-hidden"
            >
              <div className="flex flex-col h-full p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-12">
                  <div className="relative h-8 w-24">
                    <Image
                      src="/logo.png"
                      alt="Logo"
                      fill
                      className="object-contain filter brightness-0 invert"
                    />
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2.5 rounded-full bg-white/5 text-white/70 hover:text-white hover:bg-white/10 transition-all border border-white/10"
                    aria-label="Close Menu"
                  >
                    <X size={24} />
                  </button>
                </div>

                {/* Navigation Links */}
                <nav className="flex flex-col space-y-4">
                  {navLinks.map((link, index) => {
                    const isActive = pathname === link.href;
                    return (
                      <motion.div
                        key={link.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + index * 0.05 }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setIsOpen(false)}
                          className={`group flex items-center justify-between py-2.5 px-4 rounded-xl transition-all duration-300 ${isActive
                              ? "bg-red-600/10 text-red-500 border border-red-500/20"
                              : "text-white/70 hover:text-white hover:bg-white/5"
                          }`}
                        >
                          <span className="text-lg font-semibold tracking-tight">
                            {link.name}
                          </span>
                          <div
                            className={`h-1.5 w-1.5 rounded-full bg-red-600 transition-all duration-300 ${isActive ? "opacity-100 scale-100" : "opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100"
                            }`}
                          />
                        </Link>
                      </motion.div>
                    );
                  })}
                </nav>

                {/* divider */}
                <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent my-8" />

                {/* Contact Info Section */}
                <div className="space-y-5 px-4 mb-8">
                  <p className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">
                    Connect With Us
                  </p>
                  <div className="space-y-3.5">
                    <a
                      href="tel:+919895122441"
                      className="flex items-center gap-3 text-white/60 hover:text-white transition-colors"
                    >
                      <Phone size={14} className="text-red-500" />
                      <span className="text-xs font-medium">
                        +91 98951 22441
                      </span>
                    </a>
                    <a href="mailto:info@mysteel.in" className="flex items-center gap-3 text-white/60 hover:text-white transition-colors">
                      <Mail size={14} className="text-red-500" />
                      <span className="text-xs font-medium">info@mysteel.in</span>
                    </a>
                  </div>
                </div>

                {/* Mobile CTA at bottom */}
                <div className="mt-auto space-y-4">
                  <Link
                    href="/get-started"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center gap-2 w-full rounded-xl bg-[#C0202F] py-3 text-center text-sm font-extrabold text-white shadow-xl shadow-red-900/40 active:scale-[0.98] transition-all"
                  >
                    <span>Get Started</span>
                    <MessageSquare size={16} />
                  </Link>
                  <p className="text-center text-[10px] text-white/20 font-medium">
                    © 2024 MySteel Scrap Trading. All rights reserved.
                  </p>
                </div>
              </div>

              {/* Decorative Background Elements */}
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-red-600/5 blur-[100px] pointer-events-none rounded-full" />
              <div className="absolute top-1/2 -left-20 w-40 h-40 bg-white/5 blur-[80px] pointer-events-none rounded-full" />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
