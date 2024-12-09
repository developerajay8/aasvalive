"use client"; // This ensures the component is client-side only
import React, { useEffect, useState } from "react";

import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import Footer from "../../Footer/page";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
interface FAQ {
  question: string;
  answer: string;
}
import "aos/dist/aos.css";
import Link from "next/link";

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

  const videos = [
    '/AI ML 2.mp4',
    '/Service banner.mp4',
    '/AR Arrange 2.mp4',
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length);
  };

  return (
    <>
      <div className="bg-gradient-to-r from-black to-gray-800 ">
        <section className=" py-16 max-w-[1310px] mx-auto">
          <div className=" mx-auto flex flex-col items-center px-6 md:flex-row md:px-12 lg:px-20">
            {/* Left Section: Image */}
            <div className="w-full md:w-1/2" data-aos="slide-right" data-aos-duration="1000">
              <img
                src="/about.png" // Replace with your image path
                alt="About Us"
                className="rounded-lg shadow-lg w-full"
              />
            </div>

            {/* Right Section: Content */}
            <div className="w-full mt-8 md:mt-0 md:w-1/2 md:pl-12" data-aos="slide-left" data-aos-duration="1000">
              <h2 className="text-4xl font-bold text-white font-handel">
                About Us
              </h2>
              <p className="mt-4 text-white font-poppins text-lg leading-relaxed">
                At Aasva, we are passionate about harnessing technology to create smarter, more innovative solutions for a rapidly evolving world. As a tech-savvy company, we specialize in delivering cutting-edge services that
              </p>
              <p className="mt-4 text-white font-poppins text-lg leading-relaxed">
                empower businesses and individuals to thrive in a digital era.
              </p>

            </div>
          </div>
        </section>
      </div>

      <section
        id="services"
        className="bg-gradient-to-r from-black to-gray-800 py-24 px-6"
      >
        <h2 className="text-4xl font-extrabold text-center text-white mb-16" data-aos="slide-down">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 max-w-[1202px] mx-auto" data-aos="fade">
          {/* Service Card - Cloud Solutions */}
          <Link href={'/computervision'}>
            <div className="group bg-gradient-to-t from-gray-800 to-gray-900 p-10 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all ease-in-out">
              <div className="flex justify-center mb-6">
                <img
                  src="/computer-vision.png"
                  alt="computer-vision Icon"
                  className="w-20 h-20 group-hover:scale-125 transition-transform duration-300"
                />
              </div>
              <h3 className="text-2xl font-semibold text-blue-400 text-center mb-4">
                Computer Vision
              </h3>
              <p className="text-gray-300 text-center leading-relaxed">
                Computer Vision allows computers to analyze and interpret visual information from the world.
              </p>
            </div>
          </Link>

          {/* Service Card - Software Development */}
          <Link href={'/appdevelopment'}>
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
          </Link>

          {/* Service Card - AI Tools */}
          <Link href={'/aimachine'}>
            <div className="group bg-gradient-to-t from-gray-800 to-gray-900 p-10 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all ease-in-out">
              <div className="flex justify-center mb-6">
                <img
                  src="/AI Tools.png"
                  alt="AI Tools Icon"
                  className="w-20 h-20 group-hover:scale-125 transition-transform duration-300"
                />
              </div>
              <h3 className="text-2xl font-semibold text-blue-400 text-center mb-4">
                AI <br /> Tools
              </h3>
              <p className="text-gray-300 text-center leading-relaxed">
                Advanced AI-powered tools to optimize business processes and
                drive innovation.
              </p>
            </div>
          </Link>

          {/* Service Card - Custom Solutions */}
          <Link href={'/ar'}>
            <div className="group bg-gradient-to-t from-gray-800 to-gray-900 p-10 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all ease-in-out">
              <div className="flex justify-center mb-6">
                <img
                  src="/augmented-reality.png"
                  alt="augmented-reality Icon"
                  className="w-20 h-20 group-hover:scale-125 transition-transform duration-300"
                />
              </div>
              <h3 className="text-2xl font-semibold text-blue-400 text-center mb-4">
                Augmented Reality
              </h3>
              <p className="text-gray-300 text-center leading-relaxed">
                Harness the potential of AR to create immersive experiences and
                enhance real-world interactions.
              </p>
            </div>
          </Link>
        </div>
      </section>



      <div className="relative flex justify-center items-center w-full  mx-auto">
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-black/50 hover:bg-black/70 rounded-full p-3 text-xl z-10"
        >
          <FaChevronLeft />
        </button>

        <div className="w-full  overflow-hidden">
          <video
            key={videos[currentIndex]}
            src={videos[currentIndex]}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto"
          />
        </div>

        <button
          onClick={handleNext}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-black/50 hover:bg-black/70 rounded-full p-3 text-xl z-10"
        >
          <FaChevronRight />
        </button>
      </div>






      <div className=" ">
        <section
          id="features"
          className="bg-gradient-to-r from-gray-900 via-gray-800 to-black py-24 px-6"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-center text-white mb-16" >
            Our Game-Changing Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-[1204px] mx-auto">
            {/* Feature Card */}
            <div className="group bg-white p-10 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all ease-in-out" data-aos="fade">
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
            <div className="group bg-white p-10 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all ease-in-out " data-aos="fade">
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
            <div className="group bg-white p-10 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all ease-in-out" data-aos="fade">
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
            <div className="group bg-white p-10 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all ease-in-out" data-aos="fade">
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


        <section className="bg-gray-900 py-16">
          <div className="container max-w-[1310px] mx-auto px-6 lg:px-20">
            <div className="text-center mb-12" >
              <h2 className="text-4xl font-bold font-handel text-white">Why Choose Us</h2>
              <p className="text-white font-poppins mt-4">
                Empowering your tech needs with innovative solutions and unmatched
                quality.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10" >
              {/* Feature 1 */}
              <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"data-aos="fade">
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
              <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"data-aos="fade">
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
              <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"data-aos="fade">
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
