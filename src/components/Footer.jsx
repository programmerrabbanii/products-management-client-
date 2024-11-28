import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#3b3a3a] via-[#5c5c5c] to-[#292929] text-white py-10">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-[#f3a953] mb-4">About Us</h3>
            <p className="text-gray-400">
              Your trusted partner in product management solutions. Helping businesses organize and manage their product lifecycles effectively.
            </p>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-bold text-[#f3a953] mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="hover:text-[#f3a953] transition duration-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-[#f3a953] transition duration-300">
                  Services
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-[#f3a953] transition duration-300">
                  Contact
                </a>
              </li>
              <li>
                <a href="/privacy" className="hover:text-[#f3a953] transition duration-300">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-[#f3a953] mb-4">Contact Us</h3>
            <p className="text-gray-400">Email: support@productmanagement.com</p>
            <p className="text-gray-400">Phone: +1 234 567 890</p>
            <p className="text-gray-400">Address: 123 Main St, Business City</p>
          </div>
        </div>
        {/* Bottom Section */}
        <div className="border-t border-gray-600 pt-4 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Dev Rabbani Sarkar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
