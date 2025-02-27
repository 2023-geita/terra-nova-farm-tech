
import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4 bg-gradient-to-r from-terra-700 to-terra-500 bg-clip-text text-transparent">
              TERRA TECH
            </h3>
            <p className="text-gray-600 mb-4 text-sm">
              Pioneering data-driven agriculture for a sustainable African future through AI, drone technology, and precision farming solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-terra-600 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-terra-600 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-terra-600 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-terra-600 transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-terra-600 text-sm transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/solutions" className="text-gray-600 hover:text-terra-600 text-sm transition-colors">Our Solutions</Link>
              </li>
              <li>
                <Link to="/technology" className="text-gray-600 hover:text-terra-600 text-sm transition-colors">Technology</Link>
              </li>
              <li>
                <Link to="/impact" className="text-gray-600 hover:text-terra-600 text-sm transition-colors">Impact</Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-600 hover:text-terra-600 text-sm transition-colors">Blog</Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-600 hover:text-terra-600 text-sm transition-colors">Careers</Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-display font-semibold text-gray-900 mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/case-studies" className="text-gray-600 hover:text-terra-600 text-sm transition-colors">Case Studies</Link>
              </li>
              <li>
                <Link to="/research" className="text-gray-600 hover:text-terra-600 text-sm transition-colors">Research</Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-600 hover:text-terra-600 text-sm transition-colors">FAQ</Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-600 hover:text-terra-600 text-sm transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-600 hover:text-terra-600 text-sm transition-colors">Terms of Service</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display font-semibold text-gray-900 mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="text-terra-600 mr-2 mt-0.5" />
                <span className="text-gray-600 text-sm">123 Innovation Drive, Nairobi, Kenya</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-terra-600 mr-2" />
                <span className="text-gray-600 text-sm">+254 123 456 789</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-terra-600 mr-2" />
                <span className="text-gray-600 text-sm">info@terratech.africa</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 text-center">
            © {new Date().getFullYear()} Terra Tech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
