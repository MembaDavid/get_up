import Btn1 from "./buttons/btn1";
function Hero() {
  return (
    <div className="flex min-h-screen flex-col h-3/4 items-between justify-start">
      <h1 className="text-5xl font-bold mb-4">Welcome to My App</h1>
      <h2>Creative Developer & Designer</h2>
      <p className="text-lg mb-8">I help brands and startups create beautiful digital
         experiences through thoughtful design and clean code.</p>
      <span className="flex gap-4">
        <Btn1 />
        <Btn1 />
      </span>
      
    </div>
  );
}
export default Hero;