import React from "react";
import { IconType } from "react-icons";

interface ButtonProps {
  text?: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  size?: "icon" | "small" | "medium" | "large";
  outline?: boolean;
  icon?: IconType | undefined;
  disabled?: boolean;
  primary?: boolean;
  animation?: boolean;
  iconSize?: number;
}

function Button({
  text,
  onClick,
  size = "medium",
  outline,
  disabled,
  icon: Icon,
  primary,
  animation,
  iconSize = 20,
}: ButtonProps) {
  const sizeClasses = {
    icon: "w-[40px] h-[40px]",
    small: "w-[250px]",
    medium: "w-[500px]",
    large: "w-full",
  };

  return (
    <button
      className={`rounded-lg p-3 flex justify-center items-center gap-2   ${
        outline ? "border text-black" : "bg-black text-white"
      } ${sizeClasses[size]} 
      ${
        animation
          ? "hover:brightness-110 hover:scale-105 transition-all duration-300"
          : ""
      }
      ${primary ? "bg-primaryLight text-mywhite" : ""}
      ${disabled ? "cursor-not-allowed bg-thirdLight" : ""}
      `}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
      {Icon && <Icon size={iconSize} />}
    </button>
  );
}

export default Button;
