import React from "react";

interface HeadingProps {
  center?: boolean;
  text: string;
  color?: "black" | "white";
}

const Heading = ({ center, text, color }: HeadingProps) => {
  return (
    <div className="mb-3 md:mb-5">
      <div
        className={` text-2xl mb-5 text-black px-3 md:px-10 md:text-5xl   
          ${center ? "text-center" : "text-start"} ${
          color ? "text-black" : "text-white"
        }
          `}
      >
        {text}
      </div>
      <hr className="w-full " />
    </div>
  );
};

export default Heading;
