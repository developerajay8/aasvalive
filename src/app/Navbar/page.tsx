"use client"; // For client-side rendering in Next.js

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../../public/aasvaalogo.webp"; // Import your logo

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#000000] py-4 px-6 md:px-12 max-w-[1341px] mx-auto flex justify-between items-center">
      {/* Logo Section */}
      <div className="flex items-center">
        <Link href="/">
          <Image src={logo} alt="Aasvaa Logo" width={120} height={50} className="cursor-pointer hidden md:block" priority />
        </Link>
        <Link href="/">
          <Image src={logo} alt="Aasvaa Logo" width={174} height={31} className="cursor-pointer md:hidden block" priority />
        </Link>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden lg:flex space-x-[50px] text-lg text-white font-handel">
        <li><Link href="/" className="hover:text-gray-300">Home</Link></li>
        <li><Link href="/about" className="hover:text-gray-300">About Us</Link></li>
        <li><Link href="/services" className="hover:text-gray-300">Services</Link></li>
        <li><Link href="/contact" className="hover:text-gray-300">Contact</Link></li>
      </ul>

      {/* Mobile Hamburger and Cross Menu Button */}
      <div className="lg:hidden z-50">
        <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation menu">
          {menuOpen ? (
            <FaTimes className="text-3xl text-white" />
          ) : (
            <FaBars className="text-3xl text-white" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-0 left-0 w-full h-full p-10 bg-white flex flex-col space-y-8 transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-40`}
      >
        <ul className="text-black text-2xl space-y-6 font-handel">
          <li><Link href="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link href="/about" onClick={() => setMenuOpen(false)}>About Us</Link></li>
          <li><Link href="/services" onClick={() => setMenuOpen(false)}>Services</Link></li>
          <li><Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}
