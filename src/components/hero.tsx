import Btn from "./buttons/button";
import { ImageWithFallback } from "./imageWithFallBack";
import { FaDownload, FaArrowRight } from "react-icons/fa6";
function Hero() {
  const shape= "whatever works";
  return (
    <div className="flex min-h-screen flex-col h-3/4 items-between justify-start">
      <h1 className="text-5xl font-bold mb-4">Welcome to My App</h1>
      <h2>Creative Developer & Designer</h2>
      <p className="text-lg mb-8">I help brands and startups create beautiful digital
         experiences through thoughtful design and clean code.</p>
      <span className="flex gap-4">

        <Btn>
          View My Work
          <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-2 inline-block ml-2 hover:mr-4" />
        </Btn>
        <Btn>
          <FaDownload className="transition-transform duration-300 group-hover:translate-x-2 inline-block mr-2" />
          Download CV
        </Btn>              
      </span>
     <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1668752741330-8adc5cef7485?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHNob3QlMjBhZnJpY2FufGVufDB8fDB8fHww"
                  alt="Professional headshot"
                  className="w-72 h-72 rounded-full object-cover border-4 border-background shadow-xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground text-2xl">✨</span>
              </div>
            </div>
          </div>
      
    </div>
  );
}
export default Hero;