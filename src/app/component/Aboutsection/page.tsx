"use client"; // This ensures the component is client-side only
import React, { useEffect, useState } from "react";
import Image from "next/image";

import { FaBootstrap } from "react-icons/fa";
import { TiHtml5 } from "react-icons/ti";
import { IoLogoCss3 } from "react-icons/io";
import { BiLogoJavascript } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { FaWordpress } from "react-icons/fa";
import { FaShopify } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandReactNative } from "react-icons/tb";
import { DiMongodb } from "react-icons/di";

import Footer from "../../Footer/page";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
interface FAQ {
  question: string;
  answer: string;
}
import "aos/dist/aos.css";

export default function Page() {
  // Capitalize component name
  useEffect(() => {
    // Dynamically import AOS to prevent SSR issues
    import("aos").then((AOS) => {
      AOS.init({
        duration: 1000, // Customize options here
      });
    });
  }, []);

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
    <>
      <div className="bg-gradient-to-r from-black to-gray-800 ">
        <section className=" py-16 max-w-[1310px] mx-auto">
          <div className=" mx-auto flex flex-col items-center px-6 md:flex-row md:px-12 lg:px-20">
            {/* Left Section: Image */}
            <div className="w-full md:w-1/2"  data-aos="slide-right" data-aos-duration="2000">
              <img
                src="/about.png" // Replace with your image path
                alt="About Us"
                className="rounded-lg shadow-lg w-full"
              />
            </div>

            {/* Right Section: Content */}
            <div className="w-full mt-8 md:mt-0 md:w-1/2 md:pl-12"  data-aos="slide-left" data-aos-duration="2000">
              <h2 className="text-4xl font-bold text-white font-handel">
                About Us
              </h2>
              <p className="mt-4 text-white font-poppins text-lg leading-relaxed">
                At Aasva, we are passionate about harnessing technology to create smarter, more innovative solutions for a rapidly evolving world. As a tech-savvy company, we specialize in delivering cutting-edge services that 
              </p>
              <p className="mt-4 text-white font-poppins text-lg leading-relaxed">
              empower businesses and individuals to thrive in a digital era.
              </p>
              <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition duration-300">
               <a href="/about">Learn More</a>
              </button>
            </div>
          </div>
        </section>
      </div>

      <section className="bg-gray-900 py-16">
        <div className="container max-w-[1310px] mx-auto px-6 lg:px-20">
          <div className="text-center mb-12" data-aos="slide-down">
            <h2 className="text-4xl font-bold font-handel text-white">Why Choose Us</h2>
            <p className="text-white font-poppins mt-4">
              Empowering your tech needs with innovative solutions and unmatched
              quality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10" data-aos="fade">
            {/* Feature 1 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <img
                src="/innovation.jpg"
                alt="Innovation"
                className="w-full h-[300px] object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">
                  Cutting-Edge Technology
                </h3>
                <p className="text-gray-600 mt-3">
                  We deliver advanced tech solutions tailored to your unique
                  needs, ensuring innovation at every step.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <img
                src="customer focus.jpg"
                alt="Customer Focus"
                className="w-full h-[300px] object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">
                  Customer-Centric Approach
                </h3>
                <p className="text-gray-600 mt-3">
                Your success is our priority. We focus on building solutions that truly add value.

                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <img
                src="/security.jpg"
                alt="Security"
                className="w-full h-[300px] object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">
                  Unmatched Security
                </h3>
                <p className="text-gray-600 mt-3">
                  Protecting your data and systems is our priority, with robust
                  security measures you can rely on.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className=" ">
        <section
          id="features"
          className="bg-gradient-to-r from-gray-900 via-gray-800 to-black py-24 px-6"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-center text-white mb-16" data-aos="slide-down">
            Our Game-Changing Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-[1204px] mx-auto" data-aos="fade">
            {/* Feature Card */}
            <div className="group bg-white p-10 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all ease-in-out">
              <div className="flex justify-center mb-8">
                <img
                  src="/speed.png"
                  alt="Speed Icon"
                  className="w-20 h-20 group-hover:scale-125 transition-transform duration-300"
                />
              </div>
              <h3 className="text-2xl font-bold text-blue-600 text-center mb-4">
                Speed
              </h3>
              <p className="text-gray-700 text-center leading-relaxed">
                Lightning-fast performance that accelerates your growth and
                keeps you ahead of the competition.
              </p>
            </div>
            {/* Feature Card */}
            <div className="group bg-white p-10 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all ease-in-out">
              <div className="flex justify-center mb-8">
                <img
                  src="/scalability.png"
                  alt="Scalability Icon"
                  className="w-20 h-20 group-hover:scale-125 transition-transform duration-300"
                />
              </div>
              <h3 className="text-2xl font-bold text-blue-600 text-center mb-4">
                Scalability
              </h3>
              <p className="text-gray-700 text-center leading-relaxed">
                Seamlessly scale your business with our flexible, robust, and
                efficient solutions.
              </p>
            </div>
            {/* Feature Card */}
            <div className="group bg-white p-10 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all ease-in-out">
              <div className="flex justify-center mb-8">
                <img
                  src="/security.png"
                  alt="Security Icon"
                  className="w-20 h-20 group-hover:scale-125 transition-transform duration-300"
                />
              </div>
              <h3 className="text-2xl font-bold text-blue-600 text-center mb-4">
                Security
              </h3>
              <p className="text-gray-700 text-center leading-relaxed">
                Protect your business with state-of-the-art security measures,
                keeping your data safe and secure.
              </p>
            </div>
            {/* Feature Card */}
            <div className="group bg-white p-10 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all ease-in-out">
              <div className="flex justify-center mb-8">
                <img
                  src="/innovation.png"
                  alt="Innovation Icon"
                  className="w-20 h-20 group-hover:scale-125 transition-transform duration-300"
                />
              </div>
              <h3 className="text-2xl font-bold text-blue-600 text-center mb-4">
                Innovation
              </h3>
              <p className="text-gray-700 text-center leading-relaxed">
                Experience cutting-edge innovations that will revolutionize your
                business and industry.
              </p>
            </div>
          </div>
        </section>

        <section
          id="services"
          className="bg-gradient-to-r from-black to-gray-800 py-24 px-6"
        >
          <h2 className="text-4xl font-extrabold text-center text-white mb-16" data-aos="slide-down">
            Our Premium Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 max-w-[1202px] mx-auto" data-aos="fade">
            {/* Service Card - Cloud Solutions */}
            <div className="group bg-gradient-to-t from-gray-800 to-gray-900 p-10 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all ease-in-out">
              <div className="flex justify-center mb-6">
                <img
                  src="/Cloud Solutions.png"
                  alt="Cloud Solutions Icon"
                  className="w-20 h-20 group-hover:scale-125 transition-transform duration-300"
                />
              </div>
              <h3 className="text-2xl font-semibold text-blue-400 text-center mb-4">
                Cloud Solutions
              </h3>
              <p className="text-gray-300 text-center leading-relaxed">
                Scalable, secure, and reliable cloud infrastructure for
                businesses of all sizes.
              </p>
            </div>

            {/* Service Card - Software Development */}
            <div className="group bg-gradient-to-t from-gray-800 to-gray-900 p-10 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all ease-in-out">
              <div className="flex justify-center mb-6">
                <img
                  src="/Software Development.png"
                  alt="Software Development Icon"
                  className="w-20 h-20 group-hover:scale-125 transition-transform duration-300"
                />
              </div>
              <h3 className="text-2xl font-semibold text-blue-400 text-center mb-4">
                Software Development
              </h3>
              <p className="text-gray-300 text-center leading-relaxed">
                Custom software solutions tailored to meet your unique business
                requirements.
              </p>
            </div>

            {/* Service Card - AI Tools */}
            <div className="group bg-gradient-to-t from-gray-800 to-gray-900 p-10 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all ease-in-out">
              <div className="flex justify-center mb-6">
                <img
                  src="/AI Tools.png"
                  alt="AI Tools Icon"
                  className="w-20 h-20 group-hover:scale-125 transition-transform duration-300"
                />
              </div>
              <h3 className="text-2xl font-semibold text-blue-400 text-center mb-4">
                AI Tools
              </h3>
              <p className="text-gray-300 text-center leading-relaxed">
                Advanced AI-powered tools to optimize business processes and
                drive innovation.
              </p>
            </div>

            {/* Service Card - Custom Solutions */}
            <div className="group bg-gradient-to-t from-gray-800 to-gray-900 p-10 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all ease-in-out">
              <div className="flex justify-center mb-6">
                <img
                  src="/Custom Solutions.png"
                  alt="Custom Solutions Icon"
                  className="w-20 h-20 group-hover:scale-125 transition-transform duration-300"
                />
              </div>
              <h3 className="text-2xl font-semibold text-blue-400 text-center mb-4">
                Custom Solutions
              </h3>
              <p className="text-gray-300 text-center leading-relaxed">
                Tailored solutions that perfectly align with your business needs
                and goals.
              </p>
            </div>
          </div>
        </section>
      </div>

      <div className=" lg:block hidden">
        <div className="py-[50px] bg-black">
          <div className="max-w-[1204px] mx-auto ">
            <div className="">
              <h2 className="text-center font-bold leading-[60px] mx-auto text-[#fff] text-[44px] font-handel ">
                Here are Numerous Topics That <br /> Will Enhance Your Skills
              </h2>
              <div className="pt-[50px] flex  flex-wrap gap-7  " data-aos="fade">
                <div className=" flex  flex-wrap gap-7 mx-auto">
                  <button className="bg-[#fff]  shadowbutton flex rounded-full text-black px-[28px] py-[15px] gap-5 items-center ">
                    <FaBootstrap className="text-[40px]" />
                    <div className="text-[#080808] text-[20px] font-bold">
                      Bootstrap
                    </div>
                  </button>

                  <button className="bg-[#fff]  shadowbutton flex rounded-full text-black px-[28px] py-[15px] gap-5 items-center ">
                    <TiHtml5 className="text-[40px]" />
                    <div className="text-[#080808] text-[20px] font-bold">
                      HTML
                    </div>
                  </button>

                  <button className="bg-[#fff]  shadowbutton flex rounded-full text-black px-[28px] py-[15px] gap-5 items-center ">
                    <IoLogoCss3 className="text-[40px]" />
                    <div className="text-[#080808] text-[20px] font-bold">
                      CSS
                    </div>
                  </button>

                  <button className="bg-[#fff]  shadowbutton flex rounded-full text-black px-[28px] py-[15px] gap-5 items-center ">
                    <BiLogoJavascript className="text-[40px]" />
                    <div className="text-[#080808] text-[20px] font-bold">
                      Javascript
                    </div>
                  </button>
                </div>

                <div className=" flex  flex-wrap gap-7 mx-auto">
                  <button className="bg-[#fff]  shadowbutton flex rounded-full text-black px-[28px] py-[15px] gap-5 items-center ">
                    <FaReact className="text-[40px]" />
                    <div className="text-[#080808] text-[20px] font-bold">
                      React
                    </div>
                  </button>

                  <button className="bg-[#fff]  shadowbutton flex rounded-full text-black px-[28px] py-[15px] gap-5 items-center ">
                    <FaWordpress className="text-[40px]" />
                    <div className="text-[#080808] text-[20px] font-bold">
                      Wordpress
                    </div>
                  </button>
                </div>

                <div className=" flex  flex-wrap gap-7 mx-auto">
                  <button className="bg-[#fff]  shadowbutton flex rounded-full text-black px-[28px] py-[15px] gap-5 items-center ">
                    <FaShopify className="text-[40px]" />
                    <div className="text-[#080808] text-[20px] font-bold">
                      Shopify
                    </div>
                  </button>

                  <button className="bg-[#fff]  shadowbutton flex rounded-full text-black px-[28px] py-[15px] gap-5 items-center ">
                    <FaNode className="text-[40px]" />
                    <div className="text-[#080808] text-[20px] font-bold">
                      Node.js
                    </div>
                  </button>

                  <button className="bg-[#fff]  shadowbutton flex rounded-full text-black px-[28px] py-[15px] gap-5 items-center ">
                    <FaSass className="text-[40px]" />
                    <div className="text-[#080808] text-[20px] font-bold">
                      Sass
                    </div>
                  </button>

                  <button className="bg-[#fff]  shadowbutton flex rounded-full text-black px-[28px] py-[15px] gap-5 items-center ">
                    <RiNextjsFill className="text-[40px]" />
                    <div className="text-[#080808] text-[20px] font-bold">
                      Next.js
                    </div>
                  </button>

                  <button className="bg-[#fff]  shadowbutton flex rounded-full text-black px-[28px] py-[15px] gap-5 items-center ">
                    <RiTailwindCssFill className="text-[40px]" />
                    <div className="text-[#080808] text-[20px] font-bold">
                      Tailwind css
                    </div>
                  </button>
                </div>

                <div className=" flex  flex-wrap gap-7 mx-auto">
                  <button className="bg-[#fff]  shadowbutton flex rounded-full text-black px-[28px] py-[15px] gap-5 items-center ">
                    <TbBrandReactNative className="text-[40px]" />
                    <div className="text-[#080808] text-[20px] font-bold">
                      React Native
                    </div>
                  </button>

                  <button className="bg-[#fff]  shadowbutton flex rounded-full text-black px-[28px] py-[15px] gap-5 items-center ">
                    <DiMongodb className="text-[40px]" />
                    <div className="text-[#080808] text-[20px] font-bold">
                      Mongo DB
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <section className="py-16 bg-gradient-to-r from-black to-gray-800">
          <div className="container mx-auto px-6 text-center max-w-[1204px] ">
            <h2 className="text-4xl font-bold text-white font-poppins mb-6">
              What Our Clients Say
            </h2>
            <p className="text-white font-poppins mb-12 max-w-3xl mx-auto">
              Here’s what our clients have to say about our exceptional
              services.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-aos="fade">
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
                  {/* <div className="mt-4">
                <Image
                  src={testimonial.companyLogo}
                  alt={`${testimonial.name}'s Company Logo`}
                  width={100}
                  height={40}
                  className="mx-auto"
                />
              </div> */}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <div className="">
        <section className="py-16 bg-gradient-to-r from-gray-900 via-gray-800 to-black">
          <div className="container max-w-[1204px] mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-white mb-8">
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

      {/* <div className="">
        <section className="bg-black text-white w-full mx-auto py-16 ">
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
                href="#"
                className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-black transition duration-300"
              >
                Free Consultation
              </a>
            </div>
          </div>
        </section>
      </div> */}

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


      <div className="">
        <Footer />
      </div>
    </>
  );
}
