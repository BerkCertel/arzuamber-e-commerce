import React from "react";
import { IconType } from "react-icons";

interface ButtonProps {
  text: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  small?: boolean;
  outline?: boolean;
  icon?: IconType | undefined;
  disabled?: boolean;
}

function Button({
  text,
  onClick,
  small,
  outline,
  disabled,
  icon: Icon,
}: ButtonProps) {
  return (
    <button
      className={`rounded-lg p-3  ${
        outline ? "border text-black" : "bg-black text-white"
      } ${small ? "w-[250px] " : "w-full"}`}
      disabled={disabled}
      onClick={onClick}
    >
      {Icon && <Icon />}
      {text}
    </button>
  );
}

export default Button;
