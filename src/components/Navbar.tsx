
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/80 backdrop-blur-md border-b border-gray-200/30 shadow-sm" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:py-6">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-xl font-display font-bold bg-gradient-to-r from-terra-700 to-terra-500 bg-clip-text text-transparent">
                TERRA TECH
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/about"
              className="text-sm font-medium text-gray-700 hover:text-terra-600 transition-colors"
            >
              About
            </Link>
            <Link
              to="/solutions"
              className="text-sm font-medium text-gray-700 hover:text-terra-600 transition-colors"
            >
              Solutions
            </Link>
            <Link
              to="/technology"
              className="text-sm font-medium text-gray-700 hover:text-terra-600 transition-colors"
            >
              Technology
            </Link>
            <Link
              to="/impact"
              className="text-sm font-medium text-gray-700 hover:text-terra-600 transition-colors"
            >
              Impact
            </Link>
            <Link
              to="/contact"
              className="text-sm font-medium text-gray-700 hover:text-terra-600 transition-colors"
            >
              Contact
            </Link>
            <Button 
              variant="default" 
              size="sm"
              className="bg-terra-600 hover:bg-terra-700 text-white rounded-md shadow-sm"
            >
              Get Started
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 animate-fade-in">
          <div className="px-4 pt-2 pb-6 space-y-4">
            <Link
              to="/about"
              className="block text-sm font-medium text-gray-700 hover:text-terra-600 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/solutions"
              className="block text-sm font-medium text-gray-700 hover:text-terra-600 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Solutions
            </Link>
            <Link
              to="/technology"
              className="block text-sm font-medium text-gray-700 hover:text-terra-600 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Technology
            </Link>
            <Link
              to="/impact"
              className="block text-sm font-medium text-gray-700 hover:text-terra-600 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Impact
            </Link>
            <Link
              to="/contact"
              className="block text-sm font-medium text-gray-700 hover:text-terra-600 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Button
              variant="default"
              className="w-full mt-4 bg-terra-600 hover:bg-terra-700 text-white"
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
