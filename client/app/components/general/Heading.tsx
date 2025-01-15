import React from "react";

interface HeadingProps {
  center?: boolean;
  text: string;
}

const Heading: React.FC<HeadingProps> = ({ center, text }) => {
  return (
    <div
      className={`my-3 md:my-10 text-lg text-slate-500 px-3 md:px-10 md:text-4xl ${
        center ? "text-center" : "text-start"
      }`}
    >
      {text}
    </div>
  );
};

export default Heading;
