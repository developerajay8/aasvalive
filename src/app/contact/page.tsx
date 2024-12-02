"use client";

import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Navbar from "../Navbar/page";
import Footer from "../Footer/page";

export default function page() {
  return (
    <div>
      <div className="bg-[#1e1e1e] w-full">
        <Navbar />
      </div>
      <div className="bg-gray-50 py-16">
        {/* Main Container */}
        <div className="max-w-[1204px] mx-auto px-6">
          {/* Title Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Contact Us
            </h1>
            <p className="text-lg text-gray-600">
              We &quot d love to hear from you! Fill out the form below or get in
              touch with us directly.
            </p>
          </div>

          {/* Contact Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Get in Touch
              </h2>
              <form action="#" method="POST">
                <div className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="mt-2 w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="mt-2 w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      className="mt-2 w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition duration-300"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            {/* Contact Details */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Our Contact Details
              </h2>
              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-center">
                  <FaMapMarkerAlt className="text-blue-600 mr-3" />
                  <span className="text-gray-600">
                  Sansthan Path, Jhalana Gram, <br /> Malviya Nagar, Jaipur, Rajasthan 302017
                  </span>
                </div>
                {/* Phone */}
                <div className="flex items-center">
                  <FaPhoneAlt className="text-blue-600 mr-3" />
                  <span className="text-gray-600">+9180589 85959</span>
                </div>
                {/* Email */}
                <div className="flex items-center">
                  <FaEnvelope className="text-blue-600 mr-3" />
                  <span className="text-gray-600">info@aasvaa.in</span>
                </div>


              </div>
              <div className="mt-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Find Us On The Map
                </h2>
                
                <div className="h-[300px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.364884107137!2d75.81825431502118!3d26.867837267199586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db7b51669dee9%3A0x3708a6ae96453829!2sBhamashah%20Techno%20Hub!5e0!3m2!1sen!2sin!4v1698991323456!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: "0" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>

            </div>
          </div>

          {/* Map Section */}

        </div>
      </div>

      <div className="">
        <Footer />
      </div>
    </div>
  );
}
