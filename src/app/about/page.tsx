import React from "react";
import Image from "next/image";
import group80 from "../../../public/silhouette-business-people-discussion-meeting-cityscape-team-concept.png";
import group81 from "../../../public/close-up-young-colleagues-having-meeting.png";
import Where from "../../../public/Where We Are Today 1.png";
import { FaHeart, FaLightbulb, FaUsers } from "react-icons/fa";
import Footer from "../Footer/page";
import Navbar from "../Navbar/page";

export default function page() {

  const values = [
    {
      icon: <FaHeart className="text-red-500 text-4xl" />,
      title: "Integrity",
      description: "We uphold honesty and transparency in everything we do.",
    },
    {
      icon: <FaLightbulb className="text-yellow-500 text-4xl" />,
      title: "Innovation",
      description: "Creativity and continuous improvement drive our success.",
    },
    {
      icon: <FaUsers className="text-blue-500 text-4xl" />,
      title: "Teamwork",
      description:
        "Collaboration and mutual respect are at the core of our culture.",
    },
  ];
  return (
    <div className="w-full mx-auto">
      <div className="bg-[#1e1e1e] w-full">
        <Navbar />
      </div>

      <div className="relative">
        {/* Background Image */}
        <Image
          src={group80}
          alt="Logo"
          className="w-full h-[50vh] sm:h-[60vh] lg:h-[100vh] object-cover"
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 px-4 sm:px-6">
          {/* Heading */}
          <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl mb-6 font-handel text-center">
            About Us
          </h1>

          {/* Navigation Links */}
          <div className="flex justify-center items-center space-x-4">
            {/* Home Link */}
            <div className="px-4 py-2 text-sm sm:text-base lg:text-lg hover:underline uppercase text-white font-semibold rounded-md cursor-pointer">
              <a href="#">Home</a>
            </div>

            {/* About Us Link */}
            <div className="px-4 py-2 text-sm sm:text-base lg:text-lg uppercase font-semibold text-white rounded-md cursor-pointer">
              About Us
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="flex flex-col lg:flex-row max-w-[1204px] mx-auto gap-6 lg:gap-9 py-12 px-4 sm:px-6">
          {/* Left Section: Image */}
          <div className="w-full lg:w-1/2">
            <Image
              src={group81}
              alt="Logo"
              className="w-full rounded-lg object-cover"
            />
          </div>

          {/* Right Section: Content */}
          <div className="w-full lg:w-1/2">
            <span className="text-gray-600 text-sm sm:text-base font-semibold">
              ABOUT COMPANY
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-handel mt-2">
              Aasvaa Universal Pvt. Ltd.
            </h2>

            <p className="font-poppins text-sm sm:text-base lg:text-lg pt-6 leading-relaxed">
            At <b>Aasva</b>, we are passionate about harnessing technology to create smarter, more innovative solutions for a rapidly evolving world. As a tech-savvy company, we specialize in delivering cutting-edge services that empower businesses and individuals to thrive in a digital era.
            </p>

          </div>
        </div>
      </div>

      <section className="bg-white py-16">
        <div className="container mx-auto px-6 lg:px-16">
          {/* Section Heading */}
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">About Us</h2>
            <p className="text-lg text-gray-600">
              Transforming technology with innovation and passion.
            </p>
          </div>

          {/* Content Section */}
          <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            {/* Mission Card */}
            <div className="relative p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center shadow-md">
                  <svg
                    className="w-8 h-8 text-blue-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6H6m6 0h6"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 text-center mt-10">
                Our Mission
              </h3>
              <p className="mt-4 text-gray-600 text-center">
                To innovate and deliver cutting-edge solutions that empower
                businesses to achieve more.
              </p>
            </div>

            {/* Vision Card */}
            <div className="relative p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center shadow-md">
                  <svg
                    className="w-8 h-8 text-green-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 10h11M9 21V3m0 0l-6 6m6-6l6 6"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 text-center mt-10">
                Our Vision
              </h3>
              <p className="mt-4 text-gray-600 text-center">
                To be the most trusted technology partner worldwide.
              </p>
            </div>

            {/* Values Card */}
            <div className="relative p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center shadow-md">
                  <svg
                    className="w-8 h-8 text-purple-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M12 6.253a6.518 6.518 0 100 11.494A6.518 6.518 0 1012 6.253z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 text-center mt-10">
                Our Values
              </h3>
              <p className="mt-4 text-gray-600 text-center">
                Integrity, innovation, and excellence in everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      

      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-extrabold text-center text-gray-900">
            Our Story
          </h2>
          <p className="mt-4 text-center text-lg text-gray-600">
            From humble beginnings to where we are today, here’s the journey of
            our company.
          </p>

          <div className="py-[50px]">
            <div className="space-y-10">
              <div className="flex flex-col gap-5 md:flex-row items-center">
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-semibold text-gray-900">
                    The Beginning
                  </h3>
                  <p className="mt-2 text-gray-600 text-justify">
                  In the early days, our journey began with a vision to revolutionize the world of technology. We started as a small team of dreamers, united by our passion for innovation and a shared belief in the power of technology to transform lives.
                  </p>
                  <p className="mt-2 text-gray-600 text-justify">
                  From brainstorming in a humble workspace to overcoming countless challenges, every step brought us closer to building something truly remarkable. Our commitment to pushing boundaries and delivering exceptional solutions laid the foundation for the company you see today.
                  </p>
                  
                </div>
                <div className="mt-6 md:mt-0 md:w-1/2">
                  <img
                    className="rounded-lg shadow-lg w-full h-[400px]"
                    src="TheBeginning 1.png"
                    alt="Our Beginning"
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-5 items-center">
                <div className="md:w-1/2 md:order-2">
                  <h3 className="text-2xl font-semibold text-gray-900">
                    Growth and Expansion
                  </h3>
                  <p className="mt-2 text-gray-600 text-justify">
                  Our journey started with a simple vision: to transform technology into a force for good. From a small team working on big dreams, we steadily grew, fueled by innovation and a commitment to excellence.
                  </p>
                  
                </div>
                <div className="mt-6 md:mt-0 md:w-1/2">
                  <img
                    className="rounded-lg shadow-lg w-full h-[400px]"
                    src="GrowthandExpansion 1.png"
                    alt="Our Growth"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-5 md:flex-row items-center">
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-semibold text-gray-900">
                    Where We Are Today
                  </h3>
                  <p className="mt-2 text-gray-600 text-justify">
                  Today, we stand as a trusted name in the tech industry, recognized for our innovative solutions and unwavering commitment to quality. With a growing team of talented professionals and a global presence, we continue to push boundaries and set new standards.
                  </p>
                  <p className="mt-2 text-gray-600 text-justify">
Our focus remains on creating meaningful impact, driving progress, and staying at the forefront of technological advancements. While we celebrate how far we’ve come, our eyes are firmly set on the future, ready to embrace new challenges and opportunities.
                  </p>
                 
                </div>
                <div className="mt-6 md:mt-0 md:w-1/2">
                  <Image
                    className="rounded-lg shadow-lg w-full h-[400px]"
                    src={Where}
                    alt="Our Team Today"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-[50px] bg-white">
        <div className="bg-gray-100 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-extrabold text-center text-gray-900">
              Our Values and Culture
            </h2>
            <p className="mt-4 text-center text-gray-600 text-lg">
              We are committed to fostering a culture that empowers individuals
              and inspires excellence.
            </p>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
                >
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-100">
                    {value.icon}
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-gray-900">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-gray-600 text-center">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
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