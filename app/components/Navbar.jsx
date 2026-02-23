"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold transition-transform group-hover:scale-110">
            M
          </div>
          <span className="text-xl font-bold tracking-tight text-gray-900">
            MySteel
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative text-sm font-medium transition-colors hover:text-blue-600 ${
                  isActive ? "text-blue-600" : "text-gray-600"
                }`}
              >
                {link.name}
                {/* Animated Underline */}
                {isActive && (
                  <span className="absolute -bottom-[21px] left-0 h-[2px] w-full bg-blue-600" />
                )}
              </Link>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="flex items-center gap-4">
          <button className="hidden md:block rounded-full bg-gray-900 px-5 py-2 text-sm font-medium text-white transition-all hover:bg-gray-800 active:scale-95">
            Get Started
          </button>
          
          {/* Mobile Menu Icon (Placeholder) */}
          <button className="block md:hidden text-gray-600">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}