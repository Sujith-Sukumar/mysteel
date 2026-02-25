"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/95 backdrop-blur-md">

      <div className="mx-auto flex max-w-7xl items-center justify-between pl-2 pr-4 sm:pr-8 py-0">

        {/* 🔹 Left Corner: Logo */}
        <div className="flex-shrink-0 mr-4">
          <Link href="/" className="flex items-center group">
            <Image
              src="/logo.png"
              alt="MySteel Logo"

              width={73}
              height={26}
              priority
              className="object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>
        </div>

        {/* 🔹 Center: Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}

                className={`group relative text-base font-bold transition-colors duration-200  
                  ${isActive ? "text-red-600" : "text-black hover:text-red-600"}`}
              >
                {link.name}

                <span
                  className={`absolute -bottom-[6px] left-0 h-[3px] rounded-t-full bg-red-600 transition-all duration-300
                  ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
                />
              </Link>
            );
          })}
        </div>

        {/* 🔹 Right Corner: Contact & CTA */}
        <div className="flex items-center gap-4">
          <Link
            href="/get-started"

            className="hidden md:block rounded-full bg-red-600 px-5 py-1 text-sm font-bold text-white shadow-md shadow-red-100 transition-all hover:bg-red-700 hover:shadow-red-200 active:scale-95"
          >
            Get Started
          </Link>

          {/* Mobile Menu Icon */}
          <button className="block md:hidden rounded-lg p-1 text-gray-700 hover:bg-gray-100 transition-colors">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

      </div>
    </nav>
  );
}