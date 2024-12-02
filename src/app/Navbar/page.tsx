
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";

import logo from "../../../public/aasvaalogo.webp"; // Import your logo
import logo2 from "../../../public/aasvaalogo.webp"; // Import your logo

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-transparent bg-[#000000] py-4 px-6 md:px-12 max-w-[1341px] mx-auto flex justify-between items-center">
      {/* Logo Section */}
      <div className="flex items-center">
        <a href="/">
      <Image src={logo} alt="Logo" width={120} height={50} className="cursor-pointer md:block hidden" /></a>
      <a href="/"><Image src={logo2} alt="Logo" width={174} height={31} className="cursor-pointer md:hidden block" /></a>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden lg:flex space-x-[50px] text-lg text-white font-handel ">
        <li><a href="/" className="hover:text-gray-300">Home</a></li>
        <li><a href="/about" className="hover:text-gray-300">About Us</a></li>
        <li><a href="/services" className="hover:text-gray-300">Services</a></li>
        <li><a href="/contact" className="hover:text-gray-300">Contact</a></li>
        
      </ul>

      {/* Desktop Buttons */}
      

      {/* Mobile Hamburger and Cross Menu Button */}
      <div className="lg:hidden z-50">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <FaTimes className="text-3xl text-black" onClick={() => setMenuOpen(false)}/> // Cross (close) icon
          ) : (
            <FaBars className="text-3xl text-white" /> // Hamburger icon
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
          <li><a href="#" onClick={() => setMenuOpen(false)}>Home</a></li>
          <li><a href="/about" onClick={() => setMenuOpen(false)}>About Us</a></li>
          <li><a href="/services" onClick={() => setMenuOpen(false)}>Services</a></li>
          <li><a href="/contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
        </ul>

        {/* Mobile Buttons */}
       
      </div>
    </nav>
  );
}
