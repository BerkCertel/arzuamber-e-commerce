import React from "react";

interface HeadingProps {
  center?: boolean;
  text: string;
}

const Heading: React.FC<HeadingProps> = ({ center, text }) => {
  return (
    <div className="mb-3 md:mb-10">
      <div
        className={` text-2xl mb-5 text-black px-3 md:px-10 md:text-5xl   ${
          center ? "text-center" : "text-start"
        }`}
      >
        {text}
      </div>
      <hr className="w-full" />
    </div>
  );
};

export default Heading;
