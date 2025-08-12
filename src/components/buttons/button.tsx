import React from "react";

function Btn({
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> ) {
  return (
    <button className="group transition-color duration-300 border-2 border-gray-950 hover:border-gray-800
    px-4 py-2 bg-gray-950 hover:bg-gray-800 text-white rounded" {...props}>
      <span className="font-semibold flex">{children || "Click Me"}</span>      
    </button>
  );
}
export default Btn;