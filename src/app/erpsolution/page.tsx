"use client";

import React, { useState } from "react";
import Image from "next/image";
import Footer from "../Footer/page";
import Navbar from "../Navbar/page";
import Link from "next/link";
import { FaSearch, FaCamera, FaRobot, FaRegQuestionCircle, } from 'react-icons/fa';
import Brandimage from '../../../public/Brand Strategy for Small Businesses.png';

const industries = [
    {
        title: "Retail",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis perferendis mollitia laborum vero, quas labore iste voluptatum tempora temporibus earum! Hic vel quod ipsa odit sapiente quis nostrum dolores aspernatur.",
        imageUrl: "/retail.png",
    },
    {
        title: "Education",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis perferendis mollitia laborum vero, quas labore iste voluptatum tempora temporibus earum! Hic vel quod ipsa odit sapiente quis nostrum dolores aspernatur.",
        imageUrl: "/education.png",
    },
    {
        title: "Healthcare",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis perferendis mollitia laborum vero, quas labore iste voluptatum tempora temporibus earum! Hic vel quod ipsa odit sapiente quis nostrum dolores aspernatur.",
        imageUrl: "/healtcare.png",
    },
    {
        title: "Real Estate",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis perferendis mollitia laborum vero, quas labore iste voluptatum tempora temporibus earum! Hic vel quod ipsa odit sapiente quis nostrum dolores aspernatur.",
        imageUrl: "/realstate.png",
    },
    {
        title: "Gaming",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis perferendis mollitia laborum vero, quas labore iste voluptatum tempora temporibus earum! Hic vel quod ipsa odit sapiente quis nostrum dolores aspernatur.",
        imageUrl: "/gamining.png",
    },
    {
        title: "Marketing",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis perferendis mollitia laborum vero, quas labore iste voluptatum tempora temporibus earum! Hic vel quod ipsa odit sapiente quis nostrum dolores aspernatur.",
        imageUrl: "/Marketing.png",
    },
];



export default function Page() {

    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="w-full mx-auto">
            <div className="bg-[#1e1e1e] w-full">
                <Navbar />
            </div>


            <section
                className="relative w-full h-screen bg-cover bg-center"
                style={{ backgroundImage: "url('/erpsolution.png')" }}
            >
                <div className="absolute inset-0 bg-black opacity-50"></div>

                <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center text-white px-4">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-handel font-extrabold leading-tight mb-4">
                        Streamline Your Business with Powerful ERP Solutions
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl mb-6 max-w-5xl mx-auto">
                        Comprehensive ERP solutions designed to integrate, automate, and optimize your business operations for maximum efficiency and growth.
                    </p>
                    <Link
                        href="/contact"
                        className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
                    >
                        Contact Us
                    </Link>
                </div>
            </section>

            <section className="py-12 bg-gray-50">
                <div className="max-w-[1204px] mx-auto px-[20px] xl:px-[0px]">
                    <div className="">
                        <span className="font-poppins font-bold text-[18px]">OVERVIEW</span>
                        <div className="text-[34px] font-bold font-handel pt-[20px]">
                            Enhance your apps with Azure AI Vision
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 grid-cols-1 pt-[40px] gap-6">
                        <div className="col-span-1 my-auto">
                            <div className="">
                                <h3 className="text-poppins font-bold text-[28px]">Our Computer Vision Services</h3>
                            </div>
                            <div className=" pt-[20px]">
                                <p className="text-poppins text-[18px] text-gray-600 font-[500] text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa pariatur, nobis obcaecati possimus aspernatur hic consequuntur reiciendis vel deserunt id. Hic, nulla cupiditate veritatis rerum reiciendis ut voluptatem at dolores.</p>
                                <p className="text-poppins text-[18px] text-gray-600 font-[500] pt-[20px] text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa pariatur, nobis obcaecati possimus aspernatur hic consequuntur reiciendis vel deserunt id. Hic, nulla cupiditate veritatis rerum reiciendis ut voluptatem at dolores.</p>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <Image
                                src={Brandimage}
                                alt=""
                                className="w-full h-[500px]"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gray-50">
                <div className="container mx-auto max-w-[1204px] text-center px-4">
                    <h2 className="font-poppins font-bold text-[18px] uppercase">
                        Features
                    </h2>
                    <p className="text-[34px] font-bold font-handel text-center pt-[20px]  mb-12">
                        Analyze visual content in different ways <br /> with Azure AI Vision
                    </p>





                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                        {/* Image Processing Icon */}
                        <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <FaCamera className="text-blue-600 text-6xl mb-4" />
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Image Processing</h3>
                            <p className="text-gray-600">
                                Enhances and manipulates images to extract useful information and patterns.
                            </p>
                        </div>

                        {/* Machine Learning Icon */}
                        <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <FaRobot className="text-green-600 text-6xl mb-4" />
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Video Analysis</h3>
                            <p className="text-gray-600">
                                Algorithms that learn patterns from data and improve over time to make predictions.
                            </p>
                        </div>

                        {/* Object Detection Icon */}
                        <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <FaSearch className="text-red-600 text-6xl mb-4" />
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Object Detection</h3>
                            <p className="text-gray-600">
                                Identifies and locates objects within an image or video stream.
                            </p>
                        </div>

                        {/* Facial Recognition Icon */}

                    </div>
                </div>
            </section>

            <section id="use-cases" className="bg-gray-50 py-16 px-6 lg:px-20">
                <div className="max-w-[1204px] mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">
                            Use Cases/Industries Served
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            See how Augmented Reality is revolutionizing various industries and
                            transforming user experiences.
                        </p>
                    </div>

                    {/* Tab Navigation */}
                    <div className="flex justify-center mb-8">
                        <div className="sm:flex space-x-6">
                            {industries.map((industry, index) => (
                                <button
                                    key={index}
                                    className={`text-xl font-semibold ${activeIndex === index ? "text-blue-600" : "text-gray-600"
                                        } hover:text-blue-500 transition duration-300`}
                                    onClick={() => setActiveIndex(index)}
                                >
                                    {industry.title}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Industry Content */}
                    <div className="flex flex-col gap-8 md:flex-row items-center justify-center">

                        <div className="flex-1 text-center md:text-left md:w-1/2">
                            <h3 className="text-3xl font-semibold text-gray-800 mb-4">
                                {industries[activeIndex].title}
                            </h3>
                            <p className="text-lg text-gray-600 mb-4">
                                {industries[activeIndex].description}
                            </p>
                        </div>

                        <div className="flex-1 mb-8 md:mb-0 md:w-1/2">
                            <img
                                src={industries[activeIndex].imageUrl}
                                alt={industries[activeIndex].title}
                                className="w-full h-full object-cover rounded-lg shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="container max-w-[1204px] mx-auto text-center px-4">
                    <h2 className="text-3xl sm:text-4xl font-handel font-bold text-gray-800 mb-6">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-lg sm:text-xl font-poppins text-gray-600 mb-12">
                        Have questions about ERP solutions? We’ve answered some of the most common ones below.
                    </p>

                    <div className="space-y-8">
                        {/* FAQ 1 */}
                        <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                            <div className="flex items-center mb-4">
                                <FaRegQuestionCircle className="text-blue-600 text-3xl mr-4" />
                                <h3 className="text-xl font-semibold text-gray-800">
                                    What is the cost of implementing an ERP solution?
                                </h3>
                            </div>
                            <p className="text-gray-600">
                                The cost depends on factors such as the size of your business, the features required, and whether you choose a cloud-based or on-premise ERP solution. Contact us for a personalized quote.
                            </p>
                        </div>

                        {/* FAQ 2 */}
                        <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                            <div className="flex items-center mb-4">
                                <FaRegQuestionCircle className="text-blue-600 text-3xl mr-4" />
                                <h3 className="text-xl font-semibold text-gray-800">
                                    How can ERP solutions benefit my business?
                                </h3>
                            </div>
                            <p className="text-gray-600">
                                ERP solutions streamline business processes, improve data accuracy, enhance productivity, and provide real-time insights, enabling better decision-making across all departments.
                            </p>
                        </div>

                        {/* FAQ 3 */}
                        <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                            <div className="flex items-center mb-4">
                                <FaRegQuestionCircle className="text-blue-600 text-3xl mr-4" />
                                <h3 className="text-xl font-semibold text-gray-800">
                                    How long does it take to implement an ERP solution?
                                </h3>
                            </div>
                            <p className="text-gray-600">
                                Implementation timelines vary depending on the complexity of the solution and the readiness of your organization. On average, it takes 3 to 12 months to fully implement an ERP system.
                            </p>
                        </div>
                    </div>
                </div>
            </section>





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