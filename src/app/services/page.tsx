"use client";

import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

interface FAQ {
  question: string;
  answer: string;
}

import React from "react";
import Image from "next/image";
import group89 from "../../../public/services.png";
import {
  FaMobileAlt,
  FaRobot,
  FaCogs,
  FaPaintBrush,
  FaCameraRetro,FaEye
} from "react-icons/fa";

import { FaRocket, FaBolt, FaLock, FaSync, FaChartLine } from "react-icons/fa";
import Footer from "../Footer/page";
import Navbar from "../Navbar/page";
import Link from "next/link";

export default function Page() {
  const services = [
    {
      title: "Computer Vision",
      description:
        "Computer Vision allows computers to analyze and interpret visual information from the world.",
      icon: <FaCameraRetro className="text-green-600 text-4xl" />,
      href: "/computervision", // New attribute for route
    },
    {
      title: "Mobile App Development",
      description:
        "Custom mobile solutions for iOS and Android to keep you ahead in the game.",
      icon: <FaMobileAlt className="text-green-600 text-4xl" />,
      href: "/appdevelopment", // New attribute for route
    },
    {
      title: "AI & Machine Learning",
      description:
        "Leverage the power of AI to automate processes and gain actionable insights.",
      icon: <FaRobot className="text-red-600 text-4xl" />,
      href: "/aimachine", // New attribute for route
    },
    {
      title: "Augmented Reality",
      description:
        "Harness the potential of AR to create immersive experiences and enhance real-world interactions.",
      icon: <FaEye className="text-blue-600 text-4xl" />,  // You can use a different icon like FaEye or another relevant one
      href: "/ar", // New attribute for the AR route
    },
    {
      title: "CGI & 2D/3D Modeling",
      description:
        "High-quality computer-generated imagery (CGI) and 2D/3D modeling for visual storytelling.",
      icon: <FaCogs className="text-blue-600 text-4xl" />, // Icon for CGI & 2D/3D
      href: "/cgi2d3d", // New attribute for route
    },
    {
      title: "Branding & Designing",
      description:
        "Creating impactful brand identities through strategic design and innovative visuals.",
      icon: <FaPaintBrush className="text-red-600 text-4xl" />, // Icon for Branding & Designing
      href: "/brandinganddesigning", // New attribute for route
    },
    {
      title: "ERP Solutions",
      description:
        "Streamline your business processes with custom ERP solutions for better efficiency.",
      icon: <FaChartLine className="text-teal-600 text-4xl" />, // Icon for ERP Solutions
      href: "/erpsolution", // New attribute for route
    }
  ];


  const features = [
    {
      title: "Scalability",
      description:
        "Easily scale your business processes with our adaptive technology solutions.",
      icon: <FaRocket className="text-indigo-600 text-5xl mb-4" />,
    },
    {
      title: "Speed",
      description:
        "Deliver projects faster with cutting-edge tools and optimized workflows.",
      icon: <FaBolt className="text-blue-600 text-5xl mb-4" />,
    },
    {
      title: "Security",
      description:
        "Secure your data and digital assets with robust cybersecurity measures.",
      icon: <FaLock className="text-green-600 text-5xl mb-4" />,
    },
    {
      title: "Reliability",
      description:
        "Our solutions ensure 99.99% uptime and consistent performance.",
      icon: <FaSync className="text-yellow-600 text-5xl mb-4" />,
    },
    {
      title: "Growth-Oriented",
      description:
        "Empower your business to grow with data-driven and innovative strategies.",
      icon: <FaChartLine className="text-red-600 text-5xl mb-4" />,
    },
  ];



  const faqs: FAQ[] = [
    {
      question: "How long does a project take?",
      answer:
        "Project timelines depend on complexity, but typically range from a few weeks to a few months.",
    },
    {
      question: "Do you offer maintenance services?",
      answer:
        "Yes, we provide ongoing support and maintenance for all our projects.",
    },
    {
      question: "What technologies do you use?",
      answer:
        "We work with modern tools and frameworks like React, Angular, Node.js, AWS, and more.",
    },
    {
      question: "Can I customize the services?",
      answer:
        "Absolutely! All our services are tailored to meet your specific needs.",
    },
  ];

  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <div className="w-full mx-auto">
      <div className="bg-[#1e1e1e] w-full">
        <Navbar />
      </div>

      <div className="relative">
        {/* Background Image */}
        <Image
          src={group89}
          alt="Logo"
          className="w-full h-[50vh] sm:h-[60vh] lg:h-[100vh] object-cover"
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 px-4 sm:px-6">
          {/* Heading */}
          <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl mb-6 font-handel text-center">
            Services
          </h1>

          {/* Navigation Links */}
          <div className="flex justify-center items-center space-x-4">
            {/* Home Link */}
            <div className="px-4 py-2 text-sm sm:text-base lg:text-lg hover:underline uppercase text-white font-semibold rounded-md cursor-pointer">
              <Link href="/">Home</Link>
            </div>

            {/* About Us Link */}
            <div className="px-4 py-2 text-sm sm:text-base lg:text-lg uppercase font-semibold text-white rounded-md cursor-pointer">
              services
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white ">
        <section className="py-16 max-w-[1204px] mx-auto ">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
              Our Services
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Explore our wide range of services designed to empower your
              business with technology.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Link href={service.href} key={index} className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300">
                  <div className="flex justify-center mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-center">
                    {service.description}
                  </p>

                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>

      <div className="">
        <section className="py-16 bg-gradient-to-r from-gray-50 to-gray-100">
          <div className="container max-w-[1204px] mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Features & Benefits
            </h2>
            <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
              Discover the key advantages of choosing our technology-driven
              services, designed to drive your success.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transform hover:scale-105 transition duration-300"
                >
                  <div className="flex justify-center">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>



      <div className="">
        <section className="py-16 bg-gray-50">
          <div className="container max-w-[1204px] mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
              Frequently Asked Questions
            </h2>
            <div className=" mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`border rounded-lg transition-all duration-300 ${expanded === index ? "bg-white shadow-md" : "bg-gray-100"
                    }`}
                >
                  <button
                    onClick={() =>
                      setExpanded(expanded === index ? null : index)
                    }
                    className="flex items-center justify-between w-full p-4 text-left"
                  >
                    <span className="text-lg font-medium text-gray-800">
                      {faq.question}
                    </span>
                    {expanded === index ? (
                      <FaChevronUp className="text-gray-600" />
                    ) : (
                      <FaChevronDown className="text-gray-600" />
                    )}
                  </button>
                  {expanded === index && (
                    <div className="px-4 pb-4 text-gray-600">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* <section className="bg-black text-white py-16">
        <div className="max-w-[1204px] mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to elevate your business?
          </h2>
          <p className="text-lg sm:text-xl mb-8 text-gray-400">
            Take the first step toward transformation. Contact us today or
            schedule a free consultation!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/contact"
              className="px-8 py-3 bg-white text-black font-semibold rounded-lg shadow-lg hover:bg-gray-200 transition duration-300"
            >
              Contact Us
            </a>
            <a
              href="/consultation"
              className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition duration-300"
            >
              Free Consultation
            </a>
          </div>
        </div>
      </section> */}

      <div className="">
        <section className="bg-black text-white w-full mx-auto py-16">
          <div className="max-w-[1204px] mx-auto px-6 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to elevate your business?
            </h2>
            <p className="text-lg sm:text-xl mb-8 text-gray-400">
              Take the first step toward transformation. Contact us today or explore more about our offerings!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/contact"
                className="px-8 py-3 bg-white text-black font-semibold rounded-lg shadow-lg hover:bg-gray-200 transition duration-300"
              >
                Contact Us
              </a>

            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
