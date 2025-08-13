
import React from "react";

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface ServiceCardsProps {
  services: Service[];
}

export default function ServiceCards({ services }: ServiceCardsProps) {
  return (
    <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-6">
      {services.map((service, idx) => (
        <div
          key={idx}
          className="
            bg-white 
            rounded-2xl 
            p-8 
            flex flex-col items-center
            text-center
            shadow-md 
            hover:shadow-2xl 
            transition-shadow 
            duration-300
            cursor-pointer
            group
          "
        >
          {/* Icon */}
          <div
            className="
              text-indigo-600 
              text-6xl 
              mb-6 
              transform 
              transition-transform 
              duration-500 
              group-hover:rotate-12 
              group-hover:scale-110
            "
          >
            {service.icon}
          </div>

          {/* Title */}
          <h3 className="text-2xl font-extrabold mb-2 text-gray-900">
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 text-base mb-6 max-w-xs">
            {service.description}
          </p>

          {/* Gradient underline */}
          <div
            className="
              w-20 
              h-1 
              rounded-full 
              bg-gradient-to-r 
              from-indigo-500 
              via-purple-500 
              to-pink-500
              mx-auto
              opacity-90
              group-hover:opacity-100
              transition-opacity
              duration-300
            "
          />
        </div>
      ))}
    </div>
  );
}
