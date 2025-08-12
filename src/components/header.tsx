"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full shadow-xl border-b border-gray-200 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-white shadow-none py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center transition-all duration-300">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <span
            className={`inline-flex items-center justify-center rounded-full bg-black text-white font-bold text-xl transition-all duration-300 ${
              scrolled ? "w-7 h-7" : "w-8 h-8"
            }`}
          >
            G
          </span>
          <span
            className={`font-bold text-gray-900 transition-all duration-300 ${
              scrolled ? "text-xl" : "text-2xl"
            }`}
          >
            Get Up
          </span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          {navLinks.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={`text-gray-700 hover:text-black transition-colors ${
                pathname === href ? "font-semibold underline" : ""
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-200">
          <nav className="flex flex-col p-4 space-y-3">
            {navLinks.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className={`text-gray-700 hover:text-black transition-colors ${
                  pathname === href ? "font-semibold underline" : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
