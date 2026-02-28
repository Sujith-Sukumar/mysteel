"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

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
      <nav className="sticky top-0 z-40 w-full border-b border-gray-100 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-8 h-16">
          
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logo.png"
              alt="MySteel Logo"
              width={80}
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

      {/* --- MOBILE SIDEBAR DRAWER --- */}
      {/* Dark Overlay backdrop */}
      <div
        className={`fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Sidebar Panel */}
      <div
        className={`fixed top-0 right-0 z-[101] h-screen w-[75%] max-w-[300px] bg-white p-6 shadow-2xl transition-transform duration-300 ease-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Close Button Header */}
          <div className="flex items-center justify-between mb-10">
            <Image src="/logo.png" alt="Logo" width={60} height={20} />
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 text-gray-500 hover:text-red-600 transition-colors"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => {
               const isActive = pathname === link.href; // Ensure it's defined here too
               return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-xl font-bold border-b border-gray-50 pb-2 transition-colors ${
                    isActive ? "text-[#C0202F]" : "text-gray-900"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Mobile CTA at bottom */}
          <div className="mt-auto pb-10">
            <Link
              href="/get-started"
              onClick={() => setIsOpen(false)}
              className="block w-full rounded-xl bg-red-600 py-4 text-center text-lg font-bold text-white shadow-lg shadow-red-200"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
