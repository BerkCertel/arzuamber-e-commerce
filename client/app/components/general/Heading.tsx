import React from "react";

interface HeadingProps {
  center?: boolean;
  text: string;
}

const Heading: React.FC<HeadingProps> = ({ center, text }) => {
  return (
    <div
      className={`my-3 md:my-10 text-2xl text-black px-3 md:px-10 md:text-5xl underline underline-offset-8 ${
        center ? "text-center" : "text-start"
      }`}
    >
      {text}
    </div>
  );
};

export default Heading;
