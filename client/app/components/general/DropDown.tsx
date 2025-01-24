"use client";

import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

interface Option {
  id: string | number;
  name: string;
}

interface DropdownProps {
  options: Option[];
  selectedOption?: string;
  onSelect: (option: string) => void;
  placeholder?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  selectedOption,
  onSelect,
  placeholder = "Select an option",
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option: string) => {
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full">
      {/* Dropdown Header */}
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className="border border-primary rounded-lg p-3 bg-mywhite cursor-pointer flex justify-between items-center shadow-md"
      >
        <span className="text-primary capitalize">
          {selectedOption || placeholder}
        </span>
        <span className="text-primary">
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </span>
      </div>

      {/* Dropdown Options */}
      {isOpen && (
        <div className="absolute w-full mt-1 bg-mywhite border border-primary rounded-lg shadow-md z-10">
          {options.map((option) => (
            <div
              key={option.id}
              onClick={() => handleSelect(option.name)}
              className={`p-3 cursor-pointer hover:bg-thirdLight capitalize ${
                selectedOption === option.name
                  ? "bg-thirdDark text-mywhite"
                  : "text-myblack"
              }`}
            >
              {option.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
