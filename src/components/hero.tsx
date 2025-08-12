import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Btn from "./buttons/button";
import { ImageWithFallback } from "./imageWithFallBack";

export default function Hero() {
  const stats = [
    { value: "50+", label: "Projects Completed" },
    { value: "10+", label: "Years of Experience" },
    { value: "100%", label: "Client Satisfaction" },
  ];

  const socials = [
    { icon: <FaGithub />, href: "https://github.com" },
    { icon: <FaLinkedin />, href: "https://linkedin.com" },
    { icon: <FaTwitter />, href: "https://twitter.com" },
  ];

  return (
    <section
      id="home"
      aria-label="Hero section"
      className="min-h-screen flex items-center justify-center pt-20"
    >
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <header>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Hi, I'm <span className="text-primary">David</span>
          </h1>
          <h2 className="text-lg md:text-xl text-muted-foreground mb-6">
            Creative Developer & Designer
          </h2>
          <p className="text-base text-muted-foreground mb-8 max-w-md">
            I craft beautiful and functional digital experiences. Let’s work
            together to bring your ideas to life.
          </p>

          {/* Buttons */}
          <nav className="flex gap-4 mb-10">
            <Btn>Get in Touch</Btn>
            <Btn>View Portfolio</Btn>
          </nav>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mb-12">
            {stats.map(({ value, label }) => (
              <div key={label} className="text-center md:text-left">
                <h3 className="text-2xl font-semibold">{value}</h3>
                <p className="text-sm text-muted-foreground">{label}</p>
              </div>
            ))}
          </div>

          {/* Socials */}
          <div className="flex gap-6 text-lg">
            {socials.map(({ icon, href }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {icon}
              </a>
            ))}
          </div>
        </header>

        {/* Image */}
        <figure className="relative flex justify-center">
          <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center hover:scale-105 transition-transform duration-300">
            <ImageWithFallback
              src="/images/hero.jpg"
              alt="Portrait of David, Creative Developer & Designer"
              className="w-72 h-72 object-cover rounded-full border-4 border-white shadow-lg"
            />
            <figcaption className="sr-only">
              Portrait of David, Creative Developer & Designer
            </figcaption>
          </div>

          {/* Badge */}
          <div className="absolute bottom-4 right-4 bg-primary text-white text-sm px-3 py-1 rounded-full shadow-lg animate-pulse">
            ✨ Available for work
          </div>
        </figure>
      </div>
    </section>
  );
}
