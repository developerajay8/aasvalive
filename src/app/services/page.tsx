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
  FaCode,
  FaMobileAlt,
  FaCloud,
  FaRobot,
  FaCogs,
  FaPaintBrush,
  FaShareAlt,
  FaEdit,
} from "react-icons/fa";

import { FaRocket, FaBolt, FaLock, FaSync, FaChartLine } from "react-icons/fa";
import Footer from "../Footer/page";
import Navbar from "../Navbar/page";

export default function Page() {
  const services = [
    {
      title: "Web Development",
      description:
        "Build robust, responsive, and visually stunning websites tailored to your needs.",
      icon: <FaCode className="text-blue-600 text-4xl" />,
    },
    {
      title: "Mobile App Development",
      description:
        "Custom mobile solutions for iOS and Android to keep you ahead in the game.",
      icon: <FaMobileAlt className="text-green-600 text-4xl" />,
    },
    {
      title: "Cloud Computing",
      description:
        "Scalable cloud solutions to boost your business performance and flexibility.",
      icon: <FaCloud className="text-purple-600 text-4xl" />,
    },
    {
      title: "AI & Machine Learning",
      description:
        "Leverage the power of AI to automate processes and gain actionable insights.",
      icon: <FaRobot className="text-red-600 text-4xl" />,
    },
    {
      title: "CGI & 2D/3D Modeling",
      description:
        "High-quality computer-generated imagery (CGI) and 2D/3D modeling for visual storytelling.",
      icon: <FaCogs className="text-blue-600 text-4xl" />, // Icon for CGI & 2D/3D
    },
    {
      title: "Branding & Designing",
      description:
        "Creating impactful brand identities through strategic design and innovative visuals.",
      icon: <FaPaintBrush className="text-red-600 text-4xl" />, // Icon for Branding & Designing
    },
    {
      title: "Editing & Post Production",
      description:
        "Professional editing and post-production services to enhance your media content.",
      icon: <FaEdit className="text-purple-600 text-4xl" />, // Icon for Editing & Post Production
    },
    {
      title: "Social Media Marketing",
      description:
        "Maximize your online presence with targeted social media campaigns and strategies.",
      icon: <FaShareAlt className="text-yellow-600 text-4xl" />, // Icon for Social Media
    },
    {
      title: "ERP Solutions",
      description:
        "Streamline your business processes with custom ERP solutions for better efficiency.",
      icon: <FaChartLine className="text-teal-600 text-4xl" />, // Icon for ERP Solutions
    },
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

  const testimonials = [
    {
      name: "John Doe",
      position: "CEO, TechCorp",
      feedback:
        "The team delivered exceptional service and exceeded our expectations. Highly recommended!",
      image: "/services.png", // Replace with your actual image path
      companyLogo: "/images/techcorp-logo.png", // Replace with actual logo
    },
    {
      name: "Jane Smith",
      position: "CTO, Innovatech",
      feedback:
        "Their solutions transformed our business processes and drove significant growth.",
      image: "/services.png",
      companyLogo: "/images/innovatech-logo.png",
    },
    {
      name: "Mark Wilson",
      position: "Founder, Startify",
      feedback:
        "Amazing experience working with the team. Their expertise is unmatched!",
      image: "/services.png",
      companyLogo: "/images/startify-logo.png",
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
      {/* <div className="relative">
        <Image
          src={group89}
          alt="Logo"
          className="w-full h-[667px] object-cover"
        />
        <div className="absolute inset-0 py-[15%] mx-auto text-center bg-black bg-opacity-50">
          <h1 className="text-white text-[56px] mb-6 font-handel">
            Our Services
          </h1>
          <div className="flex justify-center items-center">
            <div className="text-center flex ">
              <div className="px-6 py-3 text-[18px] hover:underline uppercase text-white font-semibold rounded-md cursor-pointer ">
                <a href="">Home</a>
              </div>
              <div className="px-6 py-3 text-[18px] uppercase font-semibold text-white rounded-md cursor-pointer ">
                Our Services
              </div>
            </div>
          </div>
        </div>
      </div> */}

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
              <a href="#">Home</a>
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
                <div
                  key={index}
                  className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300"
                >
                  <div className="flex justify-center mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-800 text-center mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-center">
                    {service.description}
                  </p>
                </div>
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
        <section className="py-16 bg-gradient-to-b from-gray-50 to-gray-100">
          <div className="container mx-auto px-6 text-center max-w-[1204px] ">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              What Our Clients Say
            </h2>
            <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
              Here’s what our clients have to say about our exceptional
              services.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="w-24 h-24 mx-auto">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={96}
                      height={96}
                      className="rounded-full object-cover"
                    />
                  </div>
                  <p className="mt-4 text-gray-600 italic">
                    {testimonial.feedback}
                  </p>
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {testimonial.position}
                    </p>
                  </div>
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
                  className={`border rounded-lg transition-all duration-300 ${
                    expanded === index ? "bg-white shadow-md" : "bg-gray-100"
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
