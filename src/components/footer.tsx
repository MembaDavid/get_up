import Link from "next/link";


export default function Footer() {
const navItems = ["Home", "About", "Portfolio", "Blog", "Contact"];

  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-20 w-screen">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        
        {/* Logo & Tagline */}
        <a href="/">
          <div className="mb-6 md:mb-0 flex items-center space-x-3">
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-700 text-gray-100 font-bold text-xl shadow-sm">
            G
          </span>
          <span className="font-semibold text-lg">Get Up</span>
        </div>
        </a>

        {/* Navigation */}
        <nav className="flex space-x-6 mb-6 md:mb-0">
          {navItems.map((label) => {
        // Lowercase and remove spaces for path
        const path =
          label.toLowerCase() === "home" ? "/" : `/${label.toLowerCase()}`;

        return (
          <Link
            key={label}
            href={path}
            className="hover:text-white transition-colors"
          >
            {label}
          </Link>
        );
      })}
        </nav>

        {/* Social Icons */}
        <div className="flex space-x-6 text-gray-400">
          {/* Replace with react-icons or inline SVG as you prefer */}
          <a href="#" aria-label="Twitter" className="hover:text-gray-200 transition-colors">
            {/* Example: simple Twitter SVG */}
            <svg
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
            </svg>
          </a>
          <a href="https://github.com/" aria-label="GitHub" className="hover:text-gray-200 transition-colors">
            <svg
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12a12 12 0 008.21 11.43c.6.11.82-.26.82-.58v-2.17c-3.34.73-4.04-1.61-4.04-1.61a3.18 3.18 0 00-1.34-1.76c-1.1-.75.09-.74.09-.74a2.5 2.5 0 011.82 1.22 2.54 2.54 0 003.47 1 2.54 2.54 0 01.75-1.59c-2.67-.3-5.47-1.33-5.47-5.92a4.6 4.6 0 011.22-3.19 4.27 4.27 0 01.12-3.15s1-.32 3.3 1.23a11.44 11.44 0 016 0c2.3-1.55 3.3-1.23 3.3-1.23a4.27 4.27 0 01.12 3.15 4.59 4.59 0 011.22 3.19c0 4.6-2.8 5.62-5.48 5.92a2.85 2.85 0 01.81 2.21v3.28c0 .32.22.7.82.58A12 12 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/david-memba-927a34275/" aria-label="LinkedIn" className="hover:text-gray-200 transition-colors">
            <svg
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0V8zm7 0h5v2.2c.7-1.3 2.4-2.7 5-2.7 5.4 0 6.4 3.6 6.4 8.3V24h-5v-7.6c0-1.8 0-4.1-2.5-4.1-2.5 0-2.8 1.8-2.8 3.9V24H7V8z" />
            </svg>
          </a>
        </div>
      </div>

      <p className="text-center text-gray-400 mt-8 text-sm select-none">
        &copy; {new Date().getFullYear()} Get Up. All rights reserved.
      </p>
    </footer>
  );
}
