import React from "react";
import { IconType } from "react-icons";

interface ButtonProps {
  text: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  size?: "small" | "medium" | "large";
  outline?: boolean;
  icon?: IconType | undefined;
  disabled?: boolean;
  primary?: boolean;
  animation?: boolean;
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
}: ButtonProps) {
  const sizeClasses = {
    small: "w-[250px]",
    medium: "w-[500px]",
    large: "w-full",
  };

  return (
    <button
      className={`rounded-lg p-3  ${
        outline ? "border text-black" : "bg-black text-white"
      } ${sizeClasses[size]} // Boyutları burada dinamik olarak kullanıyoruz
      ${
        animation
          ? "hover:brightness-110 hover:scale-105 transition-all duration-300"
          : ""
      }
      ${primary ? "bg-primaryLight text-mywhite" : ""}
      `}
      disabled={disabled}
      onClick={onClick}
    >
      {Icon && <Icon />}
      {text}
    </button>
  );
}

export default Button;
