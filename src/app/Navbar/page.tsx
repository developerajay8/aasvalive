
"use client";

import React, { useState } from "react";
// import Image from "next/image";
// import { FaBars, FaTimes } from "react-icons/fa";

import logo from "../../../public/aasvaalogo.webp";
// import logo2 from "../../../public/aasvaalogo.webp";

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <nav className="bg-transparent bg-[#000000] py-4 px-6 md:px-12 max-w-[1341px] mx-auto flex justify-between items-center">
//       <div className="flex items-center">
//         <a href="/">
//       <Image src={logo} alt="Logo" width={120} height={50} className="cursor-pointer md:block hidden" /></a>
//       <a href="/"><Image src={logo2} alt="Logo" width={174} height={31} className="cursor-pointer md:hidden block" /></a>
//       </div>

//       <ul className="hidden lg:flex space-x-[50px] text-lg text-white font-handel ">
//         <li><a href="/" className="hover:text-gray-300">Home</a></li>
//         <li><a href="/about" className="hover:text-gray-300">About Us</a></li>
//         <li><a href="/services" className="hover:text-gray-300">Services</a></li>
//         <li><a href="/contact" className="hover:text-gray-300">Contact</a></li>

//       </ul>



//       <div className="lg:hidden z-50">
//         <button onClick={() => setMenuOpen(!menuOpen)}>
//           {menuOpen ? (
//             <FaTimes className="text-3xl text-black" onClick={() => setMenuOpen(false)}/> 
//           ) : (
//             <FaBars className="text-3xl text-white" /> 
//           )}
//         </button>
//       </div>

//       <div
//         className={`lg:hidden fixed top-0 left-0 w-full h-full p-10 bg-white flex flex-col space-y-8 transform ${
//           menuOpen ? "translate-x-0" : "-translate-x-full"
//         } transition-transform duration-300 ease-in-out z-40`}
//       >
//         <ul className="text-black text-2xl space-y-6 font-handel">
//           <li><a href="#" onClick={() => setMenuOpen(false)}>Home</a></li>
//           <li><a href="/about" onClick={() => setMenuOpen(false)}>About Us</a></li>
//           <li><a href="/services" onClick={() => setMenuOpen(false)}>Services</a></li>
//           <li><a href="/contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
//         </ul>


//       </div>
//     </nav>
//   );
// }








// "use client";

// import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes, FaAngleDown, FaAngleUp } from "react-icons/fa";
import Image from "next/image";

const Navbar: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // Services data
  const services = [
    { name: "Computer Vision", link: "/computervision" },
    { name: "Mobile App Development", link: "/appdevelopment" },
    { name: "AI & Machine Learning", link: "/aimachine" },
    { name: "Augmented Reality", link: "/ar" },
    { name: "CGI & 2D/3D Modeling", link: "/cgi2d3d" },
    { name: "Branding & Designing", link: "/brandinganddesigning" },
    { name: "ERP Solutions", link: "/erpsolution" },
    
    
  ];

  return (
    <nav className="bg-transparent bg-[#000000]  text-white relative z-50  max-w-[1341px] mx-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src={logo}
                alt="Logo"
                width={150}
                height={80}
                className="cursor-pointer"
              />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Right: Desktop Menu */}
          <div className="hidden md:flex space-x-9  text-lg text-white font-handel">
            <Link href="/" className="hover:text-gray-300">
              Home
            </Link>
            <Link href="/about" className="hover:text-gray-300">
              About Us
            </Link>
            <div className="relative flex gap-5">
            <Link href={"/services"}>Services</Link>
              <button
                onClick={(e) => {
                  e.preventDefault(); // Prevent default link navigation
                  setIsDropdownOpen(!isDropdownOpen);
                }}
                className="hover:text-gray-300 flex items-center space-x-1 focus:outline-none"
              >
                {isDropdownOpen ? <FaAngleUp /> : <FaAngleDown />}
              </button>
              {isDropdownOpen && (
                <div
                  className="absolute right-0 mt-9 w-[240px] bg-white text-black rounded-md shadow-lg z-50 grid grid-cols-1 gap-2 p-4"
                >
                  {services.map((service, index) => (
                    <Link
                      href={service.link}
                      key={index}
                      className="block px-2 py-1 text-[16px] font-poppins hover:bg-gray-100 rounded"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>


            <Link href="/contact" className="hover:text-gray-300">
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-800">
          <Link href="/" className="block px-4 py-2 hover:bg-gray-700">
            Home
          </Link>
          <Link href="/about" className="block px-4 py-2 hover:bg-gray-700">
            About Us
          </Link>
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="block px-4 py-2 hover:bg-gray-700 w-full text-left focus:outline-none"
            >
              Services
            </button>
            {isDropdownOpen && (
              <div className="mt-2 bg-gray-700 grid grid-cols-2 gap-4 p-4">
                {services.map((service, index) => (
                  <Link
                    href={service.link}
                    key={index}
                    className="block px-2 py-1 text-sm hover:bg-gray-600 rounded"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link href="/contact" className="block px-4 py-2 hover:bg-gray-700">
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
