



'use client';
import Link from 'next/link';
import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

export default function page() {
  return (
    <div className="bg-gray-900">
      <footer className="bg-gray-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Us Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              We are a technology-driven company committed to delivering innovative solutions to our clients.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm sm:text-base">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <a href="/about" className="text-gray-400 hover:text-white transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="/services" className="text-gray-400 hover:text-white transition">
                  Services
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm sm:text-base">
              <li className="text-gray-400">Email: info@aasvaa.in</li>
              <li className="text-gray-400">Phone: +9180589 85959</li>
              <li className="text-gray-400">Phone: +9180588 88814</li>
              <li className="text-gray-400">Address: Sansthan Path, Jhalana Gram, Malviya Nagar, Jaipur, Rajasthan 302017</li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/AasvaaUniversal"

                className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://x.com/aasvaa87045"
                className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="#"
                className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 py-6">
          <div className="container mx-auto px-4 text-center text-gray-400 text-sm sm:text-base">
            <p>&copy; {new Date().getFullYear()} Copyright © 2023 -24 Aasvaa Universal Pvt. Ltd.  All Rights Reserved. </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

