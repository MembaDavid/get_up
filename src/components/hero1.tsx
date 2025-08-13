import Btn from "./buttons/button";
import { FaArrowRight } from "react-icons/fa6";

export default function Hero() {
  return (
    <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        src="https://videos.pexels.com/video-files/10677459/10677459-sd_960_506_25fps.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 lg:px-20 max-w-3xl text-white">
        <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight">
          Build Stunning Interfaces <br /> with Speed & Precision
        </h1>
        <p className="mt-4 text-lg text-gray-200">
          Level up your workflow with fast, intuitive design powered by modern
          tools and AI-powered efficiency. No fluff — just results.
        </p>

        <div className="mt-6">
          <Btn>
            <span className="flex items-center gap-2 transition-transform duration-300 group-hover:translate-x-1">
              Get Started
              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </Btn>
        </div>
      </div>
    </section>
  );
}
