"use client";

import Btn from "./buttons/button";
import { ImageWithFallback } from "./imageWithFallBack";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Hero() {
  const [hovered, setHovered] = useState(false);

  return (
    <section className="bg-white text-gray-900 py-16 px-6 lg:px-20 flex flex-col-reverse lg:flex-row items-center gap-12">
      {/* Left Content */}
      <div className="flex-1 space-y-6">
        <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight">
          Build Stunning Interfaces <br /> with Speed & Precision
        </h1>
        <p className="text-lg text-gray-600 max-w-lg">
          Level up your workflow with fast, intuitive design powered by modern
          tools and AI-powered efficiency. No fluff — just results.
        </p>

        {/* CTA Button */}
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <Btn>
            <span className="flex items-center gap-2 font-semibold">
              Get Started
              <motion.span
                animate={{ x: hovered ? 6 : 0 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 15,
                }}
              >
                <FaArrowRight />
              </motion.span>
            </span>
          </Btn>
        </div>
      </div>

      {/* Right Image */}
      <div className="flex-1 flex justify-center">
        <ImageWithFallback
          src="/images/hero.jpg" // in public/
          alt="Hero illustration"
          className="w-full max-w-md rounded-2xl shadow-lg"
        />
      </div>
    </section>
  );
}
