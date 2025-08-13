import React from "react";
import Btn from "./buttons/button";
import { FaGithub, FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function ContactPage() {
  const socialLinks = [
    { icon: <FaGithub />, href: "#", label: "GitHub" },
    { icon: <FaTwitter />, href: "#", label: "Twitter" },
    { icon: <FaLinkedin />, href: "#", label: "LinkedIn" },
    { icon: <FaEnvelope />, href: "mailto:hello@getup.dev", label: "Email" },
  ];

  return (
    <main className="min-h-screen bg-gray-50 py-20 px-6 flex flex-col items-center">
      <h1 className="text-5xl font-extrabold mb-12 text-gray-900 text-center max-w-4xl">
        Get In Touch
      </h1>

      <p className="max-w-3xl text-center text-gray-700 text-lg mb-16 leading-relaxed">
        I’m always open to new projects, collaborations, or just a friendly hello.
        Fill out the form below or reach me via social links.
      </p>

      {/* Contact Form */}
      <form className="w-full max-w-2xl bg-white shadow-md rounded-lg p-8 flex flex-col gap-6">
        <div className="flex flex-col">
          <label htmlFor="name" className="text-gray-700 font-medium mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Your Name"
            className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="text-gray-700 font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="you@example.com"
            className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="message" className="text-gray-700 font-medium mb-2">
            Message
          </label>
          <textarea
            id="message"
            rows={5}
            placeholder="Your message..."
            className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
          ></textarea>
        </div>

        <Btn type="submit" className="self-start">
          Send Message
        </Btn>
      </form>

      {/* Contact Info & Social Links */}
      <div className="mt-12 flex flex-col items-center gap-4">
        <p className="text-gray-700 text-lg">Or reach me via social links:</p>
        <div className="flex gap-6 text-gray-600 text-2xl">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="hover:text-gray-900 transition-colors"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
